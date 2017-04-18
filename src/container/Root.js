import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Home from '../component/Home'
import Api from '../component/Api'
import Edit from '../component/Edit'

const Root = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/api">Api</Link></li>
        <li><Link to="/edit">Edit</Link></li>
      </ul>
      <Route exact path="/" component={Home} />
      <Route path="/api" component={Api} />
      <Route path="/edit" component={Edit} />
    </div>
  </Router>
)

export default Root
