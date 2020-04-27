import React from 'react'
import { Card } from 'antd'

const PreviewWrapper = ({ id, title, children }) => (
  <section id={id} className="component-preview">
    <Card className="component-preview" bordered={false} title={title}>
      {children}
    </Card>
  </section>
)

export default PreviewWrapper
