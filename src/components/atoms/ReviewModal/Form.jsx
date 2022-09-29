/* eslint-disable react/jsx-no-bind */
import React, { useRef } from "react"
import styled from "styled-components"
import { observer } from "mobx-react-lite"
import SendReviewBtn from "./SendReviewBtn"
import { ReviewModalStore } from "../../../store"
import { COLORS, DEVICE } from "../../../constants"

function Form() {
    const textareaRef = useRef(null)

    function handleTextareaChange({ target: { value } }) {
        const val = value.trim()

        if (val) {
            if (!ReviewModalStore.message) ReviewModalStore.setMessage(val)
        } else {
            ReviewModalStore.setMessage("")
        }
        
    }

    function handleSubmit(e) {
        e.preventDefault()
        const val = textareaRef.current.value.trim()

        if (val) {
            ReviewModalStore.setMessage(val)
        }

        ReviewModalStore.handleSend(e)
    }

    return (
        <FormWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <TextareaWrapper className="textarea-wrapper">
                    <Textarea
                        ref={textareaRef}
                        onChange={handleTextareaChange}
                        disabled={ReviewModalStore.isLoading}
                    />
                </TextareaWrapper>
                <SendReviewBtn />
            </StyledForm>
        </FormWrapper>
    )
}

const FormWrapper = styled.div`
    width: 100%;
`

// чтобы скрыть полосу скролла, которая выходит за пределы textarea
const TextareaWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 24.5vh;
    overflow: hidden;

    margin-bottom: 3.7vh;
    border: 1px solid ${COLORS.blue};
    border-radius: 30px;

    @media ${DEVICE.laptopM} {
        border-radius: 20px;
        font-size: 16px;
    }

    @media ${DEVICE.laptopS} {
        min-height: auto;
        max-width: 600px;
        height: 250px;
    }

    @media ${DEVICE.mobile} {
        border-radius: 10px;
        min-height: none;
        height: 170px;
        max-width: 500px;
    }
`

const Textarea = styled.textarea`
    width: 100%;
    position: absolute;
    height: 100%;
    padding: 15px;

    font-size: 20px;
    font-family: CalibriLight, sens-serif;

    border-radius: 30px;
    resize: none;

    &::-webkit-scrollbar {
        width: 3px;
        background-color: #cfd4da;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${COLORS.blue};
        border-radius: 2em;
    }

    @media ${DEVICE.laptopM} {
        border-radius: 20px;
        font-size: 16px;
    }

    @media ${DEVICE.mobile} {
        border-radius: 10px;
    }
`

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 89.6%;
    margin: 0 auto;

    @media ${DEVICE.mobile} {
        max-width: none;
    }
`

export default observer(Form)
