
import Registration from "../registration";

describe('Check negative case in registration form', function () {
    //let registrationForm: any;

    it('1 - all field empty', function () {
        let registrationForm = new Registration('', '', '');
        const result = registrationForm.isEmpty();
        expect(result).toEqual('Error: Все поля обязательны для заполнения');

    });

    it('2 - field userName empty', function () {
        let registrationForm = new Registration('', 'ivan', 'ivan!12');
        const result = registrationForm.isEmpty();
        expect(result).toEqual('Error: Все поля обязательны для заполнения');
        console.log(result)
    });

    it('3 - field userLogin empty', function () {
        let registrationForm = new Registration('Иван', '', 'ivan!13');
        const result = registrationForm.isEmpty();
        expect(result).toEqual('Error: Все поля обязательны для заполнения');
        console.log(result)
    });

    it('4 - field userPassword empty', function () {
        let registrationForm = new Registration('Иван', 'Ivanovich', '');
        const result = registrationForm.isEmpty();
        expect(result).toEqual('Error: Все поля обязательны для заполнения');
        console.log(result)
    });

    it('5 - userName contains Latin letters', function () {
        let registrationForm = new Registration('Ivan', 'Ivanovich', '199cap!');
        const result = registrationForm.validateNameField();
        expect(result).toEqual('Error: Некорректные данные в поле "Имя"');
        console.log(result)
    });

    it('6 - userName contains contains forbidden characters', function () {
        let registrationForm = new Registration('Ивашка!!!', 'Ivanovich', '199cap!');
        const result = registrationForm.validateNameField();
        expect(result).toEqual('Error: Некорректные данные в поле "Имя"');
        console.log(result)
    });

    it('7 - userName contains contains forbidden number', function () {
        let registrationForm = new Registration('Ивашка007', 'Ivanovich', '199cap!');
        const result = registrationForm.validateNameField();
        expect(result).toEqual('Error: Некорректные данные в поле "Имя"');
        console.log(result)
    });

    it('8 - userLogin contains Cyrillic', function () {
        let registrationForm = new Registration('Иван', 'Иван', '199cap!');
        const result = registrationForm.validateLoginField();
        expect(result).toEqual('Error: Логин может содержать только латинские буквы');
        console.log(result)
    });

    it('9 - userLogin contains contains forbidden number', function () {
        let registrationForm = new Registration('Иван', 'Ivan19', '199cap!');
        const result = registrationForm.validateLoginField();
        expect(result).toEqual('Error: Логин может содержать только латинские буквы');
        console.log(result)
    });

    it('10 - userLogin contains contains forbidden characters', function () {
        let registrationForm = new Registration('Иван', 'Ivan!', '199cap!');
        const result = registrationForm.validateLoginField();
        expect(result).toEqual('Error: Логин может содержать только латинские буквы');
        console.log(result)
    });

    it('11 - userLogin contains an invalid number of characters', function () {
        let registrationForm = new Registration('Иван', 'ivanivanivanivan', 'ivan13!');
        const result = registrationForm.validateLoginField();
        expect(result).toEqual('Error: Логин не должен превышать 15 символов');
        console.log(result)
    });

    it('12 - userPassword contains Cyrillic', function () {
        let registrationForm = new Registration('Иван', 'Ivan', 'Иван!11111');
        const result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль может содержать только латинские буквы, симовол "!?* и цифры от 1 до 9');
        console.log(result)
    });


    it('13 - userPassword not contains number', function () {
        let registrationForm = new Registration('Иван', 'Ivan', 'IvanIvan!');
        const result = registrationForm.validatePasswordField();
        expect(result).toContain('Error: Пароль может содержать только латинские буквы, симовол "!?* и цифры от 1 до 9');
        console.log(result)
    });

    it('14 - userPassword not contains characters', function () {
        let registrationForm = new Registration('Иван', 'Ivan', 'IvanIvan9');
        const result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль может содержать только латинские буквы, симовол "!?* и цифры от 1 до 9');
        console.log(result)
    });

    it('15 - userPassword contains forbidden characters', function () {
        let registrationForm = new Registration('Иван', 'Ivan', 'IvanIvan9$');
        const result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль может содержать только латинские буквы, симовол "!?* и цифры от 1 до 9');
        console.log(result)
    });

    it('16 - userPassword must contain at least 6 characters', function () {
        let registrationForm = new Registration('Иван', 'Ivan', 'Iv!2');
        const result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль должен содержать не менее 6 и не более 12 символов');
        console.log(result)
    });

    it('17 - userPassword must contain no more than 15 characters', function () {
        let registrationForm = new Registration('Иван', 'Ivan', 'Ivqwqwqwqwqwqwq!2');
        const result = registrationForm.validatePasswordField();
        expect(result).toEqual('Error: Пароль должен содержать не менее 6 и не более 12 символов');
        //console.log(result)
    });

    it('18 - invalid userPassword ', function () {
        let registrationForm = new Registration('Иван', 'Ivan', 'Ив$');
        const result = registrationForm.validatePasswordField();
        expect(result).toContain('Error: Пароль должен содержать не менее 6 и не более 12 символов');
        console.log(result)
    });

    it('19 - invalid userLogin and userPassword ', function () {
        let registrationForm = new Registration('Иван', 'Ivan13', 'Дата!9');
        const resultLogin = registrationForm.validateLoginField();
        const resultPassword = registrationForm.validatePasswordField();
        expect(resultLogin).toEqual('Error: Логин может содержать только латинские буквы');
        expect(resultPassword).toEqual('Error: Пароль может содержать только латинские буквы, симовол "!?* и цифры от 1 до 9');
        console.log(resultLogin);
        console.log(resultPassword);

    });

    it('20 - invalid userName and userLogin ', function () {
        let registrationForm = new Registration('siuu', '', 'ДатаРождения!9');
        const resultLogin = registrationForm.isEmpty()
        const resultName = registrationForm.validateNameField();
        expect(resultLogin).toEqual('Error: Все поля обязательны для заполнения');
        expect(resultName).toEqual('Error: Некорректные данные в поле "Имя"');
        console.log(resultLogin);
        console.log(resultName);
    });

    it('21 - invalid userName and userLogin and userPassword ', function () {
        let registrationForm = new Registration('siuu', 'криш', 'неГоат2023!');
        const resultName = registrationForm.validateNameField();
        const resultLogin = registrationForm.validateLoginField();
        const resultPassword = registrationForm.validatePasswordField();
        expect(resultName).toEqual('Error: Некорректные данные в поле "Имя"');
        expect(resultLogin).toEqual('Error: Логин может содержать только латинские буквы');
        expect(resultPassword).toEqual('Error: Пароль может содержать только латинские буквы, симовол "!?* и цифры от 1 до 9')
        console.log(resultLogin);
        console.log(resultName);
        console.log(resultPassword);
    });
})