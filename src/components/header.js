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
        <UserMenu username={user.username} />
        <HeaderMenuBtn
          onClick={() => {
            this.props.config({
              visibleHelp: !this.props.config.visibleHelp
            });
          }}
          ttgtheme={this.props.config_data.theme}
          right={335}
        >
          <Tooltip placement="bottom" title="Help">
            <Icon type="question-circle" />
          </Tooltip>
        </HeaderMenuBtn>
        <HeaderMenuBtn
          onClick={() => {
            this.props.config({
              visibleNotification: !this.props.config.visibleNotification
            });
          }}
          ttgtheme={this.props.config_data.theme}
          right={280}
        >
          <Tooltip placement="bottom" title="Notification">
            <Icon type="notification" />
          </Tooltip>
        </HeaderMenuBtn>
        <HeaderMenuBtn
          onClick={() => {
            this.props.config({
              visibleSettings: !this.props.config.visibleSettings
            });
          }}
          ttgtheme={this.props.config_data.theme}
          right={225}
        >
          <Tooltip placement="bottom" title="Settings">
            <Icon type="setting" />
          </Tooltip>
        </HeaderMenuBtn>

        <Trigger
          ttgtheme={this.props.config_data.theme}
          type={this.props.config_data.collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={this.toggle}
        />
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

export default connect(mapStateToProps, { config })(Routes);
