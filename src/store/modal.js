import { makeAutoObservable } from "mobx"

class Modal {
    isVisible = {
        instruction: false,
        menu: false,
        mail: false,
        intro: false,
        cookie: false,
        extLinks: false,
        cookieInfo: false
    }

    constructor() {
        makeAutoObservable(this)
    }

    get someModalShown() {
        return Object.values(this.isVisible).find(val => val === true)
    }

    showModal(value) {
        this.isVisible[value] = true
    }

    closeModal(value) {
        this.isVisible[value] = false
    }
}

export default new Modal()
