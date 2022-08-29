import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import * as routes from "../../constants/routes"
import { DEVICE, COLORS } from "../../constants"
import { Fosagro, FosagroColored } from "../../assets/svg"
import { CourseMenuButton } from "../molecules"

// TODO сделать ссылки RU EN рабочими
// TODO сделать фиксированный хэдэр при скролле на моб?

export default function Header({
    // цветной ли (если нет, то все будет белое)
    colored = false,
    // ссылка Курс "Устойчивое развитие"
    course = false,
    // смена языка
    language = false,
    // заголовок части раздела, в которой мы находимся
    // (вот то что в больших кружках в разделе на timeline)
    sectTitle = false,
    // цвет заголовка части
    sectTitleColor = COLORS.blue,
    // ссылка "вернуться на главную"
    goBackToMain = false,
}) {
    return (
        <Container>
            <HeaderInner>
                <Logo>
                    <Link to={routes.HOME}>
                        {colored ? <FosagroColored /> : <Fosagro />}
                    </Link>
                </Logo>
                {sectTitle && (
                    <HeaderCenter>
                        <SectTitle>
                            <SectTitleDecor />
                            <SectTitleText color={sectTitleColor}>
                                {sectTitle}
                            </SectTitleText>
                        </SectTitle>
                    </HeaderCenter>
                )}
                {language && (
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
                )}
                {course && <CourseMenuButton colored={colored}/>}
                {goBackToMain && (
                    <BackToMain>
                        <Link to={routes.HOME}>Вернуться на главную</Link>
                    </BackToMain>
                )}
            </HeaderInner>
        </Container>
    )
}

const Logo = styled.div`
    svg {
        max-width: 100%;
    }

    flex-shrink: 0;
    width: 12.5vw;
    margin-right: 10px;

    @media ${DEVICE.laptopS} {
        width: 150px;
    }
`

const BackToMain = styled.div`
    margin-right: 100px;
    margin-top: 20px;

    @media ${DEVICE.laptopM} {
        margin-right: 80px;
    }

    a {
        font-family: "FocoBold";
        color: ${COLORS.white};
        font-size: 18px;

        &:hover,
        &:focus {
            text-decoration: underline;
        }

        @media ${DEVICE.laptopM} {
            font-size: 16px;
        }
    }

    @media ${DEVICE.laptopS} {
        display: none;
    }
`

const HeaderCenter = styled.div`
    flex: 0 1 100%;
    align-self: flex-end;

    @media ${DEVICE.laptopS} {
        order: 3;
    }
`

const SectTitle = styled.div`
    display: flex;
    align-items: flex-end;

    @media ${DEVICE.laptopM} {
        margin-bottom: 5px;
    }

    @media ${DEVICE.laptopS} {
        margin-bottom: 0;
        margin-top: 8px;
    }
`

const SectTitleDecor = styled.div`
    width: 3.9vw;
    height: 2px;
    margin-right: 10px;
    margin-bottom: 4px;

    background-color: ${COLORS.blue};

    @media ${DEVICE.laptopS} {
        display: none;
    }
`

const SectTitleText = styled.div`
    font-family: "FocoBold", sans-serif;
    font-size: 18px;
    color: ${({ color }) => color};

    @media ${DEVICE.laptopM} {
        font-size: 15px;
    }

    @media ${DEVICE.laptopS} {
        font-size: 12px;
    }
`

const HeaderInner = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    margin-top: 1.3vh;

    @media ${DEVICE.laptopS} {
        margin-top: 0;
        flex-wrap: wrap;
    }
`

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    align-items: center;

    padding: 0 2.3vw 0 4.3vw;
    height: 92px;
    z-index: 100;

    @media ${DEVICE.laptopM} {
        height: 70px;
        padding-left: 3vw;
    }

    @media ${DEVICE.laptopS} {
        padding: 0 23px;
        height: 95px;
    }
`

const Language = styled.div`
    font-weight: 700;
    font-size: 1.2vw;
    line-height: 1.51vw;

    a {
        &:hover,
        &:focus {
            text-decoration: underline;
        }
    }

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
