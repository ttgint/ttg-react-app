import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import config from './../../Actions/config';


class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    this.props.history.listen(async (location, action) => {
      let locationAddress = location.pathname.split('/');
      locationAddress.splice(0, 1);
      locationAddress.splice(locationAddress.length - 1, 1);
      locationAddress = locationAddress.join('/');
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      if (
        location.pathname !== this.state.location.pathname         
      ) {
        this.props.config({
          preload_page: true,
          show_notification: false
        });
        
      }
      await this.setState({
        location
      });
    });
  }
  componentDidMount() {
    this.setState({
      location: this.props.location
    });
  }
  render = () => this.props.children;
}
const mapStateToProps = state => ({
  config_data: state.config
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      config
    },
    dispatch
  );
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
