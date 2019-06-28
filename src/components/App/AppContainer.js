import App from './ListenerComp';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
function mapStateToProps(state) {
  return {};
}
function mapDispatchToProps() {
  return {};
}
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
