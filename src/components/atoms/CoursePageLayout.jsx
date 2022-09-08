/* eslint-disable no-unused-vars */
import React from "react"
import styled, { css } from "styled-components"
import { Link } from "react-router-dom"
import BackToChapterButton from "./BackToChapterButton"
import NextQuestionButton from "./NextQuestionButton"
import CourseSlideLayout from "./CourseSlideLayout"
import { StepProgressBar } from "../molecules"
import { List, Title, ContentBlock, Text, Note, Label } from "./Content"
import { testData } from "../../data"
import DocsLink from "./DocsLink"
import { DEVICE, COLORS } from "../../constants"
import AudioPlayer from "./AudioPlayer"
import { SpeakerAudio } from "../../assets/audio"
import { TepkVideo } from "../../assets/video"
import VideoPlayer from "./VideoPlayer"
import Slider from "./Slider"
import ObjectSlider from "./ObjectSlider"
import {
    AnimateEarth,
    Ecology,
    AnimateChart,
    AnimateGlobalContract,
    AnimateMap,
    AnimateScience,
} from "../../assets/svg"

// TODO на мобилках сделать чтобы анимация начинала проигрываться только тогда,
// когда попадет в область видимости

// TODO может стоит как-то поправить анимации некоторые на моб, или убрать их?
// (текст в AnmateGlobal и AnimateChart например получается очень маленький)

// TODO переделать ссылки по-новому если заказчик одобрит

// TODO сделать чтобы label был между контентом и заголовком

// TODO изменить расположение аудиоплеера? (также в IntroModal)

export default function CoursePage() {
    // временно, получаем снаружи
    const nextPageLink = "/"
    const prevPageLink = "/"
    const courseProgressType = "grass"
    const sectSlidesCount = 5
    const color = COLORS.green_circle

    const audioSrc = SpeakerAudio
    const videoSrc = TepkVideo

    // const links = []
    const links = [
        {
            id: 1,
            text: "Годовой отчет ФосАгро 2021 года",
            url: "#",
        },
        {
            id: 2,
            text: "Повестка дня в области устойчивого развития на период до 2030 года",
            url: "#",
        },
    ]

    // временно для проверки
    const video = false
    const circleSlider = false
    const objectSlider = true

    const contentText = true
    const list = false
    const note = false
    const label = true

    const animEarth = false
    const animEco = false
    const animChart = false
    const animGlob = false
    const animSci = false
    const animMap = false
    const animation =
        animEarth || animChart || animEco || animGlob || animSci || animMap

    return (
        <StyledLayout sectColor={color}>
            <Columns>
                <AudioColumn>
                    {audioSrc && <StyledAudioPlayer src={audioSrc} />}
                </AudioColumn>
                <TitleColumn>
                    <Title>
                        Как компания двигается к достижению этих целей?
                    </Title>
                </TitleColumn>
                <ContentColumn>
                    <Content>
                        <StyledContentBlock>
                            {/* для проверки */}
                            {label && <Label/>}
                            {contentText && (
                                <Text>
                                    В декабре 2021 года рабочая группа
                                    Международной ассоциации производителей
                                    удобрений (IFA) признала в качестве лучшей
                                    практики опыт Группы «ФосАгро» в
                                    производстве и применении в сельском
                                    хозяйстве улучшенного фосфогипса. Фосфогипс
                                    — это ценный побочный продукт, получаемый в
                                    процессе производства минеральных удобрений.
                                    В его состав входят такие полезные для почв
                                    элементы, как кальций, сера, фосфор, цинк,
                                    кремний, магний, медь и др.
                                </Text>
                            )}
                            {list && <List data={testData.listData[1]} />}
                            {note && (
                                <Note>
                                    Ключевой аспект деятельности ФосАгро -
                                    повышенная социальная и экологическая
                                    ответственность. Это не дань моде. Это
                                    необходимость.
                                </Note>
                            )}
                        </StyledContentBlock>
                    </Content>
                </ContentColumn>
                <NavColumn>
                    <Nav>
                        <Link to={prevPageLink} className="prev-btn">
                            <BackToChapterButton text="Назад" />
                        </Link>
                        <StepProgressBar
                            type={courseProgressType}
                            slidesAmount={sectSlidesCount}
                        />
                        <Link to={nextPageLink} className="next-btn">
                            <NextQuestionButton text="Вперед" />
                        </Link>
                    </Nav>
                </NavColumn>
                <MediaColumn
                    video={video}
                    circleSlider={circleSlider}
                    animation={animation}
                    objectSlider={objectSlider}
                >
                    <MediaColInner>
                        <Media>
                            {/* для проверки */}
                            {video && <VideoPlayer src={videoSrc} />}
                            {circleSlider && (
                                <Slider
                                    data={testData.circleSlider[0]}
                                    sliderColor={color}
                                    size="m"
                                />
                            )}
                            {objectSlider && (
                                <ObjectSlider
                                    type="fosagro"
                                />
                            )}
                            {animEarth && <AnimateEarth />}
                            {animEco && <Ecology />}
                            {animChart && <AnimateChart />}
                            {animGlob && <AnimateGlobalContract />}
                            {animMap && <AnimateMap />}
                            {animSci && <AnimateScience />}
                        </Media>
                        {links && links.length > 0 && (
                            <Links>
                                {links.map(({ text, url, id }) => (
                                    <DocsLink text={text} url={url} key={id} />
                                ))}
                            </Links>
                        )}
                    </MediaColInner>
                </MediaColumn>
            </Columns>
        </StyledLayout>
    )
}

