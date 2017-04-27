/**
 * 顶部
 */
import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router-dom'

import Search from './Search'
import modal from '../containers/modal'

export default class Top extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nav: {
        showHomeList: false,
        showApiList: false,
        showEditList: false
      }
    }
  }

  render () {
    return (
      <div className='navbar navbar-inverse'>
        <div className='container-fluid'>
          <ul className='nav navbar-nav'>
            <li
              className={`dropdown ${this.state.nav.showHomeList ? 'open' : ''}`}
              onMouseEnter={this.mouseEnterHandle.bind(this, {type: 'home'})}
              onMouseLeave={this.mouseLeaveHandle.bind(this, {type: 'home'})}
            >
              <Link to='/'>首页<b className='caret' /></Link>
              <ul className='dropdown-menu'>
                <li><a href='javascript:void(0)'>创建页面</a></li>
                <li>
                  <a
                    onClick={this.pageTypeClickHandle}
                    href='javascript:void(0)'
                  >
                    编辑页面类型
                  </a>
                </li>
              </ul>
            </li>
            <li
              className={`dropdown ${this.state.nav.showApiList ? 'open' : ''}`}
              onMouseEnter={this.mouseEnterHandle.bind(this, {type: 'api'})}
              onMouseLeave={this.mouseLeaveHandle.bind(this, {type: 'api'})}
            >
              <Link to='/api'>接口<b className='caret' /></Link>
              <ul className='dropdown-menu'>
                <li><a href='javascript:void(0)'>创建接口</a></li>
                <li><a href='javascript:void(0)'>编辑接口类型</a></li>
              </ul>
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

  // 展开下拉
  mouseEnterHandle = opt => {
    this.navChange(opt, true)
  }

  // 收起下拉
  mouseLeaveHandle = opt => {
    this.navChange(opt, false)
  }

  navChange = (opt, bool) => {
    let {nav} = this.state
    switch (opt.type) {
      case 'home':
        nav.showHomeList = bool
        break
      case 'api':
        nav.showApiList = bool
        break
      default:
        nav.showEditList = bool
        break
    }
    this.setState({
      nav
    })
  }

  // 编辑页面类型
  pageTypeClickHandle = e => {
    modal({type: 'editPageType'})
  }
}

Top.propTypes = {}
