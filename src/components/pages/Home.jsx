/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from "react"
import styled from "styled-components"
import { Link, Outlet, useLocation } from "react-router-dom"
import { Helmet } from "react-helmet"
import { observer } from "mobx-react-lite"
import { menuButtonData } from "../../data"
import { MenuButton, FooterHome } from "../molecules"
import { OOH } from "../../assets/svg/static"
import { MainBG } from "../../assets/video"
import { COLORS, DEVICE, ISENG } from "../../constants"
import { Layout, CookieModal, CookiesInfoModal } from "../atoms"
import WelcomeBackModal from "../atoms/WelcomeBackModal"
import {
    Click2,
    MainTitle,
    MainSupTitle,
    MainSupTitle2,
} from "../../assets/audio"
import { SoundStore, ModalStore } from "../../store"

// !перевод
// (из переводчика)
const engMetaData = {
    title: "PhosAgro Sustainability Training Course",
    description:
        "The term “sustainable development” is on everyone’s lips these days. It is a hot topic discussed at practically all levels in many industries. In this course, you will learn what the concept of sustainable development means for PhosAgro and what activities the company is taking to ensure sustainable development.",
}

const ruMetaData = {
    title: "Учебный курс «Устойчивое развитие» компании ФосАгро",
    description:
        "Устойчивое развитие - термин популярный. Его обсуждают практически на всех уровнях, во многих сферах. В этом курсе вы узнаете, что означает понятие устойчивого развития для ФосАгро и какие мероприятия проводится компанией для обеспечения устойчивого развития.",
}

const metaData = ISENG ? engMetaData : ruMetaData

