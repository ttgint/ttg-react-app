import { Icon } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import theme from './theme';

const TabHeaderUser = styled.div`
  padding: 0px 20px 0px 0px;
  cursor: pointer;
  float: right;
  right: 0px;
  top: 1px;
  height: 50px;
  button {
    float: right;
    margin: 17px 0px 0px 0px;
    position: relative;
    right: 10px;
  }
`;

const TabHeaderUserName = styled.p`
  color: ${props => theme[props.ttgTheme].headerUserNameColor} !important;
  padding-left: 15px;
  display: inline-block;
  margin: 0px;
  position: relative;
  top: -8px;
`;

const UserDropDownDetail = styled.div`
  background-color: ${props => theme[props.ttgTheme].userDropDownDetailBackgorund} !important;
  p {
    color: ${props => theme[props.ttgTheme].userDropDownDetailColor} !important;
  }
  padding: 10px 15px;
  right: -20px;
  top: -4px;
  width: 209px;
  position: absolute;
  border-bottom-left-radius: 5px;
`;

const Trigger = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  position: relative;
  top: -5px;
  color: ${props => theme[props.ttgTheme].menuTriggerColor} !important;
  &:hover {
    color: ${props => theme[props.ttgTheme].menuTriggerColor} !important;
  }
`;

const TabHeaderUserIcon = styled(Icon)`
  color: ${props => theme[props.ttgTheme].headerUserIconColor} !important;
  position: relative;
  top: -3px;
  margin-left: 10px;
  font-size: 26px !important;
`;

const TabHeaderToggleIcon = styled(Icon)`
  color: ${props => theme[props.ttgTheme].headerUserIconColor} !important;
  position: absolute;
  right: 20px;
  top: 25px;
`;
const HeaderMenuBtn = styled.button`
  color: #fff;
  right: ${props => props.right}px;
  float: right;
  top: -1px;
  background-color: transparent;
  width: 50px;
  border: 0px;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  height: 100%;
  .anticon {
    position: relative;
    top: -8px;
  }
  &:hover {
    a {
      color: ${props => theme[props.ttgTheme].headerMenuBtnColor} !important;
    }
  }
  a {
    color: ${props => theme[props.ttgTheme].headerMenuBtnColor} !important;
  }
`;

export {
  TabHeaderUserIcon,
  Trigger,
  TabHeaderUserName,
  TabHeaderUser,
  TabHeaderToggleIcon,
  UserDropDownDetail,
  HeaderMenuBtn
};
