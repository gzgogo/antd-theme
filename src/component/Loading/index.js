import React from 'react';
import { Icon, Modal } from 'antd';

const Loading = ({ pastDelay, timedOut, error }) => {
  if (pastDelay) {
    return (
      <Modal
        visible
        wrapClassName="backgroundNone"
        closable={false}
        footer={null}
        bodyStyle={{ background: 'rgba(208, 164, 34, 0)' }}
        style={{ textAlign: 'center', background: 'none' }}
      >
        <Icon type="loading" style={{ fontSize: 32, color: '#1890ff' }} theme="outlined" />
        <p>Loading...</p>
      </Modal>
    );
  } else if (timedOut) {
    return <div>Taking a long time...</div>;
  } else if (error) {
    return <div>Error!</div>;
  }
  return null;
};

export default Loading;
