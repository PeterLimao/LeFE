import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { setup } from '@lefe-1/react-render'
import * as AntD from 'antd'
import 'antd/dist/antd.css'

setup({
  uiComponents: AntD
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
