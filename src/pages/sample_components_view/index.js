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
  Checkbox,
  Table
} from 'antd';
import moment from 'moment';
import { connect } from 'react-redux';
import { WrapperContent } from '../../styles/index';
import config from '../../actions/config';
import AreaChart from '../../components/area-chart';
import BarChart from '../../components/bar-chart';
import BarChart2 from '../../components/bar-chart2';

const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    address: '10 Downing Street'
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    address: '10 Downing Street'
  }
];

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address'
  }
];

const { Content } = Layout;
const FormItem = Form.Item;
const { Option } = Select;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  normFile = e => {
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    };
    return (
      <Content>
        <Breadcrumb>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>Theme</Breadcrumb.Item>
        </Breadcrumb>
        <WrapperContent ttgtheme={this.props.config_data.theme}>
          <Row>
            <Col xs={24} lg={{ span: 15, offset: 3 }}>
              <Table dataSource={dataSource} columns={columns} />
            </Col>
            <Col xs={24} lg={{ span: 15, offset: 3 }}>
              <Form>
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
                      <Select mode="multiple" placeholder="Please select favourite colors">
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
                  <Row type="flex" justify="space-around" className="secondary-color">
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
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Col>
            <Col xs={24} lg={{ span: 12 }} style={{ marginTop: 15 }}>
              <Timeline>
                <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={{ span: 15, offset: 3 }} style={{ marginTop: 15 }}>
              <AreaChart dataAxis={['Saturday', 'Sunday', 'Monday']} data={[1000, 2000, 3000]} />
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={{ span: 15, offset: 3 }} style={{ marginTop: 15 }}>
              <BarChart dataAxis={['Saturday', 'Sunday', 'Monday']} data={[1000, 2000, 3000]} />
            </Col>
          </Row>
          <Row>
            <Col xs={24} lg={{ span: 15, offset: 3 }} style={{ marginTop: 15 }}>
              <BarChart2 />
            </Col>
          </Row>
        </WrapperContent>
      </Content>
    );
  }
}

const mapStateToProps = state => ({
  config_data: state.config
});

export default connect(
  mapStateToProps,
  { config }
)(Form.create()(App));
