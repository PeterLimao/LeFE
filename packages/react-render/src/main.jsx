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
        show: false,
        btn: {
          name: '显示设置'
        }
      },
      methods: {
        setVisible() {
          this.show = !this.show
          this.btn.name = '123'
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
                click: 'setVisible'
              }
            },
            {
              condition: 'show',
              componentName: 'lefe-button',
              render: '显示'
            }
          ]
        }
      ]
    }}
  />,
  document.querySelector('#root')
)