const StyledContentBlock = styled(ContentBlock)`
    max-height: 100%;

    .block-content {
        overflow: auto;
        padding-right: 10px;

        & > * {
            margin-bottom: 30px;

            &:last-child {
                margin-bottom: 0;
            }
        }

        &::-webkit-scrollbar {
            width: 3px;
            background-color: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: rgba(0, 82, 155, 0.6);
            border-radius: 2em;
        }
    }
`

const StyledLayout = styled(CourseSlideLayout)`
    .slide-content {
        @media ${DEVICE.laptopS} {
            overflow: auto;
            padding: 0 15px;
        }
    }

    .content {
        @media ${DEVICE.laptopS} {
            padding: 0;
        }
    }
`

const StyledAudioPlayer = styled(AudioPlayer)`
    padding-left: 2.2vw;
    margin-top: -1.2vh;

    .player {
        position: absolute;
        left: 0;
    }

    @media ${DEVICE.laptopS} {
        margin-top: -300px;
        margin-bottom: 300px;
    }
`

const Nav = styled.div`
    display: flex;
    align-items: center;

    /* временно (убрала кнопку увеличить) */
    button {
        display: none;
    }

    .step-progress-bar {
        width: 33vw;

        @media ${DEVICE.laptopS} {
            width: 100%;
            max-width: 600px;
            margin: 0 auto;
        }
    }

    .prev-btn {
        margin-right: 25px;
        z-index: 50;

        @media ${DEVICE.laptopS} {
            order: 2;
            margin: 200px 90px 15px 0;
        }
    }

    .next-btn {
        margin-left: 25px;
        z-index: 50;

        @media ${DEVICE.laptopS} {
            order: 3;
        }
    }

    @media ${DEVICE.laptopS} {
        flex-direction: column;
        align-items: flex-end;
    }
`

const MediaColInner = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;

    overflow: auto;
`

const Media = styled.div`
    display: flex;
    max-height: 100%;
    max-width: 100%;

    .video-player {
        width: 94% !important;
        margin-left: auto;

        @media ${DEVICE.laptopS} {
            margin-left: 0;
        }
    }
`

const Links = styled.div`
    position: absolute;
    width: 100%;
    bottom: 0;
    right: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    overflow: hidden;
    padding-right: 7.2vw;
    z-index: 20;

    @media ${DEVICE.laptopS} {
        position: relative;
        padding-right: 0;
        margin-top: 50px;
    }

    & > * {
        margin-bottom: 7px;
        width: 100%;
        flex-shrink: 0;
    }
`

const Content = styled.div`
    overflow: hidden;

    @media ${DEVICE.laptopS} {
        overflow: visible;
    }
`

const ContentColumn = styled.div`
    display: flex;
    flex-direction: column;
    grid-area: 2 / 2 / 3 / 3;

    max-height: 100%;
    padding-right: 5px;
    overflow: hidden;
    margin-bottom: 35px;

    @media ${DEVICE.laptopS} {
        grid-area: 2 / 1 / 3 / 2;
        overflow: visible;
        padding-right: 0;
        margin-bottom: 45px;
    }
`

const NavColumn = styled.div`
    grid-area: 3 / 1 / 4 / 3;
    padding-left: 2vw;

    @media ${DEVICE.laptopS} {
        grid-area: 4 / 1 / 5 / 2;
        padding-left: 0;
    }
