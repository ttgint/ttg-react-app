import React from 'react';
import { Input } from 'antd';
import { CustomFormItem } from 'Style';
import { validateEmail, validateWebsite } from './Validations';
import { phone } from './Fromat';
class Comp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      touched: false
    };
  }
  componentDidUpdate(prevProps) {
    if (this.props.resetKey !== prevProps.resetKey) {
      this.setState({
        touched: null
      });
    }
  }
  validation = () => {
    let status;
    if (!this.props.value && this.state.touched && this.props.validate) {
      status = 'error';
    }
    if (
      this.props.value &&
      this.state.touched &&
      this.props.validate &&
      this.props.validationType
    ) {
      switch (this.props.validationType) {
        case 'email':
          if (validateEmail(this.props.value)) {
            status = 'success';
          } else {
            status = 'error';
          }
          break;
        case 'website':
          if (validateWebsite(this.props.value)) {
            status = 'success';
          } else {
            status = 'error';
          }
          break;

        default:
      }
    } else if (this.props.value && this.state.touched) {
      status = 'success';
    }

    return status;
  };
  onChange = e => {
    if (!this.state.touched) {
      this.setState({
        touched: true
      });
    }
    if (this.props.format) {
      switch (this.props.format) {
        case 'phone':
          e.target.value = phone(e.target.value);
          break;
        default:
      }
    }
    this.props.update(e.target.value);
  };
  render = () => (
    <CustomFormItem
      spaceLeft={this.props.spaceLeft}
      spaceRight={this.props.spaceRight}
      hasFeedback={this.props.validate}
      validateStatus={this.validation()}
      label={this.props.label}
    >
      <Input
        value={this.props.value}
        onChange={this.onChange}
        placeholder={this.props.placeholder}
      />
    </CustomFormItem>
  );
}

export default Comp;
