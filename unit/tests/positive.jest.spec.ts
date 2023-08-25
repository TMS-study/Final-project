import Registration from "../registration";

describe('Check positive case in registration form',  function () {
    let registrationForm: any;
    let result: any
    
    it('1 - all fields full correctly', function() {
        registrationForm = new Registration('Марья', 'Marya', 'Marya12!');
        result = registrationForm.isValideDate()
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: все поля заполнены');
        console.log(result)
    });

    it('2 - field userName with upperCase', function() {
        registrationForm = new Registration('АЛЕНА', '', '');
        result = registrationForm.validateNameField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Имя" обновлено');
        console.log(result)
    })

    it('3 - field userName with lowerCase', function() {
        registrationForm = new Registration('алена', '', '');
        result = registrationForm.validateNameField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Имя" обновлено');
        console.log(result)
    })

    it('4 - field userName with different registr', function() {
        registrationForm = new Registration('аЛеНа', '', '');
        result = registrationForm.validateNameField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Имя" обновлено');
        console.log(result)
    })

    it('5 - field userLogin with with upperCase', function() {
        registrationForm = new Registration('', 'USER', '');
        result = registrationForm.validateLoginField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Логин" обновлено');
        console.log(result)
    })

    it('6 - field userLogin with lowerCase', function() {
        registrationForm = new Registration('', 'user', '');
        result = registrationForm.validateLoginField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Логин" обновлено');
        console.log(result)
    })

    it('7 - field userLogin with different registr', function() {
        registrationForm = new Registration('', 'uSEr', '');
        result = registrationForm.validateLoginField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Логин" обновлено');
        console.log(result)
    })

    it('8 - field userLogin with one character', function() {
        registrationForm = new Registration('', 'U', '');
        result = registrationForm.validateLoginField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Логин" обновлено');
        console.log(result)
    })

    it('9 - field userLogin with fourteen character', function() {
        registrationForm = new Registration('', 'Uuuuuuuuuuuuuu', '');
        result = registrationForm.validateLoginField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Логин" обновлено');
    })

    it('10 - field userPassword with character ? in end', function() {
        registrationForm = new Registration('', '', 'pas1?1');
        result = registrationForm.validatePasswordField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Пароль" обновлено');
        console.log(result)
    })

    it('11 - field userPassword with character ! in begin', function() {
        registrationForm = new Registration('', '', '!!!pas1');
        result = registrationForm.validatePasswordField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Пароль" обновлено');
        console.log(result)
    })

    it('12 - field userPassword with character * in begin', function() {
        registrationForm = new Registration('', '', '*pass123!!!');
        result = registrationForm.validatePasswordField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Пароль" обновлено');
        console.log(result)
    })

    it('13 - field userPassword with 6 character', function() {
        registrationForm = new Registration('', '', 'pass!8');
        result = registrationForm.validatePasswordField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Пароль" обновлено');
        console.log(result)
    })

    it('14 - field userPassword with 12 character', function() {
        registrationForm = new Registration('', '', 'passs!811111');
        result = registrationForm.validatePasswordField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Пароль" обновлено');
        console.log(result)
    })

    it('14 - field userPassword with * between character', function() {
        registrationForm = new Registration('', '', 'pas*ss!81');
        result = registrationForm.validatePasswordField();
        expect(registrationForm).toBeTruthy();
        expect(result).toContain('Success: Поле "Пароль" обновлено');
        console.log(result)
    })
})