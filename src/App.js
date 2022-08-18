import React from "react"
import styled from "styled-components"
import { Link, Outlet } from "react-router-dom"
import * as routes from "./constants/routes"
import { menuButtonData } from "./data"
import { MenuButton } from "./components/molecules"
import { Fosagro } from "./assets/svg"
import { OOH } from "./assets/svg/static"
import { MainBG } from "./assets/video"
import { COLORS, DEVICE } from "./constants"

function App() {
    return (
        <Layout>
            <Background>
                <Video src={MainBG} loop muted autoPlay playsInline />
            </Background>
            <Container>
                <TopNavigate>
                    <Link to={routes.HOME}>
                        <Fosagro />
                    </Link>
                    <LanguageContainer
                        color={COLORS.white}
                        colorActive={COLORS.blue}
                    >
                        <Language>
                            <Link to="/" className="active">
                                RU
                            </Link>
                        </Language>
                        <Language>
                            <Link to="/">EN</Link>
                        </Language>
                    </LanguageContainer>
                </TopNavigate>
                <Content>
                    <TextContainer color={COLORS.white}>
                        <Title>Курс «Устойчивое развитие»</Title>
                        <Description>
                            <h3>
                                Компания ФосАгро напрямую способствует
                                достижению
                                <span> 11 целей</span> устойчивого развития ООН
                            </h3>
                            <OOHLogo src={OOH} alt="OOH" />
                        </Description>
                    </TextContainer>
                    <MenuContainer>
                        {menuButtonData.map((item) => (
                            <Link to={item.href} key={item.index}>
                                <MenuButton
                                    index={item.index}
                                    text={item.text}
                                    bgColor={item.bgColor}
                                    bgAnimateColor={item.bgAnimateColor}
                                    rotate={item.rotate}
                                    type="index"
                                />
                            </Link>
                        ))}
                    </MenuContainer>
                </Content>
            </Container>
            <Outlet />
        </Layout>
    )
}

const Layout = styled.div`
    position: relative;
    display: flex;
    flex: 1;
    flex-direction: column;
    width: 100%;
`

const Background = styled.div`
    position: absolute;
    z-index: 1;
    width: 100%;
    height: 100%;
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

const Container = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    min-height: 100vh;
`
const TopNavigate = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 32px 25px 0;
`

const Language = styled.div`
    font-family: "FocoBold";
    font-weight: 700;
    font-size: 5vw;
    line-height: 5.7vw;
    @media ${DEVICE.tablet} {
        font-size: 3vw;
        line-height: 3.7vw;
    }
    @media ${DEVICE.laptopM} {
        font-size: 1.2vw;
        line-height: 1.51vw;
    }
`

const LanguageContainer = styled.div`
    display: flex;
    ${Language} {
        margin-left: 16px;
        &:first-child {
            position: relative;

            &:after {
                content: "";
                position: absolute;
                top: 1.7vw;
                left: calc(100% + 5px);
                display: block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: ${(props) => props.color};
                @media ${DEVICE.tablet} {
                    top: 1.5vw;
                }
                @media ${DEVICE.laptopM} {
                    top: 0.5vw;
                }
            }
        }
    }
    a {
        color: ${(props) => props.color};
    }

    a.active {
        color: ${(props) => props.colorActive};
    }
`

const Content = styled.div`
    padding: 5vw 0;
    @media ${DEVICE.laptopM} {
        display: flex;
        align-items: center;
        min-height: calc(100vh - 75px);
    }
`

const TextContainer = styled.div`
    padding: 0 5vw;
    color: ${(props) => props.color};
    @media ${DEVICE.laptopM} {
        max-width: 52%;
        padding: 0 0 0 60px;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding: 0 5vw;
    overflow: hidden;
    a {
        margin: 3vw;
    }
    @media ${DEVICE.tablet} {
        padding: 0 8vw;
    }
    @media ${DEVICE.laptopM} {
        margin-top: 0;
        padding: 2vw;
        a {
            margin: 0.5vw;
        }
    }
`
const Title = styled.h1`
    display: block;
    font-family: "FocoBold";
    font-weight: 700;
    font-size: 7vw;
    line-height: 8vw;
    @media ${DEVICE.tablet} {
        font-size: 6vw;
        line-height: 7vw;
    }
    @media ${DEVICE.laptopS} {
        font-size: 5vw;
        line-height: 6vw;
    }
    @media ${DEVICE.laptopM} {
        font-size: 3.65vw;
        line-height: 4.6vw;
    }
`

const Description = styled.div`
    position: relative;
    display: block;
    h3 {
        margin-top: 5vw;
        font-family: "CalibriRegular";
        font-weight: 400;
        font-size: 5vw;
        line-height: 6vw;
        span {
            font-family: "CalibriBold";
        }
        @media ${DEVICE.tablet} {
            margin-top: 3vw;
            font-size: 4vw;
            line-height: 5vw;
        }
        @media ${DEVICE.laptopS} {
            max-width: 70vw;
            font-size: 3vw;
            line-height: 4vw;
        }
        @media ${DEVICE.laptopM} {
            max-width: 35vw;
            margin-top: 73px;
            font-size: 1.56vw;
            line-height: 1.93vw;
        }
    }
`

const OOHLogo = styled.img`
    position: absolute;
    top: 3.5vw;
    right: 19vw;
    display: none;
    width: 4.85vw;
    height: 4.85vw;
    @media ${DEVICE.laptopS} {
        display: inline-block;
    }
    @media ${DEVICE.laptopM} {
        top: 1vw;
        right: 10vw;
        width: 3.85vw;
        height: 3.85vw;
    }
`

export default App
