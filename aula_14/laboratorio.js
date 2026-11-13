// Um técnico precisa registrar temperatura com vírgula decimal usando o teclado.

import PromptSync from "prompt-sync";
const entrada = PromptSync()

const temperatura = entrada("Escolha a temperatura:")

const temp_ajustada = Number(temperatura.replace(",","."))

console.log(temp_ajustada)
console.log("Temperatura: °C", temperatura)
console.log(`Temperatura registrada:${temp_ajustada}°C`)
