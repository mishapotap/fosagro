import React from "react"
import { AnimatedBlueButton } from "../atoms"
import { InstructionIcon } from '../../assets/svg'

export default function InstructionButton({onClick}) {
  return(
    <AnimatedBlueButton size="s" rotate="40" onClick={onClick}>
      <InstructionIcon />
    </AnimatedBlueButton>
  )
}