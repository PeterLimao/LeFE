import Page from './components/Page'
import './components/blocks'
interface SetupConfig {
  uiComponents: any
}
declare function setup({ uiComponents }: SetupConfig): void
export { Page, setup }
