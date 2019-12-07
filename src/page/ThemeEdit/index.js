import React, { Component } from 'react';
import Draggable from 'react-draggable';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Row, Col, Breadcrumb, Menu, Layout, Switch, Radio, BackTop, Button, Alert } from 'antd';
import ThemeCard from 'component/ThemeCard';
import Menus from './Menus';
import {
  ColorPreview,
  TypographyPreview,
  ButtonPreview,
  RadioPreview,
  CheckboxPreview,
  InputPreview,
  SwitchPreview,
  SliderPreview,
  DatePickerPreview,
  RatePreview,
  TransferPreview,
  TablePreview,
  TagPreview,
  ProgressPreview,
  TreePreview,
  PaginationPreview,
  BadgePreview,
  AlertPreview,
  SpinPreview,
  MessagePreview,
  NotificationPreview,
  TabsPreview,
  MenuPreview,
  TooltipPreview,
  PopoverPreview,
  CardPreview,
  CarouselPreview,
  CollapsePreview,
  AvatarPreview,
  DropdownPreview,
  StepPreview,
  CascaderPreview,
  SelectPreview,
  TreeSelectPreview,
  TimePickerPreview,
  CalendarPreview,
  ListPreview,
  TimelinePreview,
  PopconfirmPreview,
  ModalPreview,
  FormPreview
} from './previews';

import './style.less';

const { Header, Content, Sider } = Layout;
const { Item: FormItem } = Form;

class ThemeEdit extends Component {
  constructor(props) {
    super(props);

    // let defaultTheme;
    // const theme = window.location.search.split('=');
    // if (theme[1]) {
    //   [, defaultTheme] = theme;
    // }

    this.state = {
      // defaultTheme,
      size: 'default',
      disabled: false,
      darkMenu: false,
      showBreadcrumb: true
    };
  }

  handleToggle = prop => (enable) => {
    this.setState({ [prop]: enable });
  };

  handleSizeChange = (e) => {
    this.setState({ size: e.target.value });
  };

  render() {
    const { theme } = this.props.match.params;
    const { size, disabled, darkMenu, showBreadcrumb } = this.state;

    const antdVersion = `antd v${require('antd/package.json').version}`;

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
    );

    return (
      <Layout className="theme-edit">
        <Header className="header" style={{ padding: '0 20px' }}>
          <Row type="flex">
            <Col xs={24} sm={10}>
              {/* <div className="logo">Live Theme</div> */}
              <div className="logo">
                <img src={require('../../asset/image/logo.svg')} alt="logo" />
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
                href="https://github.com/gzgogo/antd-theme"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={require('../../asset/image/github.svg')} alt="github" />
                <span>View On Github</span>
              </Button>
            </Col>
            {/* <div className="header-actions">
              <a href="" id="btn-install">install</a>
            </div> */}
          </Row>
        </Header>
        <Layout>
          <Sider width={200}>
            <Menus dark={darkMenu} />
          </Sider>
          <Layout
            style={{
              padding: '0 0 24px 24px',
              display: 'flex',
              flexDirection: 'column'
            }}
          >

            <div className="preview-header">
              {
                showBreadcrumb && (
                  <div className="breadcrumb-header">
                    <Breadcrumb style={{ margin: '16px 0' }}>
                      <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
                      <Breadcrumb.Item overlay={menu}>
                        General
                      </Breadcrumb.Item>
                      <Breadcrumb.Item>{antdVersion}</Breadcrumb.Item>
                    </Breadcrumb>
                  </div>
                )
              }
              <div className="options">
                <Form layout="inline">
                  <FormItem label="darkMenu">
                    <Switch checked={darkMenu} onChange={this.handleToggle('darkMenu')} />
                  </FormItem>
                  <FormItem label="showBreadcrumb">
                    <Switch checked={showBreadcrumb} onChange={this.handleToggle('showBreadcrumb')} />
                  </FormItem>
                  <FormItem label="disabled">
                    <Switch checked={disabled} onChange={this.handleToggle('disabled')} />
                  </FormItem>
                  <FormItem label="Size">
                    <Radio.Group size="default" value={size} onChange={this.handleSizeChange}>
                      <Radio.Button value="large">large</Radio.Button>
                      <Radio.Button value="default">default</Radio.Button>
                      <Radio.Button value="small">small</Radio.Button>
                    </Radio.Group>
                  </FormItem>
                </Form>
              </div>
            </div>
            <Content
              id="preview-content"
              style={{
                flex: 1,
                overflow: 'auto'
              }}
            >
              <div className="preview">
                <div className="abnormal-hint">
                  <Alert message="If the display is abnormal, please clear the storage and refresh" type="info" closable />
                </div>
                <ColorPreview />
                <TypographyPreview />
                <ButtonPreview disabled={disabled} size={size} />
                <RadioPreview disabled={disabled} size={size} />
                <CheckboxPreview disabled={disabled} size={size} />
                <InputPreview disabled={disabled} size={size} />
                <SelectPreview disabled={disabled} size={size} />
                <TreeSelectPreview disabled={disabled} size={size} />
                <SwitchPreview disabled={disabled} size={size} />
                <SliderPreview disabled={disabled} size={size} />
                <DatePickerPreview disabled={disabled} size={size} />
                <TimePickerPreview disabled={disabled} size={size} />
                <RatePreview disabled={disabled} size={size} />
                <StepPreview disabled={disabled} size={size} />
                <CascaderPreview disabled={disabled} size={size} />
                <DropdownPreview disabled={disabled} size={size} />
                <TransferPreview disabled={disabled} size={size} />
                <FormPreview disabled={disabled} size={size} />
                <TablePreview disabled={disabled} size={size} />
                <PaginationPreview disabled={disabled} size={size} />
                <ProgressPreview disabled={disabled} size={size} />
                <TreePreview disabled={disabled} size={size} />
                <SpinPreview disabled={disabled} size={size} />
                <TabsPreview disabled={disabled} size={size} />
                <MenuPreview disabled={disabled} size={size} />
                <CardPreview disabled={disabled} size={size} />
                <CarouselPreview disabled={disabled} size={size} />
                <CollapsePreview disabled={disabled} size={size} />
                <AvatarPreview disabled={disabled} size={size} />
                <CalendarPreview disabled={disabled} size={size} />
                <ListPreview disabled={disabled} size={size} />
                <TimelinePreview disabled={disabled} size={size} />
                <TagPreview disabled={disabled} size={size} />
                <BadgePreview disabled={disabled} size={size} />
                <AlertPreview disabled={disabled} size={size} />
                <MessagePreview disabled={disabled} size={size} />
                <NotificationPreview disabled={disabled} size={size} />
                <TooltipPreview disabled={disabled} size={size} />
                <PopoverPreview disabled={disabled} size={size} />
                <PopconfirmPreview disabled={disabled} size={size} />
                <ModalPreview disabled={disabled} size={size} />
              </div>
            </Content>
          </Layout>
        </Layout>
        {/* <div className="theme-card-wrapper">
          <ThemeCard defaultTheme={this.state.defaultTheme} />
        </div> */}
        <Draggable
          bounds="parent"
          handle=".theme-card .ant-card-head"
        >
          <div className="theme-card-wrapper">
            <ThemeCard theme={theme} />
          </div>
        </Draggable>
        <BackTop target={() => document.getElementById('preview-content')} />
      </Layout>
    );
  }
}

export default ThemeEdit;
