import { Block } from '../types'
declare type SlotBlocks = {
  [key: string]: Block[]
}
export declare function useChildren(
  children: Block[]
): {
  slotBlocks: SlotBlocks
  blocks: Block[]
}
export declare function renderSlot(
  slotName: string,
  slotBlocks: SlotBlocks
): JSX.Element[]
export {}
