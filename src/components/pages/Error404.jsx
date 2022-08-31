import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { COLORS, DEVICE } from "../../constants"
import { Layout, SendButton } from "../atoms"
import * as routes from "../../constants/routes"
import { InteractiveCircle } from "../../assets/svg"
import { Waves } from "../../assets/svg/static"

// TODO вставить анимацию волн вместо картинки (когда будет готова)

export default function Error404() {
    return (
        <StyledLayout page="error">
            <Container>
                <Inner>
                    <InterCircleWrapper>
                        <StyledInterCircle color={COLORS.blue} />
                    </InterCircleWrapper>
                    <Content>
                        <Number>404</Number>
                        <Title>Ой!</Title>
                        <TextRegular>
                            Мы не можем найти эту страницу
                        </TextRegular>
                        <TextLight>
                            Похоже, запрашиваемая Вами страница не существует
                        </TextLight>
                        <Link to={routes.HOME}>
                            <SendButton text="Вернуться на главную" />
                        </Link>
                    </Content>
                </Inner>
                <WavesBlock>
                    <img src={Waves} alt="волны" />
                </WavesBlock>
            </Container>
        </StyledLayout>
    )
}

const WavesBlock = styled.div`
    position: absolute;
    left: 0;
    bottom: 10%;

    z-index: -1;
    width: 100%;
    min-height: 80px;
    overflow: hidden;

    img {
        height: 100%;
        max-width: none;
    }

    @media ${DEVICE.laptopS} {
        bottom: 2%;
    }
`

const StyledLayout = styled(Layout)`
    .content {
        padding: 0;
    }
`

const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;

    text-align: center;

    @media ${DEVICE.laptopS} {
        padding: 0 20px;
    }
`

const Inner = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    max-height: 96%;
    max-width: 96%;
    overflow: auto;

    &::-webkit-scrollbar {
        width: 0;
    }
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-height: 100%;
`

const InterCircleWrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100%;

    @media ${DEVICE.mobile} {
        display: none;
    }
`

const StyledInterCircle = styled(InteractiveCircle)`
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;
    min-height: 540px;
`

const Text = styled.p`
    font-size: 1.3vw;
    color: ${COLORS.black};
    line-height: 1.2;

    max-width: 23vw;

    @media ${DEVICE.laptop} {
        font-size: 18px;
        max-width: 320px;
    }
`

const TextRegular = styled(Text)`
    font-family: "CalibriRegular", sans-serif;
    margin-bottom: 20px;
`

const TextLight = styled(Text)`
    font-family: "CalibriLight", sans-serif;
    margin-bottom: 4vh;

    @media ${DEVICE.laptop} {
        margin-bottom: 30px;
    }
`

const Title = styled.div`
    font-family: "FocoBold", sans-serif;
    font-size: 2.3vw;
    color: ${COLORS.blue};

    margin-bottom: 20px;

    @media ${DEVICE.laptopM} {
        font-size: 2vw;
    }

    @media ${DEVICE.laptop} {
        font-size: 22px;
    }
`

const Number = styled.div`
    font-family: "FocoBold";
    font-size: 9.5vw;
    color: ${COLORS.blue};
    line-height: 1;

    margin-bottom: 4.6vh;

    @media ${DEVICE.laptopM} {
        font-size: 7vw;
    }

    @media ${DEVICE.laptop} {
        margin-bottom: 40px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 60px;
    }
`