function Home() {
    const [isTitlePlaying, setIsTitlePlaying] = useState(false)
    const [isSupTitlePlaying, setIsSupTitlePlaying] = useState(false)
    const [isSupTitle2Playing, setIsSupTitle2Playing] = useState(false)

    const clickSound = new Audio(Click2)
    const playerRef = useRef(null)

    const titleSoundRef = useRef(null)
    const supTitleSoundRef = useRef(null)
    const supTitle2SoundRef = useRef(null)

    const containerRef = useRef(null)

    const titleRef = useRef(null)
    const supTitleRef = useRef(null)

    const location = useLocation()

    const tmTitleIdRef = useRef(null)
    const tmSupTitleIdRef = useRef(null)
    const tmSupTitle2IdRef = useRef(null)

    useEffect(() => {
        if (location.pathname.includes("instruction")) {
            ModalStore.showModal("instruction")
        } else if (ModalStore.isVisible.instruction) {
            ModalStore.closeModal("instruction")
            ModalStore.closeModal("cookiesInfo")
        }
    }, [location])

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions
        if (
            !SoundStore.getIsPlaying() ||
            ModalStore.isVisible.mail ||
            ModalStore.isVisible.instruction
        ) {
            // eslint-disable-next-line no-use-before-define
            removeActiveTitleSound()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        // eslint-disable-next-line react-hooks/exhaustive-deps
        SoundStore.getIsPlaying(),
        ModalStore.isVisible.mail,
        ModalStore.isVisible.instruction,
    ])

    useEffect(() => {
        if (
            ModalStore.isVisible.instruction ||
            ModalStore.isVisible.mail ||
            ModalStore.isVisible.cookiesInfo
        ) {
            SoundStore.setIsPlayingSound(false)
        } else {
            SoundStore.setIsPlayingSound(true)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ModalStore.isVisible.instruction,
        ModalStore.isVisible.mail,
        ModalStore.isVisible.cookiesInfo,
    ])

    function removeActiveTitleSound() {
        if (isTitlePlaying) {
            titleSoundRef.current.pause()
            titleRef.current.classList.remove("active")
            setIsTitlePlaying(false)
        }
        if (isSupTitlePlaying) {
            supTitleSoundRef.current.pause()
            supTitleRef.current.classList.remove("active")
            setIsSupTitlePlaying(false)
        }

        if (isSupTitle2Playing) {
            supTitle2SoundRef.current.pause()
            setIsSupTitle2Playing(false)
        }
    }

    function activeTitleSound() {
        tmTitleIdRef.current = setTimeout(() => {
            titleSoundRef.current.play()
            setIsTitlePlaying(true)
            titleRef.current.classList.add("active")

            titleSoundRef.current.addEventListener("ended", () => {
                setIsTitlePlaying(false)
                titleRef.current.classList.remove("active")

                tmSupTitleIdRef.current = setTimeout(() => {
                    if (
                        !ModalStore.isVisible.mail &&
                        !ModalStore.isVisible.instruction
                    ) {
                        supTitleSoundRef.current.play()
                        setIsSupTitlePlaying(true)
                        supTitleRef.current.classList.add("active")

                        supTitleSoundRef.current.addEventListener(
                            "ended",
                            () => {
                                setIsSupTitlePlaying(false)
                                supTitleRef.current.classList.remove("active")

                                tmSupTitle2IdRef.current = setTimeout(() => {
                                    if (
                                        !ModalStore.isVisible.mail &&
                                        !ModalStore.isVisible.instruction
                                    ) {
                                        supTitle2SoundRef.current.play()
                                        setIsSupTitle2Playing(true)

                                        supTitle2SoundRef.current.addEventListener(
                                            "ended",
                                            () => {}
                                        )
                                    }
                                }, 500)
                            }
                        )
                    }
                }, 500)
            })
        }, 500)
    }

    useEffect(() => {
        function playTitle() {
            if (
                ModalStore.isVisible.cookie ||
                ModalStore.isVisible.welcomeBack ||
                ModalStore.isVisible.cookiesConfirm
            ) {
                return
            }
            if (playerRef.current) {
                playerRef.current.play()
            }
            // eslint-disable-next-line no-unused-expressions
            !SoundStore.getPlayedTitleSound(`title`) &&
                !ModalStore.isVisible.mail &&
                !ModalStore.isVisible.instruction &&
                activeTitleSound()
            SoundStore.setPlayedTitleSound("title", true)
            window.removeEventListener("click", playTitle)
        }
        window.addEventListener("click", playTitle, { ones: true })

        return () => {
            window.removeEventListener("click", playTitle)
            clearTimeout(tmTitleIdRef.current)
            clearTimeout(tmSupTitleIdRef.current)
            clearTimeout(tmSupTitle2IdRef.current)
        }
    }, [])

    return (
        <StyledLayout>
            <Helmet>
                <title data-rh="true">{metaData.title}</title>
                <meta name="description" content={metaData.description} />
            </Helmet>
            <Background>
                <Video
                    src={MainBG}
                    ref={playerRef}
                    loop
                    muted
                    autoPlay
                    playsInline
                />
            </Background>
            <Container ref={containerRef}>
                <ContentWrapper>
                    <Content>
                        <TextContainer>
                            <Title ref={titleRef}>
                                {ISENG
                                    ? "Sustainable Development course"
                                    : "Курс “Устойчивое развитие”"}
                            </Title>
                            <Suptitle ref={supTitleRef}>
                                {ISENG ? (
                                    <>
                                        <div>
                                            PhosAgro directly promotes 11 UN
                                            sustainable
                                        </div>
                                        <div>
                                            development goals
                                            <img src={OOH} alt="OOH" />
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            ФосАгро напрямую способствует
                                            достижению
                                        </div>
                                        <div>
                                            <span> 11 целей</span> устойчивого
                                            развития ООН
                                            <img src={OOH} alt="OOH" />
                                        </div>
                                    </>
                                )}
                            </Suptitle>
                        </TextContainer>
                        <MenuContainer>
                            {menuButtonData.map((item) => (
                                <Link
                                    to={`/course${item.id}`}
                                    key={item.index}
                                    onClick={() =>
                                        SoundStore.getIsPlaying() &&
                                        clickSound.play()
                                    }
                                >
                                    <MenuButton
                                        index={item.index}
                                        text={item.text}
                                        bgColor={item.bgColor}
                                        bgAnimateColor={item.bgAnimateColor}
                                        rotate={item.rotate}
                                        duration={item.duration}
                                    />
                                </Link>
                            ))}
                        </MenuContainer>
                    </Content>
                </ContentWrapper>
                <FooterHome />
                <AudioTitle src={MainTitle} ref={titleSoundRef} />
                <AudioTitle src={MainSupTitle} ref={supTitleSoundRef} />
                <AudioTitle src={MainSupTitle2} ref={supTitle2SoundRef} />
            </Container>
            <Outlet />
            <CookieModal />
            <CookiesInfoModal />
            <WelcomeBackModal />
        </StyledLayout>
    )
}

