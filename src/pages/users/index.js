import React, { Component } from 'react';
import { List, Checkbox } from 'antd';
import fetchAllUsers from '../../services/users';

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
        <h3 style={{ marginBottom: 16 }}>Default Size</h3>
        <List
          header={<div>Header</div>}
          footer={<div>Footer</div>}
          bordered
          dataSource={users}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
        <Checkbox.Group options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} />
      </div>
    );
  }
}

export default Users;
