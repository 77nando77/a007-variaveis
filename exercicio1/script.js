let nome = prompt("Nome")
let idade = Number(prompt("Qual sua idade"))

console.log(nome, typeof nome)
console.log(idade, typeof idade)


console.log(`Olá ${nome} você tem ${idade} anos.`) 

//D)Foi impresso com undefined, pois não foi atribuido nenhum valor.
//F)Foi impresso como string/number, pois o (Number), mudou (idade) de string para number.
