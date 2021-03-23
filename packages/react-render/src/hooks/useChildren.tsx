import { Block } from '../types'
import React from 'react'
import BlockCom from '../components/Block'

type SlotBlocks = { [key: string]: Block[] }

export function useChildren(children: Block[]) {
  const slotBlocks: SlotBlocks = {}
  const blocks: Block[] = []

  children.forEach(child => {
    if (child.slot_LeFE) {
      slotBlocks[child.slot_LeFE] = slotBlocks[child.slot_LeFE] || []
      slotBlocks[child.slot_LeFE].push(child)
    } else {
      blocks.push(child)
    }
  })

  return {
    slotBlocks,
    blocks
  }
}

export function renderSlot(slotName: string, slotBlocks: SlotBlocks) {
  return (slotBlocks[slotName] || []).map((slot, index) => {
    return <BlockCom {...slot} key={index} />
  })
}
