import atob from 'atob';
import accounting from 'accounting';
export const validateEmail = email => {
  const regex = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};
export const validateWebsite = web_address => {
  const regex = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  return regex.test(String(web_address).toLowerCase());
};
const b64toBlob = (b64Data, contentType, sliceSize) => {
  contentType = contentType || '';
  sliceSize = sliceSize || 512;
  var byteCharacters = atob(b64Data.split(',')[1]);
  var byteArrays = [];
  for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    var slice = byteCharacters.slice(offset, offset + sliceSize);
    var byteNumbers = new Array(slice.length);
    for (var i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }
  var blob = new Blob(byteArrays, { type: contentType });
  return blob;
};
export const toDataURL = (url, token) =>
  fetch(url, {
    method: 'GET',
    headers: new Headers({
      token: token
    })
  })
    .then(response => response.blob())
    .then(
      blob =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );
export const downloadURI = async (uri, name) => {
  let user = localStorage.getItem('user');
  if (user) {
    user = JSON.parse(user);
  }
  let data = await toDataURL(uri, user.user.token);
  var a = window.document.createElement('a');
  a.href = window.URL.createObjectURL(
    b64toBlob(data, `Applicaiton/${uri.split('.').pop()}`),
    { type: `Applicaiton/${uri.split('.').pop()}` }
  );
  a.download = name ? name : `${Date.now()}.${uri.split('.').pop()}`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
export const downloadTextToFile = (filename, text) => {
  var element = document.createElement('a');
  element.setAttribute(
    'href',
    'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
  );
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
};
export const formatDate = date => {
  date = new Date(date);
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12;
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  var strTime = hours + ':' + minutes + ' ' + ampm;
  return (
    date.getMonth() +
    1 +
    '/' +
    date.getDate() +
    '/' +
    date.getFullYear() +
    '  ' +
    strTime
  );
};
export const findValueInObjectByStringKey = (o, s) => {
  s = s.replace(/\[(\w+)\]/g, '.$1');
  s = s.replace(/^\./, '');
  var a = s.split('.');
  for (var i = 0, n = a.length; i < n; ++i) {
    var k = a[i];
    if (k && o) {
      if (k in o) {
        o = o[k];
      }
    } else {
      return;
    }
  }
  return o;
};
export const updateValueInObjectByStringKey = (targetObject, key, value) => {
  var keys = key.split('.'),
    obj = targetObject || window,
    keyPart;
  while ((keyPart = keys.shift()) && keys.length) {
    obj = obj[keyPart];
  }
  obj[keyPart] = value;
};

export const parseMoney = (value, symbol) => {
  return value && value !== 0
    ? accounting.formatMoney(
        value,
        symbol,
        value.toString().split('.')[1]
          ? value.toString().split('.')[1].length
          : 0
      )
    : `${symbol} 0`;
};
