/// <reference types="cypress" />


class Utilidades {

    constructor() {

        this.urlAutomationExerciseLogin = 'https://www.automationexercise.com/login'
    }

    preencherData(dias) {
        let _data = new Date();
        _data.setDate(_data.getDate() + dias);
        const _data1 = _data.toLocaleString("pt-br", {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
        return _data1
    }
}

export default new Utilidades();