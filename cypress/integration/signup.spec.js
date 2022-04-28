import signup from '../pages/signupPage'
import signupFactory from '../factories/signupFactory'
import signupPage from '../pages/signupPage'


//Cadastro
describe('Signup', ()=>{
    
   /* beforeEach(function(){
        cy.fixture('deliver').then((d)=>{
            this.deliver = d
        })

    })*/

    //Usuario deve se tornar um entregador
    it('User should be deliver', function(){

       var deliver = signupFactory.deliver()

       signupPage.go()
       signupPage.fillForm(deliver)
       signupPage.submit()
     
        //const é utilizado para criar uma variavel e nessa vai ser atribuido um valor fixo, esse valor não vai ter mudanças. 
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)
        
    })
    //CPF Invalido
    it('Incorrect document', function(){

        var deliver = signupFactory.deliver()
        deliver.cpf = '000000141aa'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMenssageShouldBe('Oops! CPF inválido')
    })
    //email incorreto
    it('Incorrect email', function(){

        var deliver = signupFactory.deliver()
        deliver.email = 'lucas.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMenssageShouldBe('Oops! Email com formato inválido.')
    })

    context('Required fields', function(){

        const messages =[
            {field:'name', output: 'É necessário informar o nome'},
            {field:'cpf', output: 'É necessário informar o CPF'},
            {field:'email', output: 'É necessário informar o email'},
            {field:'postalcode', output: 'É necessário informar o CEP'},
            {field:'number', output: 'É necessário informar o número do endereço'},
            {field:'delivery_method', output: 'Selecione o método de entrega'},
            {field:'cnh', output: 'Adicione uma foto da sua CNH'},

        ]

        before( function(){
            signupPage.go()
            signupPage.submit()
        })
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMenssageShouldBe(msg.output)
            })
        })
    })

  
   
})
