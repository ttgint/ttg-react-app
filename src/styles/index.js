import { Icon } from 'antd';
import { connect } from 'react-redux';
import styled from 'styled-components';
import theme from './theme';

const TabHeaderUser = styled.div`
  width: 210px;
  cursor: pointer;
  position: absolute;
  right: 0px;
  top: 1px;
  height: 60px;
  border-left: 1px solid #efefef;
  button {
    float: right;
    margin: 17px 0px 0px 0px;
    position: relative;
    right: 10px;
  }
`;

const TabHeaderUserName = styled.p`
  color: ${props => theme[props.ttgTheme].headerUserNameColor} !important;
  padding-left: 50px;
  position: absolute;
`;

const UserDropDownDetail = styled.div`
  background-color: ${props => theme[props.ttgTheme].userDropDownDetailBackgorund} !important;
  p {
    color: ${props => theme[props.ttgTheme].userDropDownDetailColor} !important;
  }
  padding: 10px 15px;
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
  color: ${props => theme[props.ttgTheme].menuTriggerColor} !important;
  &:hover {
    color: ${props => theme[props.ttgTheme].menuTriggerColor} !important;
  }
`;

const TabHeaderUserIcon = styled(Icon)`
  color: ${props => theme[props.ttgTheme].headerUserIconColor} !important;
  left: 12px;
  top: 20px;
  position: absolute;
  font-size: 26px !important;
`;

const TabHeaderToggleIcon = styled(Icon)`
  color: ${props => theme[props.ttgTheme].headerUserIconColor} !important;
  position: absolute;
  right: 20px;
  top: 25px;
`;

export {
  TabHeaderUserIcon,
  Trigger,
  TabHeaderUserName,
  TabHeaderUser,
  TabHeaderToggleIcon,
  UserDropDownDetail
};
