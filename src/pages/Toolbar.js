import { Menu, Form, Breadcrumb, Switch, Radio, Button } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import ColorPicker from '@/component/ColorPicker'

const FormItem = Form.Item

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        General
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Layout
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
        Navigation
      </a>
    </Menu.Item>
  </Menu>
)

export default ({
  darkMenu,
  showBreadcrumb,
  disabled,
  size,
  showEditor,
  onToggle,
  onSizeChange,
}) => {
  const antdVersion = `antd v${require('antd/package.json').version}`

  return (
    <div className="preview-header">
      {showBreadcrumb && (
        <div className="breadcrumb-header">
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
            <Breadcrumb.Item overlay={menu}>General</Breadcrumb.Item>
            <Breadcrumb.Item>{antdVersion}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      )}
      <div className="options">
        <Form layout="inline">
          <FormItem label="Dark Menu">
            <Switch checked={darkMenu} onChange={()=>onToggle('darkMenu')} />
          </FormItem>
          <FormItem label="Breadcrumb">
            <Switch
              checked={showBreadcrumb}
              onChange={()=>onToggle('showBreadcrumb')}
            />
          </FormItem>
          <FormItem label="Disabled">
            <Switch checked={disabled} onChange={()=>onToggle('disabled')} />
          </FormItem>
          <FormItem label="Size">
            <Radio.Group size="middle" value={size} onChange={(e)=>onSizeChange(e.target.value)}>
              <Radio.Button value="large">large</Radio.Button>
              <Radio.Button value="middle">middle</Radio.Button>
              <Radio.Button value="small">small</Radio.Button>
            </Radio.Group>
          </FormItem>
          <FormItem label="Color Picker">
            <ColorPicker/>
          </FormItem>
        </Form>
        <Button style={{ padding: '0 8px' }} onClick={()=>onToggle('showEditor')}>
          {showEditor ? <RightOutlined /> : <LeftOutlined />}
        </Button>
      </div>
    </div>
  )
}
