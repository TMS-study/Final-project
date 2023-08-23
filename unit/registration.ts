export default class Registration {
    nameField: any;
    loginFieald: any;
    passwordField: any;

    constructor(nameField: string, loginFieald: any, passwordField: any) {
        this.nameField = nameField;
        this.loginFieald = loginFieald;
        this.passwordField = passwordField;
    }


    inputNameField() {
        let answerName = '';
        try {
            this.nameField = oninput;
            answerName = 'Success: Name field updated';
        } catch (error) {
            answerName = 'Error: Incorrect data entered';
        }

        return answerName;
    }

    inputLoginField() {
        let answerLogin = '';
        try {
            this.loginFieald = oninput;
            answerLogin = 'Success: Name field updated';
        }
        catch (error) {
            answerLogin = 'Error: Incorrect data entered';
        }
        return answerLogin;
    };

    inputPasswordField() {
        let answerPassword = '';
        try {
            this.passwordField = oninput;
            answerPassword = 'Success: Name field updated';
        }
        catch (error) {
            answerPassword = 'Error: Incorrect data entered';
        }
        return answerPassword;
    };

}