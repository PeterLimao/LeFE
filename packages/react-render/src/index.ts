import { registUIComponent } from './renderer'
import Page from './components/Page'
import './components/blocks'
import { getCurrentInstance } from './instance'

interface SetupConfig {
  uiComponents: any
}

function registAntD(uiComponents: any) {
  registUIComponent('lefe-button', { Button: uiComponents.Button })
  registUIComponent('lefe-card', { Card: uiComponents.Card })
  registUIComponent('lefe-alert', { Alert: uiComponents.Alert })
  registUIComponent('lefe-badge', { Badge: uiComponents.Badge })
  registUIComponent('lefe-tag', { Tag: uiComponents.Tag })
}

function shimGlobalComponent(uiComponents: any) {
  const ctx = getCurrentInstance()
  ctx.$message = uiComponents.message
}

function setup({ uiComponents }: SetupConfig) {
  registAntD(uiComponents)
  shimGlobalComponent(uiComponents)
}

export { Page, setup }
