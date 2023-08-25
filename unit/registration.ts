export default class Registration {
    userReg() {
        throw new Error("Method not implemented.");
    }
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
        
        if (userLogin.length > 15) {
            return 'Error: Логин не должен превышать 15 символов';
        }

        if (!userLogin.match(/^[a-zA-Z]+$/)) {
            return 'Error: Логин может содержать только латинские буквы';
        }



        return 'Success: Поле "Логин" обновлено';
    }

    validatePasswordField() {
        const userPassword = this.passwordField.replace(/\s/g, '');

        if (userPassword.length < 6 || userPassword.length > 12) {
            return 'Error: Пароль должен содержать не менее 6 и не более 12 символов';
        }
         if (!userPassword.match(/^[a-zA-Z]+$|^[!?*]+$|^[1-9]+$/)){
            return 'Error: Пароль может содержать только латинские буквы, симовол "!?* и цифры от 1 до 9';
        }
        

    return 'Success: Поле "Пароль" обновлено';  
    }

    isEmpty() {
        if(!this.nameField || !this.loginField || !this.passwordField){
            return 'Error: Все поля обязательны для заполнения'
        } ;
    }

}