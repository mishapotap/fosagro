import React from "react"
import styled from "styled-components"
import MenuButton from "./MenuButton"
import MenuButtons from "./MenuButtons"

export default function MenuButtonWithProgress({ data }) {
    return (
        <Container>
            {/* <MenuButton
                index={item.index}
                text={item.text}
                bgColor={item.bgColor}
                bgAnimateColor={item.bgAnimateColor}
                rotate={item.rotate}
            /> */}
            <MenuButtons/>
        </Container>
    )
}
