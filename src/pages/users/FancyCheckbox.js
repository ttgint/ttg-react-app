import React, { Component } from 'react';
// import 'antd/dist/antd.css';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'dark',
      stylePath: 'dark.css'
    };
  }

  render = () => (
    <div className="fancy-checkobx-wrapper">
      <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
      <p>{this.state.theme}</p>
      <p>{this.state.stylePath}</p>
      <input
        onChange={e => {
          this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light',
            stylePath: this.state.stylePath === 'light.css' ? 'dark.css' : 'light.css'
          });
        }}
        type="checkbox"
        id="fancy-checkox"
      />
      <label htmlFor="fancy-checkox" checked={this.state.theme === 'light'} className="toggle">
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

export default Users;
