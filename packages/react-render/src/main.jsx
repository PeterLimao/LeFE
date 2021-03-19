import React from 'react'
import ReactDOM from 'react-dom'
import { setup, Page } from './index'
import * as AntD from 'antd'
import 'antd/dist/antd.css'

setup({
  uiComponents: AntD
})

ReactDOM.render(
  <Page
    config={{
      state: {
        btn: {
          name: 1
        }
      },
      methods: {
        handleClick() {
          this.btn.name = this.btn.name + 1
        }
      },
      lifeCycles: {
        mounted() {},
        beforeDestory() {}
      },
      children: [
        {
          componentName: 'lefe-card',
          children: [
            {
              componentName: 'lefe-button',
              render: '${btn.name}',
              events: {
                click: 'handleClick'
              }
            }
          ]
        }
      ]
    }}
  />,
  document.querySelector('#root')
)
