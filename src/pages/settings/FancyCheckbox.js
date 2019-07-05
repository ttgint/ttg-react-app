import React, { Component } from 'react';
import { connect } from 'react-redux';
import config from '../../actions/config';
// import 'antd/dist/antd.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => (
    <div className="fancy-checkobx-wrapper">
      <input
        onChange={e => {
          this.props.config({
            theme: this.props.config_data.theme === 'light' ? 'dark' : 'light'
          });
        }}
        type="checkbox"
        id="fancy-checkox"
      />
      <label
        htmlFor="fancy-checkox"
        checked={this.props.config_data.theme === 'light'}
        className="toggle"
      >
        <span className="toggle-button">
          <span className="crater crater-1" />
          <span className="crater crater-2" />
          <span className="crater crater-3" />
          <span className="crater crater-4" />
          <span className="crater crater-5" />
          <span className="crater crater-6" />
          <span className="crater crater-7" />
        </span>
        <span className="star star-1" />
        <span className="star star-2" />
        <span className="star star-3" />
        <span className="star star-4" />
        <span className="star star-5" />
        <span className="star star-6" />
        <span className="star star-7" />
        <span className="star star-8" />
      </label>
    </div>
  );
}

const mapStateToProps = state => ({
  user: state.auth.user,
  config_data: state.config
});

export default connect(
  mapStateToProps,
  {
    config
  }
)(Users);
