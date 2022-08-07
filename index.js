// 1: Capiturar o CPF digitado pelo usuario
let cpf = process.argv[2]
console.log("Tratando o CPF " + cpf);

// 2: Verificar se o CPF capiturado é valido
const validarCpf = require("validador-de-cpf");

// 3.a: Se for valido, salvar e mandar uma mensagem de sucesso
if (validarCpf(cpf)) {
    console.log(`O CPF ${cpf} é valido.`)
    console.log("Salvando no arquivo...")

    // 3.a.1: Salvar o PCF num arquivo
    const fs = require("fs");
    fs.writeFileSync("cpfsSalvos", cpf + '\n', { flag: 'a' })

    // se não for valido mandar uma mensagem de falha
} else {
    console.log(`O CPF ${cpf} não é valido.`)

}



