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

    function handleEmailInpChange({ target: { value } }) {
        ReviewModalStore.setEmailVal(value.trim())
    }

    return (
        <FormWrapper>
            <StyledForm onSubmit={handleSubmit}>
                <MailInputWrapper>
                    <MailInput
                        type="text"
                        placeholder="Введите ваш Email"
                        onChange={handleEmailInpChange}
                    />
                </MailInputWrapper>
                <TextareaWrapper className="textarea-wrapper">
                    <Textarea
                        ref={textareaRef}
                        onChange={handleTextareaChange}
                        disabled={ReviewModalStore.isLoading}
                        placeholder="Введите ваше сообщение"
                    />
                </TextareaWrapper>
                <SendReviewBtn />
            </StyledForm>
        </FormWrapper>
    )
}

const MailInputWrapper = styled.div`
    margin-bottom: 25px;
    width: 23vw;

    @media ${DEVICE.laptopS} {
        width: 100%;
        max-width: 400px;
    }
`

const MailInput = styled.input`
    width: 100%;
    padding: 5px;
    border-bottom: 1px solid ${COLORS.blue};

    font-family: CalibriLight, sens-serif;
    font-size: 1.2vw;
    text-align: center;
    color: ${COLORS.black};

    @media ${DEVICE.laptop} {
        font-size: 16px;
    }
`

// чтобы скрыть полосу скролла, которая выходит за пределы textarea
const TextareaWrapper = styled.div`
    position: relative;
    width: 100%;
    min-height: 21vh;
    overflow: hidden;

    margin-bottom: 2.5vh;
    border: 1px solid ${COLORS.blue};
    border-radius: 30px;

    @media ${DEVICE.laptopM} {
        border-radius: 20px;
        font-size: 16px;
    }

    @media ${DEVICE.laptopS} {
        min-height: auto;
        max-width: 480px;
        height: 200px;
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

    max-width: 73%;
    margin: 0 auto;

    @media ${DEVICE.mobile} {
        max-width: none;
    }
`

const FormWrapper = styled.div`
    width: 100%;

    ${Textarea},
    ${MailInput} {
        &::placeholder {
            font-family: CalibriLight, sans-serif;
            font-size: 1.2vw;
            color: #a3a3a3;

            @media ${DEVICE.laptop} {
                font-size: 16px;
            }
        }
    }
`

export default observer(Form)
