import React from 'react';
import { Icon, Menu, Dropdown } from 'antd';
import { connect } from 'react-redux';
import {
  TabHeaderUser,
  TabHeaderUserIcon,
  TabHeaderUserName,
  TabHeaderToggleIcon,
  UserDropDownDetail
} from '../styles';

class UserMenu extends React.Component {
  state = {
    openDropdown: false
  };

  render() {
    return (
      <TabHeaderUser ttgTheme={this.props.config.theme}>
        <Dropdown
          onVisibleChange={e => {
            this.setState({
              openDropdown: !this.state.openDropdown
            });
          }}
          trigger={['click']}
          overlay={
            <UserDropDownDetail ttgTheme={this.props.config.theme}>
              <p>User Name</p>
              <p>tser.mame@gmail.com</p>
            </UserDropDownDetail>
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
            <TabHeaderUserIcon ttgTheme={this.props.config.theme} type="user" theme="outlined" />
            <TabHeaderUserName ttgTheme={this.props.config.theme}>User Name</TabHeaderUserName>
            <TabHeaderToggleIcon
              ttgTheme={this.props.config.theme}
              type={this.state.openDropdown ? 'close' : 'down'}
            />
          </div>
        </Dropdown>
      </TabHeaderUser>
    );
  }
}

const mapStateToProps = state => ({
  config: state.config
});

export default connect(
  mapStateToProps,
  {}
)(UserMenu);
