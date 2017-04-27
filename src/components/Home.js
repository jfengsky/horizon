import React, {Component, PropTypes} from 'react'

export default class Home extends Component {
  render () {
    return (
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>页面名</th>
            <th>类型</th>
            <th>描述</th>
            <th>编辑</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>P343223S2.html</td>
            <td>团队游详情页</td>
            <td>带换机换酒</td>
            <td>修改</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

Home.propTypes = {}
