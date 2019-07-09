import React, { Component } from 'react';
import moment from 'moment';
import {
  Row,
  Col,
  Icon,
  Form,
  Select,
  Switch,
  Radio,
  Button,
  Upload,
  DatePicker,
  Progress
} from 'antd';

import './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

class App extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleMenuThemeChange = (value) => {
    const { onMenuThemeChange } = this.props;
    typeof onMenuThemeChange === 'function' && onMenuThemeChange(value);
  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 18 }
    };
    return (
      <Form className="example-form" colon={false} onSubmit={this.handleSubmit}>
        <Col xs={24} sm={24}>
          <FormItem
            {...formItemLayout}
            label="Menu Theme"
          >
            {getFieldDecorator('menu-theme', {
              initialValue: this.props.menuTheme,
              rules: [
                {
                  required: true,
                  message:
                        'Please select your favourite menu theme!',
                  type: 'string'
                }
              ]
            })(
              <Select
                style={{ width: 300 }}
                onChange={this.handleMenuThemeChange}
              >
                <Option value="light">Light</Option>
                <Option value="dark">Dark</Option>
              </Select>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="Select[multiple]"
          >
            {getFieldDecorator('select-multiple', {
              initialValue: ['red'],
              rules: [
                {
                  required: true,
                  message:
                        'Please select your favourite colors!',
                  type: 'array'
                }
              ]
            })(
              <Select
                mode="multiple"
                placeholder="Please select favourite colors"
                style={{ width: 300 }}
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
          <FormItem {...formItemLayout} label="超链接">
            <a href="#">跳转到首页</a>
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
          <FormItem style={{ marginTop: 30 }} wrapperCol={{ span: 12, offset: 6 }}>
            <Progress percent={60} />
          </FormItem>
        </Col>
        <Col xs={24} sm={24}>
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
              <Upload
                name="logo"
                action="/upload.do"
                listType="picture"
              >
                <Button>
                  <Icon type="upload" /> Click to upload
                </Button>
              </Upload>
            )}
          </FormItem>
          <FormItem {...formItemLayout} label=" ">
            我们曾经仰望星空，思考我们在宇宙中的位置，而现在我们只会低着头，担心如何在这片土地上活下去
          </FormItem>
          <FormItem {...formItemLayout} label=" ">
            We used to look up at the sky and wonder at our place in the stars, now we just look down and worry about our place in the dirt
          </FormItem>
          <FormItem style={{ marginTop: 30 }} wrapperCol={{ span: 12, offset: 6 }}>
            <Button type="default" style={{ marginRight: 10 }}>Cancel</Button>
            <Button type="primary" htmlType="submit">
                  Submit
            </Button>
          </FormItem>
        </Col>
      </Form>
    );
  }
}

export default Form.create()(App);
