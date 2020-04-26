import { useState } from 'react'
import { Select, Modal, Button, Form, Input, Layout } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import request from 'umi-request'

const { Option } = Select
const { Item } = Form

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
}

export default ({ themes, currentTheme, onThemeChange, addTheme }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [form] = Form.useForm()

  const onChange = (key) => {
    if (key !== 'add') {
      onThemeChange(key)
    } else {
      setModalVisible(true)
    }
  }

  const add = () => {
    form.validateFields().then((result) => {
      const { source, name } = result
      let data = {}
      let theme = themes[source]
      if (source === 'antd') {
        theme = {}
      }
      data[name] = theme
      request
        .post('/api/theme', {
          data,
        })
        .then((res) => {
          setModalVisible(false)
          addTheme(data)
          onThemeChange(name)
        })
        .catch((err) => {
          console.log(err)
          message.error('server error')
        })
    })
  }

  return (
    <div className="theme-card-title">
      <div>Theme</div>
      <Select
        value={currentTheme}
        placeholder="选择预置主题"
        size="small"
        style={{ width: 140 }}
        onChange={onChange}
      >
        {Object.keys(themes).map((item) => (
          <Option key={item} value={item}>
            {item}
          </Option>
        ))}
        <Option key="add">
          <PlusOutlined /> New
        </Option>
      </Select>
      <Modal
        title="New Theme"
        visible={modalVisible}
        onCancel={() => {
          setModalVisible(false), form.resetFields()
        }}
        footer={[
          <Button type="primary" onClick={add}>
            Add
          </Button>,
        ]}
      >
        <Form {...layout} form={form}>
          <Item label="Source" name="source">
            <Select style={{ width: '260px' }} placeholder="The original theme">
              {Object.keys(themes).map((item) => (
                <Option key={item} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Item>
          <Item
            label="name"
            name="name"
            required
            rules={[
              {
                pattern: /^[a-z]\w+/,
                message: 'please enter keyword',
              },
              {
                validator: (rule, value) => {
                  if (Object.keys(themes).indexOf(value) >= 0) {
                    return Promise.reject('name is exist')
                  }
                  return Promise.resolve()
                },
              },
            ]}
          >
            <Input
              style={{ width: '260px' }}
              placeholder="Theme name & keyword"
            />
          </Item>
        </Form>
      </Modal>
    </div>
  )
}
