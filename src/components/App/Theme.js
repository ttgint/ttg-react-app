import React, { Component } from 'react';
import {
  Row,
  Col,
  Icon,
  Breadcrumb,
  Layout,
  Form,
  Select,
  Switch,
  Radio,
  message,
  Button,
  Upload,
  DatePicker,
  Progress,
  Timeline,
  Checkbox
} from 'antd';
import moment from 'moment';
import ColorPicker from '../ColorPicker';
import SelectComp from './../Lib/Form/Select';
import './index.less';
let themes = [
  {
    title : 'dark',
    id: 1,
    config : {
      '@primary-color': '#0A53B0',
      '@body-background': '#404041',
      '@background-color-base': '#262626',
      '@border-color-base': 'rgba(255, 255, 255, 0.25)',
      '@border-color-split': '#363636',
      '@btn-default-bg': '#262626',
      '@component-background': '#171F22',
      '@layout-body-background': '#363636',
      '@layout-header-background': '#171F22',
      '@layout-trigger-background': '#313232',
      '@layout-trigger-color': 'fade(#fff, 80%)',
      '@menu-dark-submenu-bg': '#171F22',
      '@popover-bg': '#262629',
      '@layout-sider-background': '#171F22',
      '@secondary-color': '#0000ff',
      '@text-color': '#E3E3E3',
      '@text-color-secondary': '#E3E3E3',
      '@heading-color': '#FFF9F3',
      '@btn-primary-bg': '#397dcc',
      '@processing-color': '#397dcc',
      '@table-expanded-row-bg': '#3b3b3b',
      '@table-header-bg': '#3a3a3b',
      '@table-row-hover-bg': '#3a3a3b',
      '@table-selected-row-bg': '#3a3a3a'
    }
  },
  {
    title : 'light',
    id: 2,
    config : {
      '@primary-color': '#0A53B0',
      '@body-background': '#404041',
      '@background-color-base': '#262626',
      '@border-color-base': 'rgba(255, 255, 255, 0.25)',
      '@border-color-split': '#363636',
      '@btn-default-bg': '#262626',
      '@component-background': '#171F22',
      '@layout-body-background': '#FFFFFF',
      '@layout-header-background': '#171F22',
      '@layout-trigger-background': '#313232',
      '@layout-trigger-color': 'fade(#fff, 80%)',
      '@menu-dark-submenu-bg': '#ccc',
      '@popover-bg': '#262629',
      '@layout-sider-background': '#fff',
      '@secondary-color': '#0000ff',
      '@text-color': '#000000',
      '@text-color-secondary': '#E3E3E3',
      '@heading-color': '#000',
      '@btn-primary-bg': '#397dcc',
      '@processing-color': '#397dcc',
      '@table-expanded-row-bg': '#3b3b3b',
      '@table-header-bg': '#3a3a3b',
      '@table-row-hover-bg': '#3a3a3b',
      '@table-selected-row-bg': '#3a3a3a'
    }
  }
]
const { Content } = Layout;
const FormItem = Form.Item;
const Option = Select.Option;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class App extends Component {
  constructor(props) {
    super(props);
    let initialValue = {
      '@primary-color': '#0A53B0',
      '@body-background': '#404041',
      '@background-color-base': '#262626',
      '@border-color-base': 'rgba(255, 255, 255, 0.25)',
      '@border-color-split': '#363636',
      '@btn-default-bg': '#262626',
      '@component-background': '#171F22',
      '@layout-body-background': '#363636',
      '@layout-header-background': '#171F22',
      '@layout-trigger-background': '#313232',
      '@layout-trigger-color': 'fade(#fff, 80%)',
      '@menu-dark-submenu-bg': '#171F22',
      '@popover-bg': '#262629',
      '@layout-sider-background': '#171F22',
      '@secondary-color': '#0000ff',
      '@text-color': '#E3E3E3',
      '@text-color-secondary': '#E3E3E3',
      '@heading-color': '#FFF9F3',
      '@btn-primary-bg': '#397dcc',
      '@processing-color': '#397dcc',
      '@table-expanded-row-bg': '#3b3b3b',
      '@table-header-bg': '#3a3a3b',
      '@table-row-hover-bg': '#3a3a3b',
      '@table-selected-row-bg': '#3a3a3a'
    };
    let vars = {};

    try {
      vars = Object.assign(
        {},
        initialValue,
        JSON.parse(localStorage.getItem('app-theme'))
      );
    } finally {
      this.state = { vars, initialValue };
      window.less
        .modifyVars(vars)
        .then(() => {})
        .catch(error => {
          message.error('Failed to update theme');
        });
    }
  }
  componentDidMount() {
    // setTimeout(() => {
    //   this.resetTheme();
    // }, 6000);
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  normFile = e => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  onChangeComplete = (varName, color) => {
    const { vars } = this.state;
    vars[varName] = color;
    this.setState({ vars });
  };

  handleColorChange = (varname, color) => {
    const { vars } = this.state;
    if (varname) vars[varname] = color;    
    window.less
      .modifyVars(vars)
      .then(() => {
        // message.success(`Theme updated successfully`);
        this.setState({ vars });
        localStorage.setItem('app-theme', JSON.stringify(vars));
      })
      .catch(error => {
        message.error('Failed to update theme');
      });
  };

  getColorPicker = (varName, position) => (
    <div className="color-selection-wrapper">
      <ColorPicker
        type="sketch"
        small
        color={this.state.vars[varName]}
        position={position || 'right'}
        presetColors={[
          '#F5222D',
          '#FA541C',
          '#FA8C16',
          '#FAAD14',
          '#FADB14',
          '#A0D911',
          '#52C41A',
          '#13C2C2',
          '#1890FF',
          '#2F54EB',
          '#722ED1',
          '#EB2F96'
        ]}
        onChangeComplete={color => this.handleColorChange(varName, color)}
      />
      <span>{varName}</span>
    </div>
  );

  resetTheme = () => {
    localStorage.setItem('app-theme', '{}');
    console.log(this.state.vars, this.state.initialValue);
    this.setState({ vars: { ...this.state.initialValue } });
    window.less.modifyVars(this.state.initialValue).catch(error => {
      message.error('Failed to reset theme');
    });
  };

  render() {
    const colorPickers = Object.keys(this.state.vars).map((varName, index) =>
      this.getColorPicker(varName, index > 3 ? 'top' : 'right')
    );
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    };
    return (
      <Content style={{ padding: '0 24px', minHeight: 280 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Theme</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ marginBottom: 50 }}>
          <div style={{ marginBottom: 50 }}>
            <SelectComp  
              spaceLeft={5}
              allowClear
              label="Price Currency"
              optionValueKey="id"
              value={this.state.selectedTheme}
              update={e => {
                let theme = themes.filter(i=> i.id === e)[0];
                window.less
                .modifyVars(theme.config)
                .then(() => {                
                  this.setState({ vars : theme.config });
                  localStorage.setItem('app-theme', JSON.stringify(theme.config));
                })
                .catch(error => {
                  message.error('Failed to update theme');
                });                
                this.setState({
                  selectedTheme: e
                });
              }}
              options={[
                {
                  id: 1,
                  title: 'Dark'
                },
                {
                  id: 2,
                  title: 'Light'
                }
              ]}
            />
          </div>
          <div style={{ marginBottom: 50 }}>
            <h3 className="title">Choose Theme Colors</h3>
          </div>

          {colorPickers}
        </div>
        <Row>
          <Col xs={24} lg={{ span: 15, offset: 3 }}>
            <Form onSubmit={this.handleSubmit}>
              <Col xs={24} md={12}>
                <FormItem {...formItemLayout} label="Select[multiple]">
                  {getFieldDecorator('select-multiple', {
                    initialValue: ['red'],
                    rules: [
                      {
                        required: true,
                        message: 'Please select your favourite colors!',
                        type: 'array'
                      }
                    ]
                  })(
                    <Select
                      mode="multiple"
                      placeholder="Please select favourite colors"
                    >
                      <Option value="red">Red</Option>
                      <Option value="green">Green</Option>
                      <Option value="blue">Blue</Option>
                    </Select>
                  )}
                </FormItem>

                <FormItem {...formItemLayout} label="Switch">
                  {getFieldDecorator('switch', {
                    valuePropName: 'checked',
                    initialValue: true
                  })(<Switch />)}
                </FormItem>

                <FormItem {...formItemLayout} label="Radio.Group">
                  {getFieldDecorator('radio-group', {
                    initialValue: 1
                  })(
                    <RadioGroup>
                      <Radio value={1}>A</Radio>
                      <Radio value={2}>B</Radio>
                      <Radio value={3}>C</Radio>
                      <Radio value={4}>D</Radio>
                    </RadioGroup>
                  )}
                </FormItem>

                <FormItem {...formItemLayout} label="Radio.Button">
                  {getFieldDecorator('radio-button', {
                    initialValue: 'a'
                  })(
                    <RadioGroup>
                      <RadioButton value="a">item 1</RadioButton>
                      <RadioButton value="b">item 2</RadioButton>
                      <RadioButton value="c">item 3</RadioButton>
                    </RadioGroup>
                  )}
                </FormItem>
                <Progress percent={60} />
              </Col>
              <Col xs={24} sm={12}>
                <FormItem {...formItemLayout} label="Date">
                  {getFieldDecorator('date', {
                    initialValue: moment()
                  })(<DatePicker />)}
                </FormItem>
                <FormItem {...formItemLayout} label="Upload">
                  {getFieldDecorator('upload', {
                    valuePropName: 'fileList',
                    getValueFromEvent: this.normFile
                  })(
                    <Upload name="logo" action="/upload.do" listType="picture">
                      <Button>
                        <Icon type="upload" /> Click to upload
                      </Button>
                    </Upload>
                  )}
                </FormItem>
                <FormItem wrapperCol={{ span: 12, offset: 6 }}>
                  <Button type="default" style={{ marginRight: 15 }}>
                    Cancel
                  </Button>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </FormItem>

                <Row type="flex" justify="center">
                  <Checkbox checked>One</Checkbox>
                  <Checkbox>Two</Checkbox>
                  <Checkbox>Three</Checkbox>
                </Row>
                <Row
                  type="flex"
                  justify="space-around"
                  className="secondary-color"
                >
                  color : @secondary-color;
                  <Switch
                    checkedChildren={<Icon type="check" />}
                    unCheckedChildren={<Icon type="close" />}
                    defaultChecked
                  />
                </Row>
              </Col>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col xs={24} lg={{ span: 9, offset: 3 }} style={{ marginTop: 15 }}>
            <Timeline>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>
                Solve initial network problems 2015-09-01
              </Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>
                Network problems being solved 2015-09-01
              </Timeline.Item>
            </Timeline>
          </Col>
          <Col xs={24} lg={{ span: 12 }} style={{ marginTop: 15 }}>
            <Timeline>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item>
                Solve initial network problems 2015-09-01
              </Timeline.Item>
              <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              <Timeline.Item>
                Network problems being solved 2015-09-01
              </Timeline.Item>
            </Timeline>
          </Col>
        </Row>
      </Content>
    );
  }
}

export default Form.create()(App);
