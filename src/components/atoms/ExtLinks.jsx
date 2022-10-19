import React, { useState, useRef, useEffect } from "react"
import styled from "styled-components"
import { CSSTransition } from "react-transition-group"
import DocsLink from "./DocsLink"
import { LinkIcon } from "../../assets/svg"
import { COLORS, DEVICE } from "../../constants"
import { LinkCursor } from "../../assets/svg/static"
import { CursorAnim } from "../../constants/animations"

export default function ExtLinks({ links, className, showCursor = true }) {
    const [isLinksOpened, setIsLinksOpened] = useState(false)
    const linksContRef = useRef(null)

    function handleDocClick({ target }) {
        if (!target.closest(".ext-links")) {
            setIsLinksOpened(false)
        }
    }

    useEffect(() => {
        document.addEventListener("click", handleDocClick)

        return () => {
            document.removeEventListener("click", handleDocClick)
        }
    }, [])

    return (
        <Container className={`${className || ""} ext-links`}>
            <OpenBtnContainer>
                <OpenLinksBtn
                    className={`open-ext-links ${isLinksOpened ? "active" : ""}`}
                    onClick={() => setIsLinksOpened(!isLinksOpened)}
                >
                    <StyledLinkIcon />
                    Посмотреть документы
                    {showCursor && (
                        <StyledCursor src={LinkCursor} alt="курсор" />
                    )}
                </OpenLinksBtn>
            </OpenBtnContainer>
            <CSSTransition
                in={isLinksOpened}
                timeout={200}
                appear
                classNames="links"
                nodeRef={linksContRef}
            >
                <LinksContainer
                    ref={linksContRef}
                    className="links"
                >
                    {links.map(({ text, url }, index) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <DocsLink text={text} url={url} key={index} />
                    ))}
                </LinksContainer>
            </CSSTransition>
        </Container>
    )
}

const StyledLinkIcon = styled(LinkIcon)`
    margin-right: 10px;
`

const OpenBtnContainer = styled.div`
    overflow: hidden;
    padding: 10px 20px 20px;

    display: flex;
    justify-content: center;

    @media ${DEVICE.laptopS} {
        display: none;
    }
`

const Container = styled.div`
    position: absolute;

    @media ${DEVICE.laptopS} {
        position: static;
        margin: 0 auto;
    }

    .links {
        transition: 0.25s;
        opacity: 0;
        display: none;
    }

    .links-enter-active {
        display: block;
    }

    .links-enter-done {
        opacity: 1;
        display: block;
    }

    .links-exit {
        display: block;
    }

    .links-exit-done {
        opacity: 0;
        display: none;
    }
`

const StyledCursor = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: 1.5vw;

    pointer-events: none;
    animation: ${CursorAnim} 3.8s infinite;
    transform: translateY(60%) translateX(120%);

    @media ${DEVICE.laptopM} {
        width: 23px;
    }

    @media ${DEVICE.laptopS} {
        display: none;
        animation: none;
    }
`

const OpenLinksBtn = styled.button`
    position: relative;
    padding: 0.55em 2em;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='23' ry='23' stroke='%2300529BFF' stroke-width='2' stroke-dasharray='9%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 23px;
    background-color: ${COLORS.color_animate};
    transition: 0.3s;

    font-family: CalibriLight, sans-serif;
    font-size: 1.09vw;
    color: ${COLORS.black};

    @media ${DEVICE.laptop} {
        font-size: 16px;
    }

    @media ${DEVICE.laptopM} {
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='11' ry='11' stroke='%2300529BFF' stroke-width='2' stroke-dasharray='9%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
        border-radius: 11px;
    }

    svg {
        width: 1.7vw;
    }

    &:hover,
    &.active {
        background-color: ${COLORS.blue};
        color: ${COLORS.white};

        svg {
            fill: ${COLORS.white};
        }

        ${StyledCursor} {
            display: none;
        }
    }
`

const LinksContainer = styled.div`
    position: absolute;
    top: 0;
    left: 50%;

    display: none;
    z-index: 60;
    width: 28vw;
    transform: translate(-50%, -100%);

    & > * {
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media ${DEVICE.laptopS} {
        position: static;
        width: 70vw;
        margin-top: 35px;
        margin-left: auto;
        margin-right: auto;
        transform: none;

        display: block!important;
        opacity: 1!important;

        @media ${DEVICE.mobile} {
            width: 88vw;
        }
    }
`
