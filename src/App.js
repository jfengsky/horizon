import React, {Component, PropTypes} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  browserHistory
} from 'react-router-dom'
import {connect} from 'react-redux'
class App extends Component {
  render () {
    return <div>114</div>
  }
}

// App.propTypes = {

// }

/*const App = () => (
  <div>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/topics">Topics</Link></li>
    </ul>
    <hr/>
    <Route exact path="/" component={Home}/>
    <Route path="/about" component={About}/>
    <Route path="/topics" component={Topics}/>
  </div>
)*/

// const mapStateToProps = (state, ownProps) => {
//   return {
//     ...state
//   }
// }

export default App