const StyledLayout = styled(Layout)`
    .content {
        padding-bottom: 10px;

        @media ${DEVICE.laptop} {
            padding-top: 25px;
        }
        @media ${DEVICE.mobile} {
            padding-bottom: 0;
        }
    }
`

const Container = styled.div`
    max-height: 100%;
    height: 100%;
    overflow: hidden;

    display: flex;
    flex-direction: column;

    &::-webkit-scrollbar {
        width: 0;
    }

    @media ${DEVICE.laptopS} {
        overflow: auto;
        padding-top: 0;
    }

    @media ${DEVICE.mobile} {
        align-items: flex-start;
    }
`

const ContentWrapper = styled.div`
    flex: 0 1 100%;

    display: flex;
    padding-top: 5vh;
    align-items: center;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }

    @media ${DEVICE.laptop} {
        padding-top: 0;
    }

    @media ${DEVICE.laptopS} {
        overflow: visible;
    }
`

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        display: block;
        width: 100%;
        height: 100%;
        background: linear-gradient(
                245.36deg,
                rgba(0, 0, 0, 0.18) 0.83%,
                rgba(0, 0, 0, 0.148574) 12.27%,
                rgba(0, 0, 0, 0) 22.59%
            ),
            linear-gradient(
                104.45deg,
                rgba(0, 0, 0, 0.25) -17.88%,
                rgba(0, 0, 0, 0.206353) 43.09%,
                rgba(0, 0, 0, 0) 98.09%
            ),
            linear-gradient(
                360deg,
                rgba(0, 0, 0, 0.3) 0%,
                rgba(0, 0, 0, 0.247623) 52.57%,
                rgba(0, 0, 0, 0) 100%
            );
    }
`

const Video = styled.video`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Content = styled.div`
    display: flex;
    align-items: center;
    overflow: hidden;
    padding: 3vh 0 4vh;

    @media ${DEVICE.laptopS} {
        padding: 0;
    }

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        justify-content: center;
    }

    @media ${DEVICE.mobile} {
        padding: 0;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

const TextContainer = styled.div`
    max-width: 50%;
    padding-left: 3vw;

    @media ${DEVICE.laptopS} {
        max-width: 100%;
        padding: 0;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding-left: 13px;

    @media ${DEVICE.laptopS} {
        padding: 6vw;
    }
    @media ${DEVICE.mobile} {
        padding: 6vw 0;
        flex: none;
    }

    a {
        margin: 0.5vw;
        @media ${DEVICE.laptopS} {
            margin: 2vw;
        }
    }
`

const Title = styled.div`
    font-family: "FocoBold";
    font-size: 2.9vw;
    line-height: 4.5vw;
    color: ${COLORS.white};
    transform-origin: 0 0;
    transition: all 0.3s;

    &.active {
        transform: scale(1.03);
    }

    @media ${DEVICE.laptopS} {
        font-size: 6.3vw;
        line-height: 8.5vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 6vw;
        line-height: 7.5vw;
    }
`

const Suptitle = styled.div`
    position: relative;
    font-family: "CalibriRegular";
    color: ${COLORS.white};

    margin-top: 73px;
    font-size: 1.5vw;
    transition: all 0.3s;
    transform-origin: 0 0;

    &.active {
        transform: scale(1.08);
    }

    &.second {
        max-width: 41vw;
        margin-top: 25px;
        line-height: 1.5;

        @media ${DEVICE.laptopS} {
            max-width: none;
        }

        @media ${DEVICE.mobile} {
            margin-top: 16px;
        }
    }

    @media ${DEVICE.laptopS} {
        margin-top: 30px;
        font-size: 3vw;
    }

    @media ${DEVICE.mobile} {
        margin-top: 16px;
        font-size: 4vw;
    }

    div:nth-child(1) {
        margin-bottom: 13px;
    }

    div:nth-child(2) {
        display: inline-block;
        line-height: 3.8vw;
        position: relative;
        @media ${DEVICE.laptopS} {
            line-height: 7vw;
        }
        img {
            position: absolute;
            height: 3.3vw;
            right: -5.5vw;
            @media ${DEVICE.laptopS} {
                height: 7vw;
                right: -10vw;
            }
        }
        span {
            font-family: "CalibriBold";
        }
    }
`

const AudioTitle = styled.audio``

export default observer(Home)
