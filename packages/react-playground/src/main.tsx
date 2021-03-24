import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { setup } from '@lefe-1/react-render'
import * as AntD from 'antd'
import 'antd/dist/antd.css'
import { BrowserRouter } from 'react-router-dom'

setup({
  uiComponents: AntD
})

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
)
