import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import styled from 'styled-components';
import UserMenu from './components/user-menu';

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
            <Menu.Item key="a">
              <Icon type="user" />
              <span>nav a</span>
              <Link to="/a">A</Link>
            </Menu.Item>
            <Menu.Item key="b">
              <Icon type="video-camera" />
              <span>nav b</span>
              <Link to="/b">B</Link>
            </Menu.Item>
            <Menu.Item key="c">
              <Icon type="upload" />
              <span>nav c</span>
              <Link to="/c">C</Link>
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
              <Route key="a" path="/a" component={null} />
              <Route key="b" path="/b" component={null} />
              <Route key="c" path="/c" component={null} />

              <Route exact path="/" component={null} />
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
