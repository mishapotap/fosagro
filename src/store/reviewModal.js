import { makeAutoObservable } from "mobx"
import { makePostRequest } from "../utils"

class ReviewModal {
    isLoading = false

    isError = false

    isSuccess = false

    ratingVal = 0

    message = ""

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

        makePostRequest("sendmail.php", {
            message: this.message,
            rating: this.ratingVal,
        })
            .then(() => {
                this.setSuccessState()
            })
            .catch((err) => {
                this.setErrorState()
                console.error("error", err)
            })
    }

    setRatingHoverVal(val) {
        this.ratingHoverVal = val
    }

    setRatingVal(val) {
        this.ratingVal = val
    }

    setMessage(val) {
        this.message = val
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

    resetState() {
        this.isLoading = false
        this.isError = false
        this.isSuccess = false
        this.ratingVal = 0
        this.message = ""
        this.ratingHoverVal = 0
    }
}

export default new ReviewModal()
