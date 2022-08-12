import React from "react"
import { AnimatedBlueButton } from "../atoms"
import { Letter } from '../../assets/svg'

export default function MailButton() {
  return(
    <AnimatedBlueButton size="s" rotate="20">
      <Letter />
    </AnimatedBlueButton>
  )
}