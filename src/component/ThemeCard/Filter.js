import { Select, Input } from 'antd'

const { Option } = Select
const { Search } = Input

export default ({ filter, onFilterChange }) => {
  const onSelectChange = (type) => {
    onFilterChange({ type, value: '' })
  }

  const onSearchChange = (e) => {
    onFilterChange({ type:filter.type, value: e.target.value })
  }

  return (
    <div style={{ display: 'flex' }}>
      <Select
        style={{ width: '100px', marginRight: '10px' }}
        value={filter.type}
        onChange={onSelectChange}
      >
        <Option value="key">Key</Option>
        <Option value="value">Value</Option>
      </Select>
      <Search
        value={filter.value}
        placeholder="filter by input"
        onChange={onSearchChange}
      />
    </div>
  )
}
