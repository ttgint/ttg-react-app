import React from 'react';
import { Icon, Menu, Dropdown } from 'antd';
import PropTypes from 'prop-types';
import { TabHeaderUser, TabHeaderUserIcon, TabHeaderUserName } from '../styles';

const UserMenu = props => {
  const { username } = props;
  return (
    <TabHeaderUser>
      <Dropdown
        overlay={
          <Menu selectedKeys={[]}>
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
