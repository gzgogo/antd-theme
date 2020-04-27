import { Modal, Button, message } from 'antd'
import request from 'umi-request'
import JSZip from 'jszip'

export default ({ themes, currentTheme, vars, visible, onHide }) => {
  const save = () => {
    let data = {}
    data[currentTheme] = {}
    Object.entries(vars).forEach(([key, value]) => {
      if (value !== themes.antd[key]) {
        data[currentTheme][key] = value
      }
    })
    request
      .post('/api/theme', { data })
      .then((res) => {
        message.success('save success')
      })
      .catch((err) => {
        console.log(err)
        message.error('server error')
      })
  }

  const download = () => {
    let jsStr = ''
    let lessStr = ''
    Object.entries(vars).forEach(([key, value]) => {
      // 只保存有修改的变量
      if (value !== themes.antd[key]) {
        value = value.replace(/\n/, '')
        jsStr += `  "${key}": "${value}",\n`
        lessStr += `@${key}: ${value};\n`
      }
    })

    if (jsStr !== '') {
      jsStr = `module.exports = {\n${jsStr}};\n`
      lessStr = `@import '~antd/lib/style/themes/default.less';\n\n${lessStr}`
      const zip = new JSZip()
      const folder = zip.folder(`antd-${this.state.currentTheme}-theme`)
      folder.file('index.js', jsStr)
      folder.file('index.less', lessStr)
      zip
        .generateAsync({
          type: 'blob',
        })
        .then((result) => {
          const aLink = document.createElement('a')
          aLink.download = `antd-${this.state.currentTheme}-theme.zip`
          aLink.href = URL.createObjectURL(result)
          aLink.click()
        })
    } else {
      message.info('nothing changed')
    }
  }

  return (
    <Modal
      title="Preview Change"
      visible={visible}
      onCancel={onHide}
      width={800}
      footer={[
        <Button type="primary" onClick={save}>
          Save
        </Button>,
        <Button onClick={download}>Download</Button>,
      ]}
    >
      <div style={{ maxHeight: '500px', overflow: 'auto' }}>
        {Object.entries(vars).map(([key, value]) => {
          return (
            <p style={{ display: 'flex' }}>
              <span style={{ width: '250px', fontWeight: 'bold' }}>
                @{key}:
              </span>
              <span style={{ flex: 1 }}>{value}</span>
            </p>
          )
        })}
      </div>
    </Modal>
  )
}
