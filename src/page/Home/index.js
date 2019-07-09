import React, { Component } from 'react';
// import { PropTypes } from 'prop-types';
import { inject, observer } from 'mobx-react';
import cssModules from 'react-css-modules';
import Form from './Form';
import styles from './style.less';

@inject('homeStore')
@observer
@cssModules(styles)
class Home extends Component {
  async componentWillMount() {
    const { onWillMount } = this.props.homeStore;
    await onWillMount();

    window.dplus.track('page_load', {
      name: '首页',
      url: this.props.location.pathname
    });
  }

  onChange = () => {

  }

  render() {
    // const {   } = this.props.homeStore;

    return (
      <div style={{ backgroundColor: '#f0f2f5' }}>
        <Form />
      </div>
    );
  }
}

export default Home;
