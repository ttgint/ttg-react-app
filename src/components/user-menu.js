import React from 'react';
import styled from 'styled-components';
import { Icon, Menu, Dropdown, Switch } from 'antd';
import PropTypes from 'prop-types';
import { useTheme } from '../ThemeContext';

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
const TabHeaderUserIcon = styled(Icon)`
  color: #212121;
  left: 12px;
  top: 20px;
  position: absolute;
  font-size: 26px !important;
`;

export const TabHeaderUserName = styled.p`
  color: #212121;
  padding-left: 50px;
  position: absolute;
`;

const UserMenu = props => {
  const { username } = props;
  const themeState = useTheme();
  // onClick={() => themeState.toggle()}
  return (
    <TabHeaderUser>
      <Dropdown
        overlay={
          <Menu selectedKeys={[]}>
            <Switch size="small" defaultChecked onClick={() => themeState.toggle()} />
            Dark Theme
            <Menu.Item key="settings">
              <Icon type="setting" />
              Settings
            </Menu.Item>
            <Menu.Item key="logout">
              <Icon type="logout" />
              Logout
            </Menu.Item>
          </Menu>
        }
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'block'
          }}
        >
          <TabHeaderUserIcon type="user" theme="outlined" />
          <TabHeaderUserName>{username}</TabHeaderUserName>
          <Icon
            style={{
              position: 'absolute',
              right: 20,
              top: 25
            }}
            type="down"
          />
        </div>
      </Dropdown>
    </TabHeaderUser>
  );
};

UserMenu.defaultProps = {
  username: 'N/A'
};

UserMenu.propTypes = {
  username: PropTypes.string
};

export default UserMenu;
