import { makeAutoObservable } from "mobx";

class Modal {
    isVisible = {
        instruction: false,
        menu: false,
        mail: false,
    };

    constructor () {
        makeAutoObservable(this)
    }

    showModal(value) {
        this.isVisible[value] = true
    }

    closeModal(value) {
        this.isVisible[value] = false
    }
}

export default new Modal()