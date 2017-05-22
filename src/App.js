import React, {Component, PropTypes} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'
import {connect} from 'react-redux'

import Top from './components/Top'
import Home from './components/Home'
import Api from './components/Api'
import Edit from './components/Edit'

class App extends Component {
  render () {
    return (
      <div className='main' style={{paddingLeft: 10, paddingRight: 10}}>
        <Top />
        <Route exact path='/' component={Home} />
        <Route path='/api' component={Api} />
        <Route path='/edit' component={Edit} />
      </div>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     ...state
//   }
// }

// export default connect(mapStateToProps)(App)

export default App
