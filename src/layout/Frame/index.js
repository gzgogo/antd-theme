import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import ThemeEdit from 'page/ThemeEdit';

import './style.less';

class Frame extends Component {
  componentDidMount() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
  }

  render() {
    const { match } = this.props;
    console.log('match: %o', match);

    return (
      <Layout style={{ height: '100%' }}>
        <Route exact path={`${match.url}/`} component={ThemeEdit} />
      </Layout>
    );
  }
}

export default Frame;
