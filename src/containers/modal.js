import React from 'react'
import ReactDOM from 'react-dom'

import EditPageType from '../components/Dialog/EditPageType'

let container = null

const closeModal = e => {
  if (container) {
    document.body.removeChild(container)
    container = null
  }
}

const modal = props => {
  closeModal()
  container = document.createElement('div')
  document.body.appendChild(container)
  ReactDOM.render(<EditPageType close={closeModal} />, container)
}

export default modal
