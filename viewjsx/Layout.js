import React from 'react'

export default props => (
  <html>
    <head>
      <meta content="text/html;charset=utf-8"/>
      <title>{props.title}</title>
    </head>
    <body>{props.children}</body>
  </html>
)