/* eslint-disable no-param-reassign */
/* eslint-disable no-use-before-define */
import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { COLORS } from "../../../constants"
import { getElWindowPos, isTouchDevice } from "../../../utils"

export default function BubbleContainer({ children, makeBubbles = false }) {
    const bubblesEls = useRef({})

    function hideAllBubbles($dontHideBubble) {
        Object.values(bubblesEls.current).forEach(($bubble) => {
            if (isBubbleShown($bubble) && $bubble !== $dontHideBubble) {
                hideBubble($bubble)
            }
        })
    }

    function handleDocClick({ target }) {
        const bubbleTrigger = target.classList.contains(".bubble-trigger")
            ? target
            : target.closest(".bubble-trigger")

        if (!bubbleTrigger) {
            hideAllBubbles()
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleDocClick)

        return () => {
            document.removeEventListener("click", handleDocClick)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        if (makeBubbles) {
            initBubbles()
        } else {
            resetBubbles()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [makeBubbles])

    function showBubble($bubble) {
        $bubble.style.display = "block"
        setTimeout(() => {
            $bubble.classList.add("shown")
        }, 50)

        function handleTrend() {
            $bubble.removeEventListener("transitionend", handleTrend)
            $bubble.style.display = "block"
        }

        $bubble.addEventListener("transitionend", handleTrend)
    }

    function hideBubble($bubble) {
        $bubble.classList.remove("shown")

        function handleBblTrend() {
            $bubble.removeEventListener("transitionend", handleBblTrend)
            $bubble.style.display = "none"
        }

        $bubble.addEventListener("transitionend", handleBblTrend)
    }

    function handleBblTriggerMouseOver({ target }) {
        const showBubbleId = target.getAttribute("data-bubble-id")
        const $bubble = bubblesEls.current[showBubbleId]

        if ($bubble) {
            setBubblePos(target, $bubble)
            showBubble($bubble)
        }
    }

    function handleBblTriggerMouseOut({ target }) {
        const showBubbleId = target.getAttribute("data-bubble-id")
        const $bubble = bubblesEls.current[showBubbleId]

        if ($bubble) {
            hideBubble($bubble)
        }
    }

    const isBubbleShown = ($bubble) => $bubble.classList.contains("shown")

    function handleBblTriggerClick({ target }) {
        const showBubbleId = target.getAttribute("data-bubble-id")
        const $bubble = bubblesEls.current[showBubbleId]

        if ($bubble) {
            if (isBubbleShown($bubble)) {
                hideBubble($bubble)
            } else {
                setBubblePos(target, $bubble)
                showBubble($bubble)
                hideAllBubbles($bubble)
            }
        }
    }

    function setBubblePos($trigger, $bubble) {
        const { right, top } = getElWindowPos($trigger)

        // подсчитать высоту
        const okTop = top - 240 < 0 ? 270 : top

        if (right + 140 > document.documentElement.clientWidth) {
            $bubble.style.top = `${okTop}px`
            $bubble.style.right = `5px`
        } else if (right - 140 < 0) {
            $bubble.style.top = `${okTop}px`
            $bubble.style.left = `5px`
        } else {
            $bubble.style.top = `${okTop}px`
            $bubble.style.left = `${right}px`
        }
    }

    function initBubbles() {
        const bubbleTriggers = document.querySelectorAll(".bubble-trigger")

        bubbleTriggers.forEach((trigger) => {
            if (isTouchDevice()) {
                trigger.addEventListener("click", handleBblTriggerClick)
            } else {
                trigger.addEventListener("mouseover", handleBblTriggerMouseOver)
                trigger.addEventListener("mouseout", handleBblTriggerMouseOut)
            }

            const showBubbleId = trigger.getAttribute("data-bubble-id")
            const $bubble = document.querySelector(
                `.bubble.bubble-${showBubbleId}`
            )

            if ($bubble) {
                bubblesEls.current = {
                    ...bubblesEls.current,
                    [showBubbleId]: $bubble,
                }
            }
        })
    }

    function resetBubbles() {
        const bblTriggers = document.querySelectorAll(".bubble-trigger")

        bblTriggers.forEach((trigger) => {
            if (isTouchDevice()) {
                trigger.removeEventListener("click", handleBblTriggerClick)
            } else {
                trigger.removeEventListener(
                    "mouseover",
                    handleBblTriggerMouseOver
                )
                trigger.removeEventListener(
                    "mouseout",
                    handleBblTriggerMouseOut
                )
            }
        })

        bubblesEls.current = {}
    }

    return <Container className="bubble-container">{children}</Container>
}

const Container = styled.div`
    max-height: 100%;
    height: 100%;

    .bubble-trigger {
        position: relative;
        cursor: pointer;

        &::after {
            position: absolute;
            bottom: 0;
            left: 0;

            width: 100%;
            height: 1px;
            background-color: ${COLORS.blue};

            content: "";
            pointer-events: none;
        }
    }
`
