import React from "react"
import { observer } from "mobx-react-lite"
import SendButton from "../SendButton"
import { ReviewModalStore } from "../../../store"

function SendReviewBtn() {
    return (
        <SendButton
            text="Отправить"
            loading={ReviewModalStore.isLoading}
            disabled={
                ReviewModalStore.isLoading ||
                (!ReviewModalStore.message && !ReviewModalStore.ratingVal)
            }
        />
    )
}

export default observer(SendReviewBtn)
