var faker = require('faker')
var cpf = require('gerador-validador-cpf')
export default{
    deliver: function(){
        var firstName= faker.name.firstName()
        var lastName = faker.name.lastName()
        var data = {
            name: `${firstName} ${lastName}`,
            cpf:cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp:'11999999999',
            adress: { 
                postalcode: '03615000',
                street: 'Rua São Florêncio',
                number: '511',
                details: 'Casa',
                district: 'Vila Feliz',
                city_state: 'São Paulo/SP'
            },
            delivery_method:'Moto',
            cnh:'cnh-digital.jpg'
            }

            return data
    }
   
}