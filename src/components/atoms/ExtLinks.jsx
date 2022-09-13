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
                    className={isLinksOpened && "active"}
                    onClick={() => setIsLinksOpened(!isLinksOpened)}
                >
                    <LinkIcon />
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

const OpenBtnContainer = styled.div`
    width: 6vw;
    height: 3.7vw;
    overflow: hidden;

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
        transition: 0.2s;
        opacity: 0;
        display: none;
    }

    .links-enter-done {
        opacity: 1;
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
    animation: ${CursorAnim} 5s infinite;
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
    width: 4vw;
    height: 2.6vw;
    display: flex;
    align-items: center;
    justify-content: center;

    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='14' ry='14' stroke='%2300529BFF' stroke-width='2' stroke-dasharray='9%2c 7' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 14px;
    background-color: ${COLORS.white};
    transition: 0.3s;

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
    bottom: 0;
    left: 50%;

    display: none;
    z-index: 60;
    width: 28vw;
    transform: translate(-50%, -10vh);

    & > * {
        margin-bottom: 10px;

        &:last-child {
            margin-bottom: 0;
        }
    }

    @media ${DEVICE.laptopS} {
        position: static;
        width: 100%;
        margin-top: 35px;
        transform: none;

        display: block!important;
        opacity: 1!important;
    }
`
