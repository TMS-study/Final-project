
import Registration from "../registration";

describe('Check negative case in registration form', function () {
    let registrationForm: any;
    let result: any;
    let resultName: any;
    let resultLogin: any;
    let resultPassword;

    it('1 - all field empty', function () {
        registrationForm = new Registration('', '', '');
        result = registrationForm.isEmpty();
        expect(result).toEqual('Error: Все поля обязательны для заполнения');

    });

    it('2 - field userName empty', function () {
        registrationForm = new Registration('', 'ivan', 'ivan!12');
        result = registrationForm.isEmpty();
        expect(result).toEqual('Error: Все поля обязательны для заполнения');
        console.log(result)
    });

    it('3 - field userLogin empty', function () {
        registrationForm = new Registration('Иван', '', 'ivan!13');
        result = registrationForm.isEmpty();
        expect(result).toEqual('Error: Все поля обязательны для заполнения');
        console.log(result)
    });

    it('4 - field userPassword empty', function () {
        registrationForm = new Registration('Иван', 'Ivanovich', '');
        result = registrationForm.isEmpty();
        expect(result).toEqual('Error: Все поля обязательны для заполнения');
        console.log(result)
    });

    it('5 - userName contains Latin letters', function () {
        registrationForm = new Registration('Ivan', 'Ivanovich', '199cap!');
        result = registrationForm.validateNameField();
        expect(result).toEqual('Error: Некорректные данные в поле "Имя"');
        console.log(result)
    });

    it('6 - userName contains contains forbidden characters', function () {
        registrationForm = new Registration('Ивашка!!!', 'Ivanovich', '199cap!');
        result = registrationForm.validateNameField();
        expect(result).toEqual('Error: Некорректные данные в поле "Имя"');
        console.log(result)
    });

    it('7 - userName contains contains forbidden number', function () {
        registrationForm = new Registration('Ивашка007', 'Ivanovich', '199cap!');
        result = registrationForm.validateNameField();
        expect(result).toEqual('Error: Некорректные данные в поле "Имя"');
        console.log(result)
    });

    it('8 - userLogin contains Cyrillic', function () {
        registrationForm = new Registration('Иван', 'Иван', '199cap!');
        result = registrationForm.validateLoginField();
        expect(result).toEqual('Error: Логин может содержать только латинские буквы');
        console.log(result)
    });

    it('9 - userLogin contains contains forbidden number', function () {
        registrationForm = new Registration('Иван', 'Ivan19', '199cap!');
        result = registrationForm.validateLoginField();
        expect(result).toEqual('Error: Логин может содержать только латинские буквы');
        console.log(result)
    });

    it('10 - userLogin contains contains forbidden characters', function () {
        registrationForm = new Registration('Иван', 'Ivan!', '199cap!');
        result = registrationForm.validateLoginField();
        expect(result).toEqual('Error: Логин может содержать только латинские буквы');
        console.log(result)
    });

    it('11 - userLogin contains an invalid number of characters', function () {
        registrationForm = new Registration('Иван', 'ivanivanivanivan', 'ivan13!');
        result = registrationForm.validateLoginField();
        expect(result).toEqual('Error: Логин не должен превышать 15 символов');
        console.log(result)
    });

    it('12 - userPassword contains Cyrillic', function () {
        registrationForm = new Registration('Иван', 'Ivan', 'Иван!11111');
        result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль должен содержать латинские буквы, символы !?* и цифры от 1 до 9');
        console.log(result)
    });


    it('13 - userPassword not contains number', function () {
        registrationForm = new Registration('Иван', 'Ivan', 'IvanIvan!');
        result = registrationForm.validatePasswordField();
        expect(result).toContain('Error: Пароль должен содержать латинские буквы, символы !?* и цифры от 1 до 9');
        console.log(result)
    });

    it('14 - userPassword not contains characters', function () {
        registrationForm = new Registration('Иван', 'Ivan', 'IvanIvan9');
        result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль должен содержать латинские буквы, символы !?* и цифры от 1 до 9');
        console.log(result)
    });

    it('15 - userPassword contains forbidden characters', function () {
        registrationForm = new Registration('Иван', 'Ivan', 'IvanIvan9$');
        result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль должен содержать латинские буквы, символы !?* и цифры от 1 до 9');
        console.log(result)
    });

    it('16 - userPassword must contain at least 6 characters', function () {
        registrationForm = new Registration('Иван', 'Ivan', 'Iv!2');
        result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль должен содержать от 6 до 12 символов');
        console.log(result)
    });

    it('17 - userPassword must contain no more than 15 characters', function () {
        registrationForm = new Registration('Иван', 'Ivan', 'Ivqwqwqwqwqwqwq!2');
        result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль должен содержать от 6 до 12 символов');
        //console.log(result)
    });

    it('18 - invalid userPassword ', function () {
        registrationForm = new Registration('Иван', 'Ivan', 'Ив$');
        result = registrationForm.validatePasswordField();
        expect(result).toContain('Error: Пароль должен содержать латинские буквы, символы !?* и цифры от 1 до 9');
        console.log(result)
    });

    it('19 - invalid userLogin and userPassword ', function () {
        registrationForm = new Registration('Иван', 'Ivan13', 'Дата!9');
        resultLogin = registrationForm.validateLoginField();
        resultPassword = registrationForm.validatePasswordField();
        expect(resultLogin).toEqual('Error: Логин может содержать только латинские буквы');
        expect(resultPassword).toEqual('Error: Пароль должен содержать латинские буквы, символы !?* и цифры от 1 до 9');
        console.log(resultLogin);
        console.log(resultPassword);

    });

    it('20 - invalid userName and userLogin ', function () {
        registrationForm = new Registration('siuu', '', 'ДатаРождения!9');
        resultLogin = registrationForm.isEmpty()
        resultName = registrationForm.validateNameField();
        expect(resultLogin).toEqual('Error: Все поля обязательны для заполнения');
        expect(resultName).toEqual('Error: Некорректные данные в поле "Имя"');
        console.log(resultLogin);
        console.log(resultName);
    });

    it('21 - invalid userName and userLogin and userPassword ', function () {
        registrationForm = new Registration('siuu', 'криш', 'неГоат2023!');
        resultName = registrationForm.validateNameField();
        resultLogin = registrationForm.validateLoginField();
        resultPassword = registrationForm.validatePasswordField();
        expect(resultName).toEqual('Error: Некорректные данные в поле "Имя"');
        expect(resultLogin).toEqual('Error: Логин может содержать только латинские буквы');
        expect(resultPassword).toEqual('Error: Пароль должен содержать латинские буквы, символы !?* и цифры от 1 до 9')
        console.log(resultLogin);
        console.log(resultName);
        console.log(resultPassword);
    });
})