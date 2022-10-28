import React from "react"
import { observer } from "mobx-react-lite"
import SendButton from "../SendButton"
import { ReviewModalStore } from "../../../store"
import { ISENG } from "../../../constants"

const sendBtnText = ISENG ? "Send" : "Отправить"

function SendReviewBtn() {
    return (
        <SendButton
            text={sendBtnText}
            loading={ReviewModalStore.isLoading}
            disabled={
                ReviewModalStore.isLoading ||
                (!ReviewModalStore.message && !ReviewModalStore.ratingVal) ||
                (ReviewModalStore.email && !ReviewModalStore.isEmailCorrect)
            }
        />
    )
}

export default observer(SendReviewBtn)
