import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router';
import { connect } from 'react-redux';
import { Layout, Drawer, Icon } from 'antd';
import Header from './components/header';
import Menu from './components/menu';
import SamplePage from './pages/sample_page';
import SampleComponentsView from './pages/sample_components_view';
import config from './actions/config';
import FancyCheckbox from './components/fancy-checkbox';

const { Content } = Layout;

class Routes extends Component {
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
            title="Notification"
            placement="right"
            closable
            bodyStyle={{
              padding: 0
            }}
            onClose={() => {
              this.props.config({
                visibleNotification: false
              });
            }}
            visible={this.props.config_data.visibleNotification}
          >
            <div className="notifications_wraper">
              <div className="notification_holder">
                <div className="notification_item">
                  <div className="media">
                    <Icon style={{ color: 'green' }} type="check-circle" />
                  </div>
                  <div className="content">
                    <p className="title">Notification Title</p>

                    <p className="description">Description</p>
                    <span className="date">2019/02/22 13:30</span>
                  </div>
                </div>
              </div>
            </div>
          </Drawer>
          <Drawer
            title="Help"
            placement="right"
            closable
            onClose={() => {
              this.props.config({
                visibleHelp: false
              });
            }}
            visible={this.props.config_data.visibleHelp}
          >
            <p>Help Content</p>
          </Drawer>
          <Drawer
            title="Settings"
            placement="right"
            closable
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
                margin: '0px',
                padding: '22px 26px',
                overflowY: 'scroll',
                height: 'calc(100vh - 300px)'
              }}
            >
              <Switch>
                <Route key="settings" path="/sample_page" component={SamplePage} />
                <Route
                  key="settings"
                  path="/sample_components_view"
                  component={SampleComponentsView}
                />
                <Route exact path="/" component={SamplePage} />
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

export default connect(mapStateToProps, { config })(Routes);
