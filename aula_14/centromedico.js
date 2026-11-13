// O atendimento deseja coletar dados de identificação que antes eram anota dos empapel.


import PromptSync from "prompt-sync";
const entrada = PromptSync()
const nome = entrada("Digite seu nome")
const idade = parseInt(entrada("Digite sua idade"))
const bairro = entrada ("Digite seu bairro")



console.log("Nome:", nome)
console.log("Idade:", idade)
console.log("Bairro:", bairro)


console.log(`Ficha: ${nome} | ${idade} | ${bairro}`)




