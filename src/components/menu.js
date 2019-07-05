import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Layout, Menu, Icon } from 'antd';
import config from '../actions/config';

const { Sider } = Layout;

class Routes extends Component {
  state = {};

  render() {
    return (
      <Sider trigger={null} collapsible collapsed={this.props.config_data.collapsed}>
        <div style={{ height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px' }} />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['a']}>
          <Menu.Item key="settings">
            <Icon type="setting" />
            <span>Settings</span>
            <Link to="/settings">Settings</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

const mapStateToProps = state => ({
  config_data: state.config
});

export default connect(
  mapStateToProps,
  { config }
)(Routes);
