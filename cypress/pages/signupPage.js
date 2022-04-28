class SignupPage{ //Classe utiliza pacalcase que no caso é a primeira letra Maiuscula e primeira letra da segunda palavra também. 
   
    go(){ //acessando a page
        
        cy.visit('/')
        cy.get('a[href="/deliver"]').click()//Efetuando o click no botão que tem o link 
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')//validando o texto da page que abriu após o click
        
    }

    fillForm(deliver){// Em função a primeira letra é minusculo onde segue o padrão camelcase
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
               
        cy.get('input[placeholder="CEP"]').type(deliver.adress.postalcode)
        cy.get('input[type=button][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.adress.number)
        cy.get('input[name="address-details"]').type(deliver.adress.details)

        cy.get('input[name="address"]').should('have.value', deliver.adress.street)
        cy.get('input[name="district"]').should('have.value', deliver.adress.district)
        cy.get('input[name="city-uf"]').should('have.value', deliver.adress.city_state)
        
        /*O contains é utilizado para quanto você faz a seleção do elemento por um cssSelector e devido não ter ID ou algo do tipo 
        é preciso que crie um objeto e passe o valor="Namo" para conseguir selecionar.*/
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)

    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)

    }

    alertMenssageShouldBe(expectedMessage){
       // cy.get('.alert-error').should('have.text', expectedMessage) //É utilziada para validação de apenas uma ação. 
        cy.contains('.alert-error',expectedMessage).should('be.visible')//O contains faz combinação de localizadores e te permite fazer mais de uma validação.
    }
}

export default new SignupPage;