import React from "react"
import { AnimatedBlueButton } from "../atoms"

export default function CourseProgressButton() {
  // TODO перенести состояние в mobX
  return(
    <AnimatedBlueButton size="m" rotate="135">
      10 %
    </AnimatedBlueButton>
  )
}