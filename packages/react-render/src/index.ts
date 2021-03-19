import { registUIComponent } from './renderer'
import Page from './components/Page'
import './components/blocks'

interface SetupConfig {
  uiComponents: any
}

function registAntD(uiComponents: any) {
  registUIComponent('lefe-button', { Button: uiComponents.Button })
  registUIComponent('lefe-card', { Card: uiComponents.Card })
}

export function setup({ uiComponents }: SetupConfig) {
  registAntD(uiComponents)
}

export { Page }
