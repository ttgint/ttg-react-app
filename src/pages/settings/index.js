import React, { Component } from 'react';

import FancyCheckbox from './FancyCheckbox';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <FancyCheckbox />
      </div>
    );
  }
}

export default Users;
