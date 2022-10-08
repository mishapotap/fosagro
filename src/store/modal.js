import { makeAutoObservable } from "mobx"

class Modal {
    isVisible = {
        instruction: false,
        menu: false,
        mail: false,
        intro: false,
        cookie: false,
        extLinks: false,
        cookiesInfo: false,
        cookiesConfirm: false,
        welcomeBack: false,
    }

    extModalLink = "#"

    dontPlayOnClose = false

    constructor() {
        makeAutoObservable(this)
    }

    get someModalShown() {
        return !!Object.entries(this.isVisible).find(
            ([modalName, modalVal]) =>
                modalName !== "cookie" && modalVal === true
        )
    }

    showModal(value) {
        this.isVisible[value] = true
    }

    closeModal(value) {
        this.isVisible[value] = false
    }

    closeModals() {
        Object.entries(this.isVisible).forEach(([name, value]) => {
            if (value === true && name !== "cookie") {
                this.closeModal(name)
            }
        })
    }

    setExtModalLink(url) {
        this.extModalLink = url
    }

    setDontPlayOnClose(val) {
        this.dontPlayOnClose = val
    }
}

export default new Modal()
