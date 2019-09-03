import React from 'react';
import './style.less';

const PreviewWrapper = ({ id, title, children }) => (
  <section id={id} className="component-preview">
    <h3 className="title">{title}</h3>
    {children}
  </section>
);

export default PreviewWrapper;
