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
import { COLORS, DEVICE } from "../../constants"
import { Layout, CookieModal, CookiesInfoModal } from "../atoms"
import { Click2, MainTitle, MainSupTitle } from "../../assets/audio"
import { SoundStore, ModalStore } from "../../store"

function Home() {
    const [isTitlePlaying, setIsTitlePlaying] = useState(false)
    const [isSupTitlePlaying, setIsSupTitlePlaying] = useState(false)

    const clickSound = new Audio(Click2)

    const titleSoundRef = useRef(null)
    const supTitleSoundRef = useRef(null)
    const titleRef = useRef(null)
    const supTitleRef = useRef(null)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname.includes("instruction")) {
            ModalStore.showModal("instruction")
        } else if (ModalStore.isVisible.instruction) {
            ModalStore.closeModal("instruction")
        }
    }, [location])

    useEffect(() => {
        // eslint-disable-next-line no-unused-expressions, no-use-before-define
        (!SoundStore.getIsPlaying() || ModalStore.isVisible.mail || ModalStore.isVisible.instruction) && removeActiveTitleSound()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [SoundStore.getIsPlaying(), ModalStore.isVisible.mail, ModalStore.isVisible.instruction])

    function removeActiveTitleSound() {
        if(isTitlePlaying) {
            titleSoundRef.current.pause()
            titleRef.current.classList.remove('active')
            setIsTitlePlaying(false)
        }
        if(isSupTitlePlaying) {
            supTitleSoundRef.current.pause()
            supTitleRef.current.classList.remove('active')
            setIsSupTitlePlaying(false)
        }
    }

    function activeTitleSound() {
        setTimeout(() => {

            titleSoundRef.current.play()
            setIsTitlePlaying(true)
            titleRef.current.classList.add('active')

            titleSoundRef.current.addEventListener('ended', () => {
                setIsTitlePlaying(false)
                titleRef.current.classList.remove('active')

                setTimeout(() => {

                    supTitleSoundRef.current.play()
                    setIsSupTitlePlaying(true)
                    supTitleRef.current.classList.add('active')

                    supTitleSoundRef.current.addEventListener('ended', () => {
                        setIsSupTitlePlaying(false)
                        supTitleRef.current.classList.remove('active')
                    })
                }, 500)
            })
        }, 500)
    }

    useEffect(() => {
        function playTitle() {
            // eslint-disable-next-line no-unused-expressions
            !SoundStore.getPlayedTitleSound(`title`) && activeTitleSound();
            SoundStore.setPlayedTitleSound('title', true)
            window.removeEventListener("click", playTitle)
        }
        window.addEventListener("click", playTitle, { ones: true})
    }, [])

    return (
        <Layout>
            <Helmet>
                <title data-rh="true">
                    Учебный курс &laquo;Устойчивое развитие&raquo; компании
                    ФосАгро
                </title>
                <meta
                    name="description"
                    content="Устойчивое развитие - термин популярный. Его обсуждают практически
                    на всех уровнях, во многих сферах. В этом курсе вы узнаете, что означает понятие устойчивого развития
                    для ФосАгро и какие мероприятия проводится компанией для обеспечения устойчивого развития."
                />
            </Helmet>
            <Background>
                <Video src={MainBG} loop muted autoPlay playsInline />
            </Background>
            <Container>
                <ContentWrapper>
                    <Content>
                        <TextContainer>
                            <Title ref={titleRef}>Курс “Устойчивое развитие”</Title>
                            <Suptitle ref={supTitleRef}>
                                <div>
                                    Компания ФосАгро напрямую способствует
                                </div>
                                <div>
                                    достижению <span> 11 целей</span>{" "}
                                    устойчивого развития ООН
                                    <img src={OOH} alt="OOH" />
                                </div>
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
                <FooterHome/>
                <AudioTitle src={ MainTitle } ref={titleSoundRef}/>
                <AudioTitle src={ MainSupTitle } ref={supTitleSoundRef}/>
            </Container>
            <Outlet />
            <CookieModal/>
            <CookiesInfoModal/>
        </Layout>
    )
}

const Container = styled.div`
    max-height: 100%;
    height: 100%;
    overflow: hidden;
    padding-bottom: 45px;
    padding-top: 4vh;

    display: flex;
    align-items: center;

    @media ${DEVICE.laptopS} {
        padding-top: 0;
    }

    @media ${DEVICE.mobile} {
        align-items: flex-start;
    }
`

const ContentWrapper = styled.div`
    max-height: 100%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
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
                rgba(0, 0, 0, 0.09) -17.88%,
                rgba(0, 0, 0, 0.074287) 43.09%,
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
    padding: 20px 0;

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
    font-size: 3vw;
    line-height: 4.5vw;
    color: ${COLORS.white};
    transform-origin: 0 0;
    transition: all 0.3s;

    &.active {
        transform: scale(1.05);
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
        transform: scale(1.1);
    }
    @media ${DEVICE.laptopS} {
        margin-top: 30px;
        font-size: 3vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 3.5vw;
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
            height: 3.8vw;
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
