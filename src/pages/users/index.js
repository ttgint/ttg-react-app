import React, { Component } from 'react';
import { List, Checkbox } from 'antd';

import fetchAllUsers from '../../services/users';
import FancyCheckbox from './FancyCheckbox';

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    this.setState({ users: fetchAllUsers() });
  }

  render() {
    const { users } = this.state;

    return (
      <div>
        <FancyCheckbox />
      </div>
    );
  }
}

export default Users;
