import React from "react"
import styled from "styled-components"
import { Link, Outlet } from "react-router-dom"
import { menuButtonData } from "./data"
import { MenuButton } from "./components/molecules"
import { OOH } from "./assets/svg/static"
import { MainBG } from "./assets/video"
import { COLORS, DEVICE } from "./constants"
import { Layout } from "./components/atoms"

function App() {
    return (
        <Layout>
            <Background>
                <Video src={MainBG} loop muted autoPlay playsInline />
            </Background>
            <Content>
                <TextContainer>
                    <Title>Курс «Устойчивое развитие»</Title>
                    <Suptitle>
                        <div>Компания ФосАгро напрямую способствует</div>
                        <div>
                            достижению <span> 11 целей</span> устойчивого
                            развития ООН
                            <img src={OOH} alt="OOH" />
                        </div>
                    </Suptitle>
                </TextContainer>
                <MenuContainer>
                    {menuButtonData.map((item) => (
                        <Link to={`/course${item.id}`} key={item.index}>
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
            <Outlet />
        </Layout>
    )
}

const Background = styled.div`
    position: absolute;
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
    min-height: 100%;

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        justify-content: center;
    }

    @media ${DEVICE.mobile} {
        justify-content: flex-start;
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

export default App
