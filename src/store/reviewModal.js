import { makeAutoObservable } from "mobx"
import { makePostRequest } from "../utils"

// TODO сделать реальную отправку формы

class ReviewModal {
    isLoading = false

    isError = false

    isSuccess = false

    ratingVal = 0

    message = ''

    ratingHoverVal = 0

    constructor() {
        makeAutoObservable(this)
    }

    handleSend(e) {
        e.preventDefault()

        if (!this.message && !this.ratingVal) {
            return
        }

        this.isLoading = true
        this.isError = false

        makePostRequest("/test", {
            message: this.message,
            rating: this.ratingVal,
        })
            .then(() => {
                this.setSuccessState()
            })
            .catch(() => {
                this.setErrorState()
            })
    }

    setRatingHoverVal(val) {
        this.ratingHoverVal = val;
    }

    setRatingVal(val) {
        this.ratingVal = val;
    }

    setMessage(val) {
        this.message = val;
    }

    setErrorState() {
        this.isLoading = false
        this.isError = true
        this.isSuccess = false
    }

    setSuccessState() {
        this.isLoading = false
        this.isError = false
        this.isSuccess = true
    }
}

export default new ReviewModal()
