export default class Registration {
    nameField: string;
    loginField: string;
    passwordField: any;

    constructor(nameField: string, loginField: string, passwordField: any) {
        this.nameField = nameField;
        this.loginField = loginField;
        this.passwordField = passwordField;
    }


    validateNameField() {
        const userName = this.nameField.replace(/\s/g, '');
        const namePattern = /^[А-ЯЁа-яё]+$/;

        if (!userName.match(namePattern)) {
            return 'Error: Некорректные данные в поле "Имя"';
        }

        return 'Success: Поле "Имя" обновлено';
    }

    validateLoginField() {
        const userLogin = this.loginField.replace(/\s/g, '');

        if (!userLogin.match(/^[a-zA-Z]+$/)) {
            return 'Error: Логин может содержать только латинские буквы';
        }

        if (userLogin.length > 15) {
            return 'Error: Логин не должен превышать 15 символов';
        }

        return 'Success: Поле "Логин" обновлено';
    }

    validatePasswordField() {
        const userPassword = this.passwordField.replace(/\s/g, '');

        if (!userPassword.match(/^[a-zA-Z]+$/)) {
            return 'Error: Пароль может содержать только латинские буквы';
        }

        if (!userPassword.match(/^[!?*]+$/)) {
            return 'Error: Пароль должен содержать хотя бы один из симовлов "!?*"';
        }

        if (userPassword.length < 6) {
            return 'Error: Пароль должен содержать не менее 6 символов';
        }

        if (userPassword.length > 12) {
            return 'Error: Пароль не должен содержать более 12 символов';
        }

        return 'Success: Поле "Пароль" обновлено';
    }

}