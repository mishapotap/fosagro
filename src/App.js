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
import { Header } from "./components/atoms"

function App() {
    return (
        <Layout>
            <Background>
                <Video src={MainBG} loop muted autoPlay playsInline />
            </Background>
            <Container>
                <Header />
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
    padding: 40px 49px 0 85px;

    @media ${DEVICE.laptopS} {
        padding: 32px 3vw 0 6vw;
    }

    @media ${DEVICE.mobile} {
        padding: 32px 3vw 0 25px;
    }
`

const Language = styled.div`
    font-weight: 700;
    font-size: 1.2vw;
    line-height: 1.51vw;

    @media ${DEVICE.laptopS} {
        font-size: 2vw;
        line-height: 2.7vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 4vw;
        line-height: 4.7vw;
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
                top: 0.6vw;
                left: calc(100% + 5px);
                display: block;
                width: 6px;
                height: 6px;
                border-radius: 50%;
                background: ${(props) => props.color};

                @media ${DEVICE.laptopS} {
                    top: 1vw;
                }

                @media ${DEVICE.mobile} {
                    top: 1.5vw;
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
    display: flex;
    align-items: center;
    min-height: calc(100vh - 81px);

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 5vw 0 0;
    }

    @media ${DEVICE.mobile} {
        justify-content: flex-start;
    }
`

const TextContainer = styled.div`
    max-width: 52%;
    padding: 0 0 0 60px;
    color: ${(props) => props.color};

    @media ${DEVICE.laptopS} {
        max-width: unset;
        padding: 0 6vw;
    }
`

const MenuContainer = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 0;
    padding: 2vw;
    overflow: hidden;

    a {
        margin: 0.5vw;
    }

    @media ${DEVICE.laptopS} {
        padding: 6vw;
        max-height: 65vw;
        a {
            margin: 2vw;
        }
    }

    @media ${DEVICE.mobile} {
        max-height: 125vw;
    }
`
const Title = styled.h1`
    display: block;
    font-weight: 700;
    font-size: 3.65vw;
    line-height: 4.6vw;

    @media ${DEVICE.laptopM} {
        font-size: 3.55vw;
    }

    @media ${DEVICE.laptopS} {
        font-size: 5vw;
        line-height: 6vw;
    }

    @media ${DEVICE.mobile} {
        font-size: 6.5vw;
        line-height: 7.5vw;
    }
`

const Description = styled.div`
    position: relative;
    display: block;

    h3 {
        max-width: 35vw;
        margin-top: 73px;
        font-family: "CalibriRegular";
        font-weight: 400;
        font-size: 1.56vw;
        line-height: 1.93vw;

        span {
            font-family: "CalibriBold";
        }

        @media ${DEVICE.laptopS} {
            max-width: 70vw;
            margin-top: 3vw;
            font-size: 3vw;
            line-height: 4vw;
        }

        @media ${DEVICE.mobile} {
            max-width: 85vw;
            margin-top: 3vw;
            font-size: 4vw;
            line-height: 5vw;
        }
    }
`

const OOHLogo = styled.img`
    position: absolute;
    top: 1vw;
    left: 73%;
    display: block;
    width: 3.85vw;
    height: 3.85vw;

    @media ${DEVICE.laptopS} {
        top: 3vw;
        left: 92%;
        width: 5.85vw;
        height: 5.85vw;
    }

    @media ${DEVICE.mobile} {
        display: none;
    }
`

export default App
