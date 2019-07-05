import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { Trigger } from './styles';
import UserMenu from './components/user-menu';
import Settings from './pages/settings';

const { Header, Content, Sider } = Layout;

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
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href={this.props.config.theme === 'dark' ? 'dark.css' : 'light.css'}
        />

        <Layout style={{ minHeight: '100vh' }}>
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <div
              style={{ height: '32px', background: 'rgba(255, 255, 255, 0.2)', margin: '16px' }}
            />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['a']}>
              <Menu.Item key="settings">
                <Icon type="setting" />
                <span>Settings</span>
                <Link to="/settings">Settings</Link>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header>
              <Trigger
                ttgTheme={this.props.config.theme}
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle}
              />
              <UserMenu username={user.username} />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24
              }}
            >
              <Switch>
                <Route key="settings" path="/settings" component={Settings} />
                <Route exact path="/" component={Settings} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
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
  user: state.auth.user,
  config: state.config
});

export default connect(
  mapStateToProps,
  {}
)(Routes);
