// A gráfica cobra por página e quer fazer um orçamento rápido para clientes.

import PromptSync from "prompt-sync";
const entrada = PromptSync()

const quantidade_paginas = parseInt(entrada("Digite a quantidade de páginas"))

const preço_pagina = parseFloat(entrada("Preço por página"))

const total_paginas = quantidade_paginas * preço_pagina
console.log("Total: R$", total_paginas)
