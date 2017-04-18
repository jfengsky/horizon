import React from 'react'
import Layout from './Layout'

export default props => (
  <Layout title={props.title}>
    <div id="root" dangerouslySetInnerHTML={{__html: props.content}} />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      (function(){
        window.__INIT_STATE = ${JSON.stringify('')}
      }())
      `,
      }}
    />
    {/*<script src="/dist/vendor.js" />
    <script src="/dist/index.js" />*/}
  </Layout>
)
