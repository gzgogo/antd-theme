import { Row, Col, Menu, Layout, Button } from 'antd'

const { Header } = Layout

export default () => {
  return (
    <Header className="header" style={{ padding: '0 20px' }}>
      <Row type="flex">
        <Col xs={24} sm={10}>
          <div className="logo">
            <img src={require('../asset/image/logo.svg')} alt="logo" />
            <h1 className="logo-title">Ant Design</h1>
          </div>
        </Col>
        <Col xs={0} sm={14}>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
          <Button
            type="link"
            className="btn-github"
            href="https://github.com/shengbeiniao/antd-theme"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img src={require('../asset/image/github.svg')} alt="github" />
            <span>View On Github</span>
          </Button>
        </Col>
      </Row>
    </Header>
  )
}
