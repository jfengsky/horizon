/**
 * 顶部
 */
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router-dom'

import Search from './Search'

export default class Top extends Component {
  render () {
    return (
      <div className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <ul className='nav navbar-nav'>
            <li className='active'>
              <Link to='/'>首页</Link>
            </li>
            <li>
              <Link to='/api'>接口</Link>
            </li>
            <li>
              <Link to='/edit'>编辑</Link>
            </li>
          </ul>
          <Search />
        </div>
      </div>
    )
  }
}

Top.propTypes = {}
