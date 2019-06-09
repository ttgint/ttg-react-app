import React from 'react';
import { Select } from 'antd';
import { CustomFormItem } from './../../App/Style';
import { validateEmail } from './Validations';
import { findValueInObjectByStringKey } from './../Module/index';
const Option = Select.Option;
class Comp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      touched: false
    };
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

        default:
      }
    } else if (this.props.value && this.state.touched) {
      status = 'success';
    }

    return status;
  };
  render = () => (
    <CustomFormItem
      spaceLeft={this.props.spaceLeft}
      spaceRight={this.props.spaceRight}
      hasFeedback={this.props.validate}
      validateStatus={this.validation()}
      label={this.props.label}
    >
      <Select
        allowClear={this.props.allowClear}
        showSearch
        placeholder=""
        value={this.props.value}
        style={{ width: '100%' }}
        filterOption={
          (input, option) => {
            if (!option.props.children) {
              return null;
            }
            if (typeof option.props.children === 'object') {
              return (
                option.props.children
                  .join(' ')
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              );
            } else {
              return (
                option.props.children
                  .toLowerCase()
                  .indexOf(input.toLowerCase()) >= 0
              );
            }
          }
          // option.props.children
          //   ? option.props.children
          //       .toLowerCase()
          //       .indexOf(input.toLowerCase()) >= 0
          //   : null
        }
        onChange={e => {
          if (!this.state.touched) {
            this.setState({
              touched: true
            });
          }
          this.props.update(e);
        }}
      >
        {this.props.options.map((item, key) => {
          if (typeof item === 'object') {
            return (
              <Option
                key={key}
                value={
                  this.props.optionValueKey
                    ? findValueInObjectByStringKey(
                        item,
                        this.props.optionValueKey
                      )
                    : item.id
                }
              >
                {this.props.optionTitleKey
                  ? typeof this.props.optionTitleKey === 'string'
                    ? item[this.props.optionTitleKey]
                    : this.props.optionTitleKey.map(
                        (key, index) =>
                          `${findValueInObjectByStringKey(item, key)} ${
                            index < this.props.optionTitleKey.length - 1
                              ? '|'
                              : ''
                          } `
                      )
                  : item.title}
              </Option>
            );
          }
          if (typeof item === 'string') {
            return (
              <Option key={item} value={item}>
                {item}
              </Option>
            );
          }
        })}
      </Select>
    </CustomFormItem>
  );
}

export default Comp;
