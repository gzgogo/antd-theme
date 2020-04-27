import React, { Component } from 'react'
import { Popover, Button, message } from 'antd'
import { SketchPicker } from 'react-color'
import CopyToClipboard from 'react-copy-to-clipboard'

const copyToClipboard = (str) => {
  const el = document.createElement('textarea')
  el.value = str
  document.body.appendChild(el)
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
}
export default class ColorPicker extends Component {
  state = {
    color: '#3690FF',
  }

  onChange = (color) => {
    this.setState({ color: color.hex })
  }

  onChangeComplete = (color) => {
    copyToClipboard(color.hex)
  }

  render() {
    const picker = (
      <SketchPicker
        width={240}
        disableAlpha={true}
        color={this.state.color}
        onChange={this.onChange}
        onChangeComplete={this.onChangeComplete}
      />
    )

    return (
      <Popover
        overlayClassName="color-popover"
        title={false}
        trigger="click"
        content={picker}
      >
        <div
          style={{
            background: this.state.color,
            border: '5px solid white',
            width: '80px',
            height: '32px',
            cursor: 'pointer',
          }}
        ></div>
      </Popover>
    )
  }
}
