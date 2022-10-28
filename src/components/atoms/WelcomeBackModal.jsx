/* eslint-disable react/jsx-no-bind */
import React from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import { Link } from "react-router-dom"

import Modal from "./Modal"
import { ModalStore, CourseProgressStore } from "../../store"
import { MenuButtons } from "../molecules"
import { COLORS, DEVICE, ISENG } from "../../constants"
import SendButton from "./SendButton"
import { menuButtonData } from "../../data"

const engText = {
    passedCourseTitle: "You have completed the Sustainable Development course",
    passedCourseText: "If you want to start the course from scratch, we recommend deleting cookies to have all your previous data cleared.",
    deleteCookiesBtn: "Delete cookies",
    learnBeforeTitle: "Welcome back!",
    learnBeforeText: "You were learning:",
    didntLearnTitle: "You have not started the course yet!",
    didntLearnText: "Start the course:",
    courseInstrBtn: "Course instructions"

}

const ruText = {
    passedCourseTitle: "Вы изучили курс «Устойчивое развитие»",
    passedCourseText: "Если вам необходимо пройти курс повторно, с самого начала и с полным прогрессом изучения, рекомендуем удалить файл «cookies», все данные удалятся.",
    deleteCookiesBtn: "Удалить cookies",
    learnBeforeTitle: "Вы вернулись!",
    learnBeforeText: "Ранее вы изучали:",
    didntLearnTitle: "Вы пока ничего не изучали!",
    didntLearnText: "Начать изучение курса:",
    courseInstrBtn: "Инструкция по работе с курсом",
}

const textData = ISENG ? engText : ruText

function WelcomeBackModal() {
    function handleMenuBtnClick() {
        ModalStore.closeModal("welcomeBack")
    }

    return (
        <StyledModal
            isOpen={ModalStore.isVisible.welcomeBack}
            onClose={() => ModalStore.closeModal("welcomeBack")}
        >
            <Container
                className={
                    CourseProgressStore.userStartedLearnAnyChapter
                        ? ""
                        : "no-progress"
                }
            >
                <Content>
                    {CourseProgressStore.userPassedFullCourse ? (
                        <>
                            <Title className="title-passed">
                                {textData.passedCourseTitle}
                            </Title>
                            <MenuButtonsContainer>
                                <MenuButtons
                                    data={CourseProgressStore.welcomeBtnsData}
                                    onMenuBtnClick={handleMenuBtnClick}
                                />
                            </MenuButtonsContainer>

                            <Text>
                                {textData.passedCourseText}
                            </Text>
                            <SendButton
                                text={textData.deleteCookiesBtn}
                                onClick={() =>
                                    ModalStore.showModal("cookiesConfirm")
                                }
                            />
                        </>
                    ) : (
                        // eslint-disable-next-line react/jsx-no-useless-fragment
                        <>
                            {CourseProgressStore.userStartedLearnAnyChapter ? (
                                <>
                                    <Title>{textData.learnBeforeTitle}</Title>
                                    <Text>{textData.learnBeforeText}</Text>
                                    <MenuButtonsContainer>
                                        <MenuButtons
                                            data={
                                                CourseProgressStore.welcomeBtnsData
                                            }
                                            onMenuBtnClick={handleMenuBtnClick}
                                        />
                                    </MenuButtonsContainer>
                                    <Link to="instruction">
                                        <SendButton text={textData.courseInstrBtn} />
                                    </Link>
                                </>
                            ) : (
                                <>
                                    <Title>{textData.didntLearnTitle}</Title>
                                    <Text>{textData.didntLearnText}</Text>
                                    <MenuButtonsContainer>
                                        <MenuButtons
                                            data={menuButtonData}
                                            onMenuBtnClick={handleMenuBtnClick}
                                        />
                                    </MenuButtonsContainer>
                                    <Link to="instruction">
                                        <SendButton text={textData.courseInstrBtn} />
                                    </Link>
                                </>
                            )}
                        </>
                    )}
                </Content>
            </Container>
        </StyledModal>
    )
}

export default observer(WelcomeBackModal)

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${DEVICE.laptop} {
        max-height: 100%;
        overflow: auto;

        &::-webkit-scrollbar {
            width: 0;
        }
    }
`

const Title = styled.div`
    font-family: FocoBold, sans-serif;
    font-size: 1.3vw;
    color: rgba(0, 82, 155, 0.84);
    margin-bottom: 2.5vh;

    &.title-passed {
        margin-bottom: 3.5vh;
    }

    @media ${DEVICE.laptop} {
        margin-bottom: 15px;
        font-size: 17px;
    }
`

const Text = styled.div`
    font-family: Calibri, sans-serif;
    font-size: 1.12vw;
    color: ${COLORS.black};
    margin-bottom: 4vh;
    text-align: center;

    @media ${DEVICE.laptop} {
        font-size: 15px;
    }
`

const StyledModal = styled(Modal)`
    .modal-window {
        width: 60vw;
        height: auto;

        background: rgba(255, 255, 255, 0.84);
        border-radius: 30px;

        @media ${DEVICE.laptop} {
            height: 54%;
            max-height: 600px;
        }

        @media ${DEVICE.laptopS} {
            width: 700px;
            max-width: 80%;
        }

        @media ${DEVICE.mobile} {
            width: 340px;
            max-width: 92%;
            height: 70%;
        }
    }
`

const MenuButtonsContainer = styled.div`
    margin-bottom: 5vh;

    @media ${DEVICE.laptop} {
        margin-bottom: 15px;
    }
`

const Container = styled.div`
    padding: 6vh 2vw;
    height: 100%;

    &.no-progress {
        .progress-bar-cont {
            display: none;
        }
    }

    @media ${DEVICE.laptop} {
        padding: 65px 25px 20px;
    }

    .menu-buttons {
        flex-wrap: nowrap;

        @media ${DEVICE.laptop} {
            flex-wrap: wrap;
            justify-content: flex-start;
        }

        @media ${DEVICE.mobile} {
            justify-content: space-around;
        }
    }

    .menu-button-wrapper {
        width: 7.5vw;

        @media ${DEVICE.laptop} {
            width: 96px;
        }

        .menu-btn-index {
            font-size: 1.3vw;

            @media ${DEVICE.laptop} {
                font-size: 12px;
            }
        }

        .menu-btn-duration {
            font-size: 0.8vw;

            @media ${DEVICE.laptop} {
                font-size: 12px;
            }
        }

        .menu-btn-text {
            font-size: 0.62vw;
            word-break: break-word;

            @media ${DEVICE.laptop} {
                font-size: 8.7px;
            }
        }

        .menu-btn-content {
            @media ${DEVICE.laptop} {
                margin-top: 18px;
            }
        }
    }

    .menu-button-cont {
        margin-left: 10px;
        margin-right: 10px;

        @media ${DEVICE.laptop} {
            margin-bottom: 20px;
        }
    }

    .progress-bar-cont {
        margin-top: 3vh;
    }

    .progress-number {
        font-size: 0.8vw;

        @media ${DEVICE.laptopS} {
            font-size: 12px;
        }
    }

    .progress {
        width: 100%;
    }
`
