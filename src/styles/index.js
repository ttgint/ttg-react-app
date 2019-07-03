import { Icon } from 'antd';
import styled from 'styled-components';
import theme from './theme';

export const TabHeaderUser = styled.div`
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
export const TabHeaderUserIcon = styled(Icon)`
  color: ${theme.headerUserIconColor};
  left: 12px;
  top: 20px;
  position: absolute;
  font-size: 26px !important;
`;

export const TabHeaderUserName = styled.p`
  color: ${theme.headerUserNameColor};
  padding-left: 50px;
  position: absolute;
`;

export const Trigger = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: ${theme.menuTriggerColor};
  }
`;
