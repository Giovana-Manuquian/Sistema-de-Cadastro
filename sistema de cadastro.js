let idade = 18 // Evento disponivel para pessoas com 18+
let dataEvento = 04 // Data do evento.
let numPart = 02 // Número de participantes.
let listaFinal = 100 // Lista pode possui até 100 pessoas.



console.log ('---------------------------------------------------------------------------------------')
console.log ('*  *  *  *  *  *  *  * Bem vindo(a) ao evento de Julho de 2022! *  *  *  *  *  *  * *  ')
console.log ('*  *  Para poder participar desse evento único, precisamos de algumas informações. *  *')
console.log ('---------------------------------------------------------------------------------------')



console.log (`Digite sua idade: ${idade}`)

if (idade >= 18) {
    console.log (`Você tem ${idade} anos. Cadastro permitido!`)
} else {
    console.log ('Cadastro não permitido')
}


console.log (`Digite a data do evento: ${dataEvento}`)

if (dataEvento != 04) {
    console.log ("Data inválida. Digite outra data.")
} else {
    console.log ("Data do evento permitida. Prossiga!") 
}


console.log (`Digite o número de pessoas que desejam participar do evento: ${numPart}`)

if (numPart <= listaFinal) {
    console.log ('Cadastro efetuado. Aproveite esse evento maravilhoso!')
} else {
    console.log ('Lista de participantes excedeu o limite!')
}
