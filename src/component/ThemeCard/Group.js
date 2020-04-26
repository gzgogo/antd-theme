import { Collapse, Divider, Input, Empty } from 'antd'
import group from '@/utils/group'
import defaultTheme from 'antd/dist/default-theme'

const { Panel } = Collapse

export default ({ vars, filter, onFieldChange, onFieldComplete }) => {
  const renderField = (item) => {
    // 判断是否变更
    const name = item.name
    const value = vars.hasOwnProperty(name) ? vars[name] : item.value
    return (
      <div className="field-row" key={name}>
        <div className="field-name">{`@${name}`}</div>
        <div className="field-value">
          <Input
            style={{ width: 150 }}
            size="small"
            value={value}
            onChange={(e) => onFieldChange(name, e.target.value)}
            onPressEnter={(e) => onFieldComplete(name)}
          />
        </div>
      </div>
    )
  }

  const renderFilter = () => {
    const fileds = []
    Object.entries(defaultTheme).forEach(([name, value]) => {
      const toMatch = filter.type === 'key' ? name : value
      if (toMatch.indexOf(filter.value) >= 0) {
        fileds.push(renderField({ name, value }))
      }
    })
    if (fileds.length) {
      return <div className="search-fileds">{fileds}</div>
    } else {
      return <Empty style={{marginTop:'100px'}} image={Empty.PRESENTED_IMAGE_SIMPLE}/>
    }
  }

  const renderGroup = (list) => {
    const panels = []
    list.forEach((item) => {
      Object.entries(item).forEach(([type, list]) => {
        const fields = list.map((item) => renderField(item))
        panels.push(
          <Panel header={type} key={type}>
            {fields}
          </Panel>,
        )
      })
    })
    return <Collapse>{panels}</Collapse>
  }

  if (filter.value) {
    return renderFilter()
  }

  return Object.entries(group).map(([type, list]) => {
    return (
      <>
        <Divider key={type}>{type}</Divider>
        {renderGroup(list)}
      </>
    )
  })
}
