import React from 'react';
import { message } from 'antd';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import isAuthenticated from '../../Actions/is_authenticated';
import config from '../../Actions/config';
class MainStateProvider extends React.PureComponent {
  constructor(porps) {
    super(porps);
    this.state = {
      loading: true
    };
  }
  async componentDidMount() {
    
    document.title = `${this.props.config_data.facility_name}`;
    await this.props.isAuthenticated();
    this.setState({
      loading: false
    });
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.props !== this.props && this.props.alert) {
      if (this.props.alert.type === 'success') {
        message.success(this.props.alert.message);
      }
      if (this.props.alert.type === 'err') {
        message.error(this.props.alert.message);
      }
    }
  }
  render = () => (!this.state.loading ? this.props.children : '');
}
const mapStateToProps = state => ({
  alert: state.alert,
  config_data: state.config
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      isAuthenticated,
      config      
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainStateProvider);
