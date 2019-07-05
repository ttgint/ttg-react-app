import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import { Layout, Drawer } from 'antd';
import Header from './components/header';
import Menu from './components/menu';
import Settings from './pages/settings';
import config from './actions/config';
import FancyCheckbox from './components/fancy-checkbox';

const { Content } = Layout;

class Routes extends Component {
  state = {};

  toggle = () => {
    this.setState(prevState => ({
      collapsed: !prevState.collapsed
    }));
  };

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href={this.props.config_data.theme === 'dark' ? 'dark.css' : 'light.css'}
        />
        <Layout style={{ minHeight: '100vh' }}>
          <Drawer
            title="Settings"
            placement="right"
            closable={false}
            onClose={() => {
              this.props.config({
                visibleSettings: false
              });
            }}
            visible={this.props.config_data.visibleSettings}
          >
            <FancyCheckbox />
          </Drawer>
          <Menu />
          <Layout>
            <Header />
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

const mapStateToProps = state => ({
  config_data: state.config
});

export default connect(
  mapStateToProps,
  { config }
)(Routes);
