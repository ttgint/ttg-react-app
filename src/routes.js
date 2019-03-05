import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';
import UserMenu from './components/user-menu';

import Users from './pages/users';

const { Header, Content, Sider } = Layout;

const Trigger = styled(Icon)`
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    color: #1890ff;
  }
`;

class Routes extends Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    const { user } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div style={{ height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px' }} />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['a']}>
            <Menu.Item key="users">
              <Icon type="user" />
              <span>Users</span>
              <Link to="/users">Users</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Trigger
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
            <UserMenu username={user.username} />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#fff',
              minHeight: 280
            }}
          >
            <Switch>
              <Route key="users" path="/users" component={Users} />
              <Route exact path="/" component={Users} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

Routes.defaultProps = {
  user: {}
};

Routes.propTypes = {
  user: PropTypes.shape({ username: PropTypes.string, token: PropTypes.string })
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  null
)(Routes);
