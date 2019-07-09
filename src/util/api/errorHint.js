import React from 'react';
import { Modal } from 'antd';

class ErrorContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      msgs: []
    };

    ErrorContent.single = this;
  }

  push(msg) {
    if (this.state.msgs.indexOf(msg) < 0) {
      this.state.msgs.push(msg);
      this.setState({ msgs: this.state.msgs });
    }
  }

  render() {
    return (
      <div style={{ maxHeight: 150, overflowY: 'auto' }}>
        {this.state.msgs.map(item => (
          <div>{item}</div>
        ))}
      </div>
    );
  }
}

let isWorking = false;

const push = (msg) => {
  if (isWorking) {
    ErrorContent.single.push(msg);
  } else {
    isWorking = true;
    Modal.error({
      title: '请求错误',
      content: <ErrorContent />,
      okText: '确认',
      onOk: () => {
        isWorking = false;
      }
    });
    ErrorContent.single.push(msg);
  }
};

export default {
  push
};
