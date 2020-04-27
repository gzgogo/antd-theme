import React, { Component } from 'react'
import moment from 'moment'
import { UploadOutlined } from '@ant-design/icons'
import {
  Form,
  Select,
  Switch,
  Radio,
  Button,
  Upload,
  DatePicker,
  Progress,
  Input,
} from 'antd'
import PreviewWrapper from '../PreviewWrapper'

const FormItem = Form.Item
const { Option } = Select
const RadioButton = Radio.Button
const RadioGroup = Radio.Group

class ExampleForm extends Component {
  formRef = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }

  handleMenuThemeChange = (value) => {
    const { onMenuThemeChange } = this.props
    typeof onMenuThemeChange === 'function' && onMenuThemeChange(value)
  }

  normFile = (e) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  renderForm() {
    return <Form></Form>
  }

  render() {
    return (
      <PreviewWrapper id="Form" title="Form">
        <div className="components">
          <div className="component-row">{this.renderForm()}</div>
        </div>
      </PreviewWrapper>
    )
  }
}

export default ExampleForm
