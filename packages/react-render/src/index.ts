import { registUIComponent } from './renderer'
import Page from './components/Page'
import './components/blocks'

interface SetupConfig {
  uiComponents: any
}

function registAntD(uiComponents: any) {
  registUIComponent('lefe-button', { Button: uiComponents.Button })
  registUIComponent('lefe-card', { Card: uiComponents.Card })
  registUIComponent('lefe-alert', { Alert: uiComponents.Alert })
  registUIComponent('lefe-badge', { Badge: uiComponents.Badge })
  registUIComponent('lefe-tag', { Tag: uiComponents.Tag })
  registUIComponent('lefe-input', { Input: uiComponents.Input })
}

function setup({ uiComponents }: SetupConfig) {
  registAntD(uiComponents)
}

export { Page, setup }
