import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout, Icon, Tooltip } from 'antd';
import { Trigger, HeaderMenuBtn } from '../styles';
import UserMenu from './user-menu';
import config from '../actions/config';

const { Header } = Layout;

class Routes extends Component {
  state = {};

  toggle = () => {
    this.props.config({
      collapsed: !this.props.config_data.collapsed
    });
  };

  render() {
    const { user } = this.props;
    return (
      <Header>
        <Tooltip placement="bottom" title="Settings">
          <HeaderMenuBtn
            onClick={() => {
              this.props.config({
                visibleHelp: !this.props.config.visibleHelp
              });
            }}
            ttgTheme={this.props.config_data.theme}
            right={335}
          >
            <Icon type="question-circle" />
          </HeaderMenuBtn>
          <HeaderMenuBtn
            onClick={() => {
              this.props.config({
                visibleNotification: !this.props.config.visibleNotification
              });
            }}
            ttgTheme={this.props.config_data.theme}
            right={280}
          >
            <Icon type="notification" />
          </HeaderMenuBtn>
          <HeaderMenuBtn
            onClick={() => {
              this.props.config({
                visibleSettings: !this.props.config.visibleSettings
              });
            }}
            ttgTheme={this.props.config_data.theme}
            right={225}
          >
            <Icon type="setting" />
          </HeaderMenuBtn>
        </Tooltip>
        <Trigger
          ttgTheme={this.props.config_data.theme}
          type={this.props.config_data.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
        <UserMenu username={user.username} />
      </Header>
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
  config_data: state.config
});

export default connect(
  mapStateToProps,
  { config }
)(Routes);
