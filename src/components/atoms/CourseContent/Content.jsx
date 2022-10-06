import { observer } from "mobx-react-lite"
import React, { useEffect, useState }  from "react"
import styled from "styled-components"
import { DEVICE } from "../../../constants"
import { CourseProgressStore } from "../../../store"
import { ContentBlock, Label, BubbleContainer } from "../Content"
import coursePageComponents from "../coursePageComponents"

function Content() {
    const pageData = CourseProgressStore.activePageData
    const { content } = pageData
    const labelComp = content.find((i) => i.component === "Label")
    const [makeBubbles, setMakeBubbles] = useState(false)

    useEffect(() => {
        if (pageData) {
            const bubbleComp = pageData.content.find(
                (i) => i.component === "Bubble"
            )
            if (bubbleComp) {
                // eslint-disable-next-line no-use-before-define
                setMakeBubbles(true)
            } else if (makeBubbles) {
                setMakeBubbles(false)
            }
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pageData])

    return (
        <StyledContent>
            <BubbleContainer makeBubbles={makeBubbles}>
                {labelComp && <Label data={labelComp.data} />}
                <ContentWrapper>
                    <StyledContentBlock
                        color={CourseProgressStore.activeSectColor}
                    >
                        {content.map(({ component: compName, data }, index) => {
                            const Component = coursePageComponents[compName]
                            if (Component && compName !== "Label") {
                                return (
                                    <Component
                                        data={data}
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={index}
                                    />
                                )
                            }
                            return null
                        })}
                    </StyledContentBlock>
                </ContentWrapper>
            </BubbleContainer>
        </StyledContent>
    )
}

export default observer(Content)

const ContentWrapper = styled.div`
    flex: 0 1 100%;
    overflow: hidden;
`

const StyledContent = styled.div`
    overflow: hidden;
    height: 100%;

    @media ${DEVICE.laptopS} {
        overflow: visible;
    }
`

const StyledContentBlock = styled(ContentBlock)`
    max-height: 100%;
    height: 100%;

    .block-content {
        overflow: auto;
        padding-right: 10px;

        & > * {
            margin-bottom: 13px;

            &:last-child {
                margin-bottom: 0;
            }

            @media ${DEVICE.laptopS} {
                margin-bottom: 7px;
            }

            @media ${DEVICE.laptopS} {
                margin-bottom: 23px;
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
