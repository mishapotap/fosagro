import React from "react"
import { AnimatedBlueButton } from "../atoms"
import { Letter } from '../../assets/svg'

export default function MailButton({onClick}) {
  return(
    <AnimatedBlueButton size="s" rotate="20" onClick={onClick}>
      <Letter />
    </AnimatedBlueButton>
  )
}