import styled from 'styled-components';
import { Icon, Button, Menu, Form, Layout, Collapse, Row } from 'antd';
import { Link } from 'react-router-dom';
const FormItem = Form.Item;
const SubMenu = Menu.SubMenu;
const Panel = Collapse.Panel;
export const LayoutWrapper = styled(Layout)`
  height: 100%;
  min-height: 95vh;
  position: relative;
  padding-bottom: 30px;
`;
export const FixedHeader = styled(Row)`
  width: 100%;
  position: fixed;
  top: 0px;
  z-index: 999999999;
`;
export const CustomFormItem = styled(FormItem)`
  position: relative;
  margin-top: ${props => (props.spaceTop ? `${props.spaceTop}px` : '0px')};
  padding-left: ${props => (props.spaceLeft ? `${props.spaceLeft}px` : '0px')};
  padding-right: ${props =>
    props.spaceRight ? `${props.spaceRight}px` : '0px'};
  margin-bottom: 0px;
  .anticon-question-circle {
    right: 5px;
    top: -25px;
    font-size: 17px;
    cursor: pointer;
    color: #b52c30;
    position: absolute;
  }
`;
export const CenteredBtn = styled(Button)`
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
export const FloatedBtn = styled(Button)`
  position: relative;
  top: 5px;
  z-index: 999;
  float: ${props => (props.float ? `${props.float}` : 'right')};
  margin-top: ${props => (props.spaceTop ? `${props.spaceTop}px` : '0px')};
  margin-left: ${props => (props.spaceLeft ? `${props.spaceLeft}px` : '0px')};
  margin-right: ${props =>
    props.spaceRight ? `${props.spaceRight}px` : '0px'};
`;
export const LoginLogo = styled.img`
  margin-top: 2em;
  margin-bottom: 2em;
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
  max-width: 300px;
`;
export const FormWrapper = styled(Form)`
  position: relative;
  top: 100px;
  width: 80%;
  display: block;
  margin: 0px auto;
  border-radius: 5px;
  padding: 10px 30px 30px 30px;
  background-color: #fff;
`;
export const LoginWrapper = styled(Form)`
  position: relative;
  top: 100px;
  display: block;
  margin: 0px auto;
  max-width: 500px;
  width: 45%;
  border-radius: 5px;
  padding: 10px 30px 30px 30px;
  background-color: #fff;
  border: 1px solid #086c95;
`;
export const StateProviderContainer = styled.div`
  width: 100%;
  height: 100%;
`;
export const TabHeaderUser = styled.div`
  width: 250px;
  cursor: pointer;
  padding-left: 10px;
  position: absolute;
  left: 0px;
  top: 0px;
  height: 54px;
  button {
    float: right;
    margin: 12px 0px 0px 0px;
    position: relative;
    right: 0px;
    padding: 8px 8px 0px 8px !important;
    font-size: 18px;
    i {
      position: relative;
      top: -3px;
    }
  }
  transition: all 0.2s ease;
  &:hover {
    background-color: #064077;
  }
`;
export const TabHeaderUserIcon = styled(Icon)`
  color: #fff;
  left: 16px;
  top: 12px;
  position: absolute;
  font-size: 31px;
`;
export const TabHeaderUserName = styled.p`
  color: #fff;
  padding-left: 50px;
  white-space: nowrap;
  position: absolute;
  top: -6px;
`;
export const TabHeaderUserRole = styled.p`
  color: #fff;
  top: 10px;
  font-size: 10px;
  padding-left: 50px;
  position: absolute;
`;
export const HeaderMenuBtn = styled.button`
  color: #fff;
  right: ${props => props.right}px;
  position: absolute;
  top: -1px;
  background-color: transparent;
  width: 60px;
  border: 0px;
  font-size: 22px;
  outline: none;
  cursor: pointer;
  &:after {
    content: "";
    position: absolute;
    right: 3px;
    top: 15px;
    height: 25px;
    width: 1px;
    background-color: #fff;
  }
  &:hover {
    a {
      color: #064077 !important;
    }
  }
  a {
    color: #fff !important;
  }
`;
export const NotificationHeader = styled.div`
  position : absolute;
  top: 0px;
  right : 80px;
  padding-top: 6px;
  padding-right: 13px;
  cursor : pointer;
  .anticon {
    font-size: 23px !important;
    color: #fff;
    position:relative;
    top:-2px;
  }
  &:after {
    content: "";
    position: absolute;
    right:-5px;
    top:15px;
    height:25px;
    width:1px;
    background-color: #fff;
  }
  .notifications_wraper {
    border-radius : 5px !important;
    border: 1px solid #efefefef;
    -webkit-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
    -moz-box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.5);
    position: absolute;
    top: 48px;
    right: -12px;
    z-index: 9999;
    background-color:#fff;
    width: 350px;
    &:after {
      top: -6px;
      right: 26px;
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      border-bottom: 7px solid #fff;
    }
    .notification_holder {
      overflow-y : scroll;
      overflow-x : hidden;
      height: 228px;
    }
    .notifications_header{
      line-height: 35px;
      font-size: 13px;
      border-bottom: 1px solid #efefef;
      font-weight: bold;
      padding-left: 10px;
      .anticon {
        color: #086c95;
        cursor: pointer;
        float: right;
        font-size: 20px !important;
        margin-top: 9px;
        margin-right: 22px;
      }
    }
    .notification_item {
      border-bottom : 1px solid #efefef;
      display: flex;
      padding-top:10px;
      min-height: 44px;
      padding-bottom: 10px;
      padding-top: 10px;
      position: relative;
      .title {
        font-weight: bold;
        font-size: 12px;
        margin-bottom: 3px;
        line-height: 18px;
        border-bottom: 1px solid #efefefef
        margin-right : 10px;
      }
      .description {
        font-size: 10px;
        line-height: 14px;
        margin-bottom: 12px;
      }
      .date {
        text-align: right;
        float: right;
        position: absolute;
        bottom: 2px;
        font-size: 9px;
        right: 5px;
        line-height :15px;
      }
      .media {
        width: 10%;
        padding-right : 15px;
        border-right : 1px solid #efefef;
      }
      .anticon {
        font-size : 17px !important;
        position: relative;
        top: 0px;
        left: 9px;
      }
      .content {
        width: 90%;
        padding-left: 5px;
        padding-right: 10px;
      }
    }

  }
`;
export const LogoutBtn = styled.button`
  color: #fff;
  right: 20px;
  position: absolute;
  top: 0px;
  background-color: transparent;
  width: 60px;
  border: 0px;
  font-size: 22px;
  outline: none;
  cursor: pointer;
  &:hover {
    color: #064077 !important;
  }
`;
export const PageHeader = styled.div`
  position: relative;
  padding-bottom: 0px;
  margin-bottom: 15px;
  border-bottom: 1px solid #efefef;
  margin-bottom: 1.6em;
  padding-bottom: 1em;
`;
export const PageHeaderTitle = styled.div`
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
`;
export const PageHeaderBtn = styled(Button)`
  float: right;
  margin-left: 10px;
  position: relative;
  top: -38px;
`;
export const TdRender = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 0px 5px;
  width: 100%;
  // background-color : ${props => props.bg};
  color: #000;
  p {
    margin : 0px;
  }
`;
export const PublicMenuItem = styled(Menu.Item)`
  border-right: ${props =>
    props.bordered ? '1px solid #efefef !important' : '0px'};

  i {
    position: relative;
    top: -2px;
  }
`;
export const ModalContainer = styled.div`
  height: ${props =>
    props.mini
      ? '40vh'
      : props.large
      ? '65vh'
      : props.height
      ? props.height
      : '60vh'};
  .ant-form-item {
    margin-bottom: 10px;
  }
  padding: 0px 24px 20px 0px;
  overflow-y: scroll;
  overflow-x: hidden;
  .input_currency_preform {
    top: 7px;
  }
`;
export const InboxEmailList = styled.ul`
  min-height: 100px;
  padding: 0px;
  list-style: none;
  max-height: 60vh;
  overflow-y: scroll;
  &::-webkit-scrollbar,
  .ant-menu::-webkit-scrollbar {
    width: 5px;
    height: 7px;
  }

  &::-webkit-scrollbar-track,
  .menu::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    border-radius: 0px;
  }

  &::-webkit-scrollbar-thumb,
  .menu::-webkit-scrollbar-thumb {
    border-radius: 0px;
    -webkit-box-shadow: inset 0 0 6px #2e698c;
  }
  li {
    line-height: 20px;
    padding: 10px 5px 10px 10px;
    cursor: pointer;
    transition: background-color 0.2s ease;
    font-size: 11px;
    margin-bottom: 2px;
    &:hover {
      border-color: #fff;
      background-color: #efefef;
    }
    &.active {
      background-color: #efefef;
    }
  }
`;
export const MailContent = styled.div`
  border: 1px solid #efefef;
  padding: 20px;
  .sender {
    border-bottom: 1px solid #efefef;
    padding-bottom: 5px;
    margin-bottom: 10px;
    .user_icon {
      margin-right: 5px;
    }
    .date_icon {
      margin-right: 5px;
    }
    .date {
      padding-top: 10px;
      font-size: 10px;
    }
    .actions {
      float: right;
      position: relative;
      top: -5px;
    }
  }
  .subject {
    border-bottom: 1px solid #efefef;
    padding-top: 20px;
    padding-bottom: 17px;
    margin-bottom: 20px;
    .subject_icon {
      margin-right: 5px;
    }
  }
`;
export const EditorWrapper = styled.div`
  border: 1px solid #efefef;
  margin-top: 10px;
  min-height: 300px;
  width: 100%;
  .rdw-editor-wrapper {
    min-height: 300px !important;
  }
  .rdw-editor-main {
    min-height: 300px !important;
  }
  .demo-editor {
    padding: 0px 10px;
  }
`;

export const InfoLine = styled.div`
  border: 1px solid #efefef;
  border-radius : 4px;
  display : flex;
  padding-bottom: 4px;
  margin-bottom: 8px;
  position: relative;
  min-height : 40px;
  .ant-form-item-control-wrapper {
    margin-bottom: 5px;
  }
  .content {        
    width : 100%;
    padding: 10px;
    > span {
      display: block;
      padding-right : 45px;
      color : #086c95;
      margin-bottom: 2px;
      border-bottom: 1px solid #ddd;
      padding-bottom: 8px;
      margin-bottom: 10px;
      font-weight: 700;
      font-size : 14px;
    }
    .value {
      margin: 0px;
      padding : 5px 3px;
      font-size : 13px;
      line-height: 24px;
      min-height: 20px;
    }
  }
  .verifier {
    position: absolute;
    right: 5px;
    top: 7px;
    padding: 0px;
    margin: 0px;    
    button {
      display : inline-block;
      width: 20px;
      height: 20px;
      margin: 0px 4px;
      &.check { 
        background-color : #72C140 !important;
        color : #fff !important;
      }
      &.close { 
        background-color : #c7254e !important;
        color : #fff !important;
      }
    }
    .double_btn {
      display: inline;
      position: relative;      
    }
  }
  .ant-checkbox-wrapper {
    display: block;
    margin: 10px 0px;
    padding-left: 8px;0  ;l
  }
  div {
    p {
      &:last-child {
        border-bottom : 0px;
      }
    }
  }
  img {
    width: 100%;
  }
`;

export const AddressAutoCompleteInput = styled.input`
  width: 100%;
  border-radius: 8px;
  border: 1px solid #d9d9d9;
  color: rgba(0, 0, 0, 0.65);
  padding: 5px 25px 5px 11px;
  height: 32px;
  font-size: 11px;
  outline: none;
  @media (max-width: 600px) {
    padding: 7px 11px;
  }
  &::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #bfbfbf;
  }
  &::-moz-placeholder {
    /* Firefox 19+ */
    color: #bfbfbf;
  }
  &:-ms-input-placeholder {
    /* IE 10+ */
    color: #bfbfbf;
  }
  &:-moz-placeholder {
    /* Firefox 18- */
    color: #bfbfbf;
  }
`;

export const InfoCard = styled.div`
  border-radius: 5px;
  padding: ${props => (props.noPadding ? '0px' : '16px 10px')};
  min-height: 300px;
  border: ${props => (props.hideBorder ? '0px' : '1px solid #efefef')};
  border-top: 0px;
  background-color: #fff;
  overflow: hidden;
  display: block;
  width: 100%;
  .title {
    margin-bottom: 14px;
    text-align: left;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    border-bottom: 1px solid #efefef;
    padding-bottom: 14px;
    button {
      float: right;
      position: relative;
      top: -3px;
    }
  }
`;
export const UploadedLogoPreview = styled.img`
  border: 1px solid #efefef;
  display: block;
  margin: 10px auto 0px;
  max-width: 160px;
`;
