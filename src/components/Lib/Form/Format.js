export const phone = e =>
  e.substring(0, 12).replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
