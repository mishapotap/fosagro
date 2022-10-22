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
    fosagroSite = false,
    makeMobShadow = false,
    chapterTitle = false,
}) {
    const rusSiteLink = "https://esg-course.phosagro.ru"
    const engSiteLink = "https://esg-course.phosagro.com"
    const isRus = false

    const {
        activeSectColor,
        activeSectTitle,
        activeChapterTitle,
        activeChapterIndex,
    } = CourseProgressStore

    const clickSound = new Audio(Click2)

    const closeMenuModal = () => {
        ModalStore.closeModal("welcomeBack")
        ModalStore.closeModal("menu")
        SoundStore.setIsPlayingSound(true)
    }

    const handleClickLogo = () => {
        ModalStore.closeModals()
        SoundStore.setIsPlayingSound(true)
        // eslint-disable-next-line no-unused-expressions
        SoundStore.getIsPlaying() && clickSound.play()
    }

    return (
        <Container makeMobShadow={makeMobShadow}>
            <HeaderInner language={language}>
                <Logo>
                    <Link to={routes.HOME} onClick={() => handleClickLogo()}>
                        {colored ? <FosagroColored /> : <Fosagro />}
                    </Link>
                </Logo>
                {fosagroSite && (
                    <LinkToFosagro>
                        <a
                            href="https://www.phosagro.ru/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <LinkArrow className="linkArrow" />
                            <span>Корпоративный сайт</span>
                        </a>
                    </LinkToFosagro>
                )}
                {language && (
                    <LanguageContainer>
                        <Language>
                            <a
                                href={rusSiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={isRus && "active"}
                            >
                                RU
                            </a>
                        </Language>
                        <Language>
                            <a
                                href={engSiteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={!isRus && "active"}
                            >
                                EN
                            </a>
                        </Language>
                    </LanguageContainer>
                )}
                {course && <CourseMenuButton colored={colored} />}
                {sectTitle && (
                    <HeaderSectTitle>
                        <SectTitle>
                            <ChapterIndex>{activeChapterIndex}</ChapterIndex>
                            <SectTitleDecor />
                            <SectTitleText color={activeSectColor}>
                                {activeSectTitle}
                            </SectTitleText>
                        </SectTitle>
                    </HeaderSectTitle>
                )}
                {chapterTitle && (
                    <HeaderSectTitle>
                        <SectTitle>
                            <SectTitleText color={COLORS.blue}>
                                {activeChapterTitle}
                            </SectTitleText>
                        </SectTitle>
                    </HeaderSectTitle>
                )}
                {goBackToMain && (
                    <BackToMain colored={colored}>
                        <Link to={routes.HOME} onClick={() => closeMenuModal()}>
                            Вернуться на главную
                        </Link>
                    </BackToMain>
                )}
            </HeaderInner>
        </Container>
    )
}

export default observer(Header)

const ChapterIndex = styled.div`
    display: inline-block;
    margin-right: 7px;
    margin-left: 3px;

    font-family: FocoBold, sans-serif;
    font-size: 1vw;
    color: ${COLORS.blue};
    text-transform: uppercase;

    @media ${DEVICE.laptop} {
        font-size: 13px;
    }

    @media ${DEVICE.laptopS} {
        margin-right: 10px;
    }
`

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
    flex-shrink: 0;
    margin-right: 100px;
    margin-top: 20px;

    @media ${DEVICE.laptopM} {
        margin-right: 80px;
    }

    a {
        font-family: "FocoBold";
        color: ${({ colored }) => (colored ? COLORS.blue : COLORS.white)};
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
        position: absolute;
        bottom: 0;
        left: 0;
        margin: 0;
        transform: translateY(calc(100% + 14px));
    }
`

const HeaderSectTitle = styled.div`
    position: absolute;
    bottom: 0;
    transform: translateY(calc(100% + 3vh));

    @media ${DEVICE.laptopM} {
        transform: translateY(calc(100% + 2.3vh));
    }

    @media ${DEVICE.laptopS} {
        transform: translateY(calc(100% + 8px));
    }
`

const SectTitle = styled.div`
    display: flex;
    align-items: center;
`

const SectTitleDecor = styled.div`
    width: 3.2vw;
    height: 2px;
    margin-right: 10px;
    margin-bottom: 4px;
    align-self: flex-end;

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
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;

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

    padding: 3vh 2.3vw 0 4.3vw;
    height: 92px;
    z-index: 100;

    @media ${DEVICE.laptopM} {
        height: 80px;
        padding-left: 3vw;
    }

    @media ${DEVICE.laptopS} {
        padding: 13px 23px 3px;
        height: 90px;

        box-shadow: ${({ makeMobShadow }) =>
            makeMobShadow ? "0px 4px 11px 0px rgba(34, 60, 80, 0.2)" : "none"};
    }
`

const LinkToFosagro = styled.div`
    flex: 0 1 100%;

    @media ${DEVICE.laptopS} {
        position: absolute;
        bottom: 0;
        transform: translateY(calc(100% + 11px));
    }

    a {
        display: inline-flex;
        align-items: flex-end;

        &:hover {
            span {
                color: ${COLORS.blue};
            }
            .linkArrow {
                path {
                    fill: ${COLORS.blue};
                }
            }
        }
    }

    span {
        margin-left: 12px;

        font-family: "CalibriBold";
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;

        color: ${COLORS.white};
        transition: all 0.3s;
    }

    .linkArrow {
        path {
            fill: ${COLORS.white};
        }

        @media ${DEVICE.mobile} {
            width: 14px;
            height: 14px;
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
