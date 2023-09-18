const nome = 'Lucas'
const sobrenome = 'de Martha'
const idade = 24
const peso = 87
const altura = 1.78
let imc = peso / (altura * altura)
let anoNascimento = 2023 - idade

console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg')
console.log(`tem ${altura} de altura e seu IMC é de ${imc}`)
console.log(`${nome} nasceu em ${anoNascimento}.`)