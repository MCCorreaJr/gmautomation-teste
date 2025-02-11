 import {faker} from '@faker-js/faker';
export const UserElements= {

    buttonLogin: '#menuUser',
    buttonCreateNewAccount: '.create-new-account',
    buttonRegister: '#register_btn',
    fieldUserName: 'input[name=usernameRegisterPage]',
    fieldRegisterEmail: 'input[name=emailRegisterPage]',
    fieldUserPassword: 'input[name=passwordRegisterPage]',
    fieldConfirmUserPassword: 'input[name="confirm_passwordRegisterPage"]',
    fieldUserFirstName: '[sec-name="userFirstName"]',
    fieldLastName: '[sec-name="userLastName"]',
    fieldPhoneNumber: 'input[name=phone_numberRegisterPage]',
    fieldCountry: '[sec-name="userCountry"] > .inputContainer > .ng-pristine',
    fieldCity: '[sec-name="userCity"] > .inputContainer > .ng-pristine',
    fieldAddress:'[sec-name="userAdress"]',
    fieldPostalCode: 'input[name=postal_codeRegisterPage]',
    passwordErrorMsg:'[a-hint="Password"]',
    customUserName: (faker.person.firstName())
        .replace(/[^a-zA-Z]/g, '') // Remove caracteres especiais e números
        .slice(0, 15),    customUserEmail: `user${Date.now()}@email.com`,
    customUserLastName: faker.person.lastName(),    
    userPassword: 'Password@12',
    userPasswordConfirmationNOK: 'Password@12',
    fewCaractersPassword: 'asd',
    exceedCaracterLimitPassword: 'Password@1234567890',
    onlyNumberPassword: '12345678',
    onlycarctersPassword: 'abcde',
    onlyUpperCasePassword: 'PASSWORD',
    passowordNotMatch: 'label[data-ng-click="labelClicked()"]',
    agreePrivacyPolicy: '[sec-name="registrationAgreement"] > .inputContainer > .ng-pristine',
    UserPasswordConfirmation: 'Teste@123456',


}

