

export const checkscript = `
import FlowIDTableStaking from 0x8624b52f9ddcd04a

pub fun main() : Bool {
  return FlowIDTableStaking.stakingEnabled()
}
`