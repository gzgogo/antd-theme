import React, { Component } from 'react';
import { Popover } from 'antd';
import { ChromePicker, SketchPicker } from 'react-color';
import './style.less';

const noop = () => { };

const pickers = {
  chrome: ChromePicker,
  sketch: SketchPicker
};

const getColorStr = (color) => {
  let colorStr = color.hex;
  if (color.rgb.a !== 1) {
    colorStr = `rgba(${color.rgb.r}, ${color.rgb.g}, ${color.rgb.b}, ${color.rgb.a})`;
  }
  return colorStr;
};

export default class ColorPicker extends Component {
  static defaultProps = {
    onChange: noop,
    onChangeComplete: noop,
    position: 'bottom'
  }

  constructor(props) {
    super();
    this.state = {
      color: props.color
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ color: nextProps.color });
  }

  handleChange = (color) => {
    const hexColor = getColorStr(color);
    this.setState({ color: hexColor });
    this.props.onChange(hexColor, color);
  };

  handleChangeComplete = (color) => {
    const hexColor = getColorStr(color);
    this.setState({ color: hexColor });
    this.props.onChangeComplete(hexColor);
  };

  render() {
    const { small, type } = this.props;

    const Picker = pickers[type];

    const styles = {
      color: {
        width: small ? '16px' : '120px',
        height: small ? '16px' : '24px',
        borderRadius: '2px',
        background: this.state.color
      },
      swatch: {
        padding: '4px',
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
        display: 'inline-block',
        cursor: 'pointer'
      }
    };

    const swatch = (
      <div style={styles.swatch}>
        <div style={styles.color} />
      </div>
    );
    const picker = (
      <Picker
        {...this.props}
        color={this.state.color}
        onChange={this.handleChange}
        onChangeComplete={this.handleChangeComplete}
      />
    );

    return (
      <Popover
        overlayClassName="color-popover"
        title={false}
        trigger="click"
        content={picker}
      >
        {swatch}
      </Popover>
    );
  }
}
