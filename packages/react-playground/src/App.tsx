import React from 'react'
import { Layout, Menu, Card } from 'antd'
import { Link } from 'react-router-dom'
import { RouterView, routes } from '@/router'

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible={true}>
        <Menu defaultSelectedKeys={['1']} theme="dark" mode="inline">
          <Menu.Item key="1">
            <Link to="/">Playground 实验室</Link>
          </Menu.Item>
          <Menu.SubMenu title="通用">
            {routes.map(({ name, path }) => {
              return (
                <Menu.Item key={name}>
                  <Link to={path}>{name}</Link>
                </Menu.Item>
              )
            })}
          </Menu.SubMenu>
        </Menu>
      </Layout.Sider>
      <Layout.Content style={{ padding: '20px' }}>
        <Card>
          <RouterView />
        </Card>
      </Layout.Content>
    </Layout>
  )
}

export default App