`

const MediaColumn = styled.div`
    grid-area: 1 / 3 / 4 / 4;
    overflow: hidden;
    padding-top: 20px;

    ${({ video }) =>
        video &&
        css`
            padding-right: 4.8vw;
            padding-top: 13vh;

            @media ${DEVICE.laptopM} {
                padding-top: 8vh;
            }

            @media ${DEVICE.laptopS} {
                padding-right: 0;
                padding-top: 0;
            }

            ${MediaColInner} {
                @media ${DEVICE.laptopS} {
                    max-width: 820px;
                    margin: 0 auto;
                }
            }

            ${Media} {
                align-items: flex-start;
            }
        `}

    ${({ circleSlider }) =>
        circleSlider &&
        css`
            padding-top: 10px;

            ${MediaColInner} {
                justify-content: center;
            }

            ${Media} {
                justify-content: flex-end;
            }
        `}

    ${({ animation, objectSlider }) =>
        (animation || objectSlider) &&
        css`
            ${MediaColInner} {
                justify-content: center;
                align-items: flex-end;
            }
        `}


    ${({ objectSlider }) =>
        objectSlider &&
        css`
            ${Media} {
                margin-right: 1vw;
                margin-bottom: 14vh;
                justify-content: flex-end;

                @media ${DEVICE.laptopS} {
                    margin-right: 0;
                    margin-bottom: 0;
                }

                & > * {
                    max-width: 80%;
                    margin: 15px;
                    max-height: none;

                    @media ${DEVICE.laptopS} {
                        margin: 0;
                        max-width: 90%;
                    }

                    @media ${DEVICE.mobile} {
                        max-width: 100%;
                    }
                }
            }
        `}

    ${({ animation }) =>
        animation &&
        css`
            ${Media} {
                padding-bottom: 30px;
                padding-right: 10px;
                width: 100%;
                justify-content: flex-end !important;

                @media ${DEVICE.laptopS} {
                    width: 90%;
                    margin: 0 auto;
                    padding-right: 0;
                }

                @media ${DEVICE.mobile} {
                    width: 100%;
                }

                & > *,
                .anim-earth {
                    max-width: 100%;
                    height: auto;
                    max-height: 100%;

                    @media ${DEVICE.laptopS} {
                        width: 100%;
                    }
                }

                .anim-chart {
                    max-height: 95%;
                }

                .anim-earth-wrapper {
                    margin-right: 3vw;

                    @media ${DEVICE.laptopS} {
                        margin-right: 0;
                    }
                }

                .anim-sci {
                    margin-right: 6vw;

                    @media ${DEVICE.laptopS} {
                        margin-right: 0;
                    }
                }

                .anim-eco {
                    width: 80%;
                    margin-bottom: 10vh;

                    @media ${DEVICE.laptopS} {
                        width: 100%;
                        margin-bottom: 0;
                    }
                }
            }
        `}


    ${Media} {
        @media ${DEVICE.laptopS} {
            justify-content: center;
        }
    }

    @media ${DEVICE.laptopS} {
        grid-area: 3 / 1 / 4 / 2;
        overflow: visible;
        margin-bottom: 35px;
    }

    .video-player {
        width: 100%;
    }

    .circle-slider {
        width: 82%;

        @media ${DEVICE.laptopM} {
            width: 80%;
        }

        @media ${DEVICE.laptopS} {
            max-width: 660px;
            width: 90%;
        }

        @media ${DEVICE.mobile} {
            max-width: 660px;
            width: 100%;
        }

        & > * {
            overflow: auto;

            &::-webkit-scrollbar {
                width: 0;
            }
        }
    }
`

const AudioColumn = styled.div`
    grid-area: 2 / 1 / 3 / 2;

    @media ${DEVICE.laptopS} {
        grid-area: 5 / 1 / 6 / 2;
        margin-left: -15px;
        margin-bottom: 300px;
    }
`

const TitleColumn = styled.div`
    grid-area: 1 / 2 / 2 / 3;
    padding-top: 9vh;

    @media ${DEVICE.laptopS} {
        grid-area: 1 / 1 / 2 / 2;
        margin-bottom: 30px;
        padding-top: 0;
    }
`

const Columns = styled.div`
    display: grid;
    grid-template: 28vh auto 105px / 7% 40% 53%;
    height: 100%;

    @media ${DEVICE.laptopM} {
        grid-template: 26vh auto 105px / 7% 40% 53%;
    }

    @media ${DEVICE.laptopS} {
        grid-template: repeat(5, auto) / 100%;
    }

    .title {
        max-width: 35vw;
        height: 14vh;

        @media ${DEVICE.laptopM} {
            max-width: 30vw;
        }

        @media ${DEVICE.laptop} {
            max-width: 370px;
        }

        @media ${DEVICE.laptopS} {
            max-width: none;
            height: auto;
        }
    }
`
