import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import * as routes from "../../constants/routes"
import { DEVICE, COLORS } from "../../constants"
import { Fosagro, FosagroColored, BurgerIcon } from "../../assets/svg"

// TODO сделать ссылки RU EN рабочими

export default function Header({
    // цветной ли (если нет, то все будет белое)
    colored = false,
    // кнопка Курс "Устойчивое развитие"
    course = false,
    // смена языка
    language = false,
    // заголовок части раздела, в которой мы находимся
    // (вот то что в больших кружках в разделе на timeline)
    sectTitle = false,
    // цвет заголовка части
    sectTitleColor = COLORS.blue,
}) {
    return (
        <Container>
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
            {course && (
                <CourseLink>
                    <Link to={routes.MENU}>
                        <CourseLinkText colored={colored}>
                            Курс “Устойчивое развитие”
                        </CourseLinkText>
                        <CourseLinkIcon>
                            <BurgerIcon colored={colored} />
                        </CourseLinkIcon>
                    </Link>
                </CourseLink>
            )}
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

const CourseLink = styled.div`
    flex-shrink: 0;

    a {
        display: flex;
        align-items: center;
    }
`

const CourseLinkText = styled.div`
    margin-right: 15px;

    font-family: "FocoBold", sans-serif;
    font-size: 18px;
    color: ${({ colored }) => (colored ? COLORS.blue : COLORS.white)};

    @media ${DEVICE.laptopM} {
        font-size: 16px;
    }

    @media ${DEVICE.laptopS} {
        display: none;
    }
`

const CourseLinkIcon = styled.div``

const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2.51vh 2.3vw 1.1vh 4.27vw;
    z-index: 100;

    @media ${DEVICE.laptopS} {
        flex-wrap: wrap;
        padding: 25px 25px 10px 20px;
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
