import user_elements, { UserElements } from "../elements/user_elements";

describe('Teste de formulário de cadastro', () => {
    it('cadastrar um usuário com sucesso', () => {
        cy.visit('https://advantageonlineshopping.com/');
        cy.get(UserElements.buttonLogin).click();
        cy.get(UserElements.buttonCreateNewAccount).click();
        cy.get(UserElements.fieldUserName).type(UserElements.customUserName);
        cy.get(UserElements.fieldRegisterEmail).type(UserElements.customUserEmail);
        cy.get(UserElements.fieldUserPassword).type(UserElements.userPassword);
        cy.get(UserElements.fieldConfirmUserPassword).type(UserElements.userPassword, { force: true });
        cy.get(UserElements.fieldUserFirstName).type(UserElements.customUserName);
        cy.get(UserElements.fieldLastName).type(UserElements.customUserLastName);
        cy.get(UserElements.fieldPhoneNumber).type('999999999');
        cy.get(UserElements.fieldCountry).select('Brazil');
        cy.get(UserElements.fieldCity).type('Sao Paulo');
        cy.get(UserElements.fieldAddress).type('Avenida Paulista');
        cy.get(UserElements.fieldPostalCode).type('12345123');
        cy.get(UserElements.agreePrivacyPolicy).click();
        cy.get(UserElements.buttonRegister).click();
    })
    it('Validar impossibilidade de cadastrar um usuário sem preencher todos os campos obrigatórios', () => {
        cy.visit('https://advantageonlineshopping.com/');
        cy.get(UserElements.buttonLogin).click();
        cy.get(UserElements.buttonCreateNewAccount).click();
        cy.get(UserElements.fieldUserName).type(UserElements.customUserName);
        cy.get(UserElements.fieldUserPassword).type(UserElements.userPassword);
        cy.get(UserElements.fieldConfirmUserPassword).type(UserElements.userPassword, { force: true });
        cy.get(UserElements.fieldUserFirstName).type(UserElements.customUserName);
        cy.get(UserElements.fieldLastName).type(UserElements.customUserLastName);
        cy.get(UserElements.fieldPhoneNumber).type('999999999');
        cy.get(UserElements.fieldCountry).select('Brazil');
        cy.get(UserElements.fieldCity).type('Sao Paulo');
        cy.get(UserElements.fieldAddress).type('Avenida Paulista');
        cy.get(UserElements.fieldPostalCode).type('12345123');
        cy.get(UserElements.agreePrivacyPolicy).click();
        cy.get(UserElements.buttonRegister).should('be.disabled');
    })
    it('Validar senha forte na criação do usuário, deve ter entre 4 e 12 caracteres e incluir pelo menos 1 letra maiuscula, 1 minúscula e 1 número', () => {
        cy.visit('https://advantageonlineshopping.com/');
        cy.get(UserElements.buttonLogin).click();
        cy.get(UserElements.buttonCreateNewAccount).click();
        cy.get(UserElements.fieldUserName).type(UserElements.customUserName);
        cy.get(UserElements.fieldUserPassword).type(UserElements.fewCaractersPassword);
        cy.get(UserElements.passwordErrorMsg).should('be.visible');
        cy.get(UserElements.fieldUserPassword).type(UserElements.onlycarctersPassword);
        cy.get(UserElements.passwordErrorMsg).should('be.visible');
        cy.get(UserElements.fieldUserPassword).type(UserElements.onlyNumberPassword);
        cy.get(UserElements.passwordErrorMsg).should('be.visible');
        cy.get(UserElements.fieldUserPassword).type(UserElements.exceedCaracterLimitPassword);
        cy.get(UserElements.passwordErrorMsg).should('be.visible');
        cy.get(UserElements.fieldUserPassword).type(UserElements.onlyUpperCasePassword);
        cy.get(UserElements.passwordErrorMsg).should('be.visible');
        cy.get(UserElements.fieldUserPassword).type(UserElements.userPassword);
        cy.get(UserElements.fieldConfirmUserPassword).type('mar', { force: true });
        cy.get(UserElements.fieldUserFirstName).type(UserElements.customUserName);
        cy.get(UserElements.fieldLastName).type(UserElements.customUserLastName);
        cy.get(UserElements.fieldPhoneNumber).type('999999999');
        cy.get(UserElements.fieldCountry).select('Brazil');
        cy.get(UserElements.fieldCity).type('Sao Paulo');
        cy.get(UserElements.fieldAddress).type('Avenida Paulista');
        cy.get(UserElements.fieldPostalCode).type('12345123');
        cy.get(UserElements.agreePrivacyPolicy).click();
        cy.get(UserElements.buttonRegister).should('be.disabled');
    })

    it('Validar que as os campos senha e confirmar senha sejam iguais', () => {
        cy.visit('https://advantageonlineshopping.com/');
        cy.get(UserElements.buttonLogin).click();
        cy.get(UserElements.buttonCreateNewAccount).click();
        cy.get(UserElements.fieldUserName).type(UserElements.customUserName);
        cy.get(UserElements.fieldUserPassword).type(UserElements.userPassword);
        cy.get(UserElements.fieldConfirmUserPassword).type(UserElements.userPasswordConfirmationNOK, { force: true });
        cy.get(UserElements.passowordNotMatch).should('be.visible');
        cy.get(UserElements.fieldUserFirstName).type(UserElements.customUserName);
        cy.get(UserElements.fieldLastName).type(UserElements.customUserLastName);
        cy.get(UserElements.fieldPhoneNumber).type('999999999');
        cy.get(UserElements.fieldCountry).select('Brazil');
        cy.get(UserElements.fieldCity).type('Sao Paulo');
        cy.get(UserElements.fieldAddress).type('Avenida Paulista');
        cy.get(UserElements.fieldPostalCode).type('12345123');
        cy.get(UserElements.agreePrivacyPolicy).click();
        cy.get(UserElements.buttonRegister).should('be.disabled');
    })
})
