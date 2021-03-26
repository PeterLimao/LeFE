import React, { useMemo } from 'react'
import { Layout, Menu, Card } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { RouterView, routes } from '@/router'

function App() {
  const location = useLocation()
  const activeMenu = useMemo(() => {
    if (location.pathname === '/') return 'playground'
    return location.pathname
  }, [location.pathname])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Layout.Sider collapsible={true}>
        <Menu defaultSelectedKeys={[activeMenu]} theme="dark" mode="inline">
          <Menu.Item key="playground">
            <Link to="/">Playground 实验室</Link>
          </Menu.Item>
          <Menu.SubMenu title="通用">
            {routes.map(({ name, path }) => {
              return (
                <Menu.Item key={path}>
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
