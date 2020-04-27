import React, { Component } from 'react'
import { Form, Menu, Layout, BackTop, Alert } from 'antd'
import { LeftOutlined, RightOutlined } from '@ant-design/icons'
import ThemeCard from '@/component/ThemeCard'
import Header from './Header'
import LeftMenu from './LeftMenu'
import Toolbar from './Toolbar'
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
  FormPreview,
} from './previews'

const { Content, Sider } = Layout

export default class ThemeEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      darkMenu: false,
      showBreadcrumb: true,
      disabled: false,
      size: 'middle',
      showEditor: true,
    }
  }

  onToggle = (prop) => {
    this.setState((state) => {
      let newState = { ...state }
      newState[prop] = !state[prop]
      return newState
    })
  }

  onSizeChange = (size) => {
    this.setState({ size })
  }

  render() {
    const { theme } = this.props.match.params
    const { size, disabled, darkMenu, showBreadcrumb, showEditor } = this.state

    return (
      <Layout className="theme-edit">
        <Header />
        <Layout style={{ overflow: 'hidden' }}>
          <Sider width={200}>
            <LeftMenu dark={darkMenu} />
          </Sider>
          <Layout
            style={{
              padding: '0 0 24px 24px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Toolbar
              {...this.state}
              onToggle={this.onToggle}
              onSizeChange={this.onSizeChange}
            />
            <Content
              id="preview-content"
              style={{
                flex: 1,
                overflow: 'auto',
              }}
            >
              <div className="preview">
                <div className="abnormal-hint">
                  <Alert
                    message="If the display is abnormal, please clear the storage and refresh"
                    type="info"
                    closable
                  />
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
          <Sider
            collapsedWidth={0}
            collapsed={!this.state.showEditor}
            width={400}
          >
            <ThemeCard theme={theme} />
          </Sider>
        </Layout>
        <BackTop target={() => document.getElementById('preview-content')} />
      </Layout>
    )
  }
}
