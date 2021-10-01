const nome = 'Fabio'
const sobrenome = 'Dias Mota'
const idade = 31
const peso = 96
const altura = 1.64
let indiceMassaCorporal // peso / (altura * altura)
let anoNascimento


indiceMassaCorporal = peso / (altura * altura)
anoNascimento = 2021 - idade

console.log (`${nome} ${sobrenome} tem ${idade} anos e ${peso}kg`)
console.log(`Segundo os calculos ${nome} possui índice de massa corporal de ${indiceMassaCorporal}`)
console.log(`e tambem podemos dizer que o seu ano de nascimento é ${anoNascimento}`)


