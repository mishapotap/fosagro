/* eslint-disable no-unused-vars */
import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { observer } from "mobx-react-lite"
import * as routes from "../../constants/routes"
import { DEVICE, COLORS } from "../../constants"
import { Fosagro, FosagroColored, LinkArrow } from "../../assets/svg"
import { CourseMenuButton } from "../molecules"
import { ModalStore, CourseProgressStore, SoundStore } from "../../store"
import { Click2 } from "../../assets/audio"

// TODO сделать ссылки RU EN рабочими
// TODO сделать фиксированный хэдэр при скролле на моб?

function Header({
    // цветной ли (если нет, то все будет белое)
    colored = false,
    // ссылка Курс "Устойчивое развитие"
    course = false,
    // смена языка
    language = false,
    // заголовок части раздела, в которой мы находимся
    // (вот то что в больших кружках в разделе на timeline)
    sectTitle = false,
    // ссылка "вернуться на главную"
    goBackToMain = false,
}) {
    // сделать норм
    const rusSiteLink = "/"
    const engSiteLink = "/"
    const isRus = false

    const {activeSectColor, activeSectTitle} = CourseProgressStore

    const clickSound = new Audio(Click2)

    const closeMenuModal = () => {
        ModalStore.closeModal("menu")
        SoundStore.setIsPlayingSound(true)
    }

    const handleClickLogo = () => {
        SoundStore.setIsPlayingSound(true)
        clickSound.play()
    }

    return (
        <Container>
            <HeaderInner>
                <Logo>
                    <Link to={routes.HOME} onClick={() => handleClickLogo()}>
                        {colored ? <FosagroColored /> : <Fosagro />}
                    </Link>
                </Logo>
                {language && (
                    <LinksContainer>
                        <LinkToFosagro>
                            <a href="https://www.phosagro.ru/" 
                                target="_blank" 
                                rel="noopener noreferrer">
                               <LinkArrow className="linkArrow"/>
                                <span>Корпоративный сайт</span>
                            </a>
                        </LinkToFosagro>
                        <LanguageContainer>
                            <Language>
                                <Link
                                    to={rusSiteLink}
                                    className={isRus && "active"}
                                >
                                    RU
                                </Link>
                            </Language>
                            <Language>
                                <Link
                                    to={engSiteLink}
                                    className={!isRus && "active"}
                                >
                                    EN
                                </Link>
                            </Language>
                        </LanguageContainer>
                    </LinksContainer>
                )}
                {course && <CourseMenuButton colored={colored} />}
                {sectTitle && (
                    <HeaderSectTitle>
                        <SectTitle>
                            <SectTitleDecor />
                            <SectTitleText
                                color={activeSectColor}
                            >
                                {activeSectTitle}
                            </SectTitleText>
                        </SectTitle>
                    </HeaderSectTitle>
                )}
                {goBackToMain && (
                    <BackToMain>
                        <Link
                            to={routes.HOME}
                            onClick={() => closeMenuModal()}
                        >
                            Вернуться на главную
                        </Link>
                    </BackToMain>
                )}
            </HeaderInner>
        </Container>
    )
}

export default observer(Header)

const Logo = styled.div`
    svg {
        max-width: 100%;
    }

    flex-shrink: 0;
    width: 12.5vw;
    margin-right: 40px;

    @media ${DEVICE.laptopS} {
        width: 150px;
    }
    @media ${DEVICE.mobile} {
        margin-right: 10px;
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

const HeaderSectTitle = styled.div`
    flex: 0 1 100%;
`

const SectTitle = styled.div`
    display: flex;
    align-items: flex-end;
    margin-top: 10px;

    @media ${DEVICE.laptopS} {
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
    flex-wrap: wrap;
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;

    display: flex;
    align-items: center;

    padding: 0 2.3vw 0 4.3vw;
    height: 92px;
    z-index: 100;

    @media ${DEVICE.laptopM} {
        height: 80px;
        padding-left: 3vw;
    }

    @media ${DEVICE.laptopS} {
        padding: 0 23px;
    }
`

const LinksContainer = styled.div`
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
    align-items: flex-end;
    height: 100%;    
`

const LinkToFosagro = styled.div`
    a {
        display: flex;
        align-items: flex-end;
    }

    span {
        margin-left: 12px;

        font-family: 'CalibriBold';
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;

        color: ${COLORS.blue};
        transition: all 0.3s;
        @media ${DEVICE.mobile} {
            display: none;
        }
    }

    .linkArrow {
        @media ${DEVICE.mobile} {
            width: 25px;
            height: 25px;
        }
    }

    &:hover {
        span {
            color: ${COLORS.white};
        }
        .linkArrow {
            path {
                fill: ${COLORS.white};
            }
        }
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
                background: ${COLORS.white};

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
        color: ${COLORS.white};
    }

    a.active {
        color: ${COLORS.blue};
    }
`
