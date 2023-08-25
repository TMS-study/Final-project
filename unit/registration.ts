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

        const rules = [
            {
                condition: userLogin.length > 15,
                message: 'Error: Логин не должен превышать 15 символов'
            },
            {
                condition: !userLogin.match(/^[a-zA-Z]+$/),
                message: 'Error: Логин может содержать только латинские буквы'
            },
            {
                condition: userLogin.length <= 14 && userLogin.match(/^[a-zA-Z]+$/),
                message: 'Success: Поле "Логин" обновлено'
            }
        ]
        for (const rule of rules) {
            if (rule.condition) {
                return rule.message;
            }
        }
    }

    validatePasswordField() {
        const userPassword = this.passwordField.replace(/\s/g, '');
    
        const hasLatinLetters = /[a-zA-Z]/.test(userPassword);
        const hasNumbers = /[1-9]/.test(userPassword);
        const hasSpecialChars = /[!?*]/.test(userPassword);
    
        const rules = [
            {
                condition: !hasLatinLetters || !hasNumbers || !hasSpecialChars,
                message: 'Error: Пароль должен содержать латинские буквы, символы !?* и цифры от 1 до 9'
            },
            {
                condition: userPassword.length >= 6 && userPassword.length <= 12 && hasLatinLetters && hasNumbers && hasSpecialChars,
                message: 'Success: Поле "Пароль" обновлено'
            },
            {
                condition: userPassword.length < 6 || userPassword.length > 12,
                message: 'Error: Пароль должен содержать от 6 до 12 символов'
            },
        ];
    
        for (const rule of rules) {
            if (rule.condition) {
                return rule.message;
            }
        }
    
  
    
    
    
    
    
    


    }



    isEmpty() {
        if (!this.nameField || !this.loginField || !this.passwordField) {
            return 'Error: Все поля обязательны для заполнения'
        };
    }

    isValideDate() {
        if (this.nameField && this.loginField && this.passwordField) {
            return 'Success: все поля заполнены'
        }
    }

}