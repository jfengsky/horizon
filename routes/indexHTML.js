import React from 'react'
import {renderToString} from 'react-dom/server'
import Root from '../src/container/Root'

const content = renderToString(<Root />)

export default content