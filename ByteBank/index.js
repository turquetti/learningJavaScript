import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()
const cliente2 = new Cliente()

cliente1.nome = "Ricardo"
cliente1.cpf = 111222333444

cliente2.nome = "Alice"
cliente2.cpf = 888222999444

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001

contaCorrenteRicardo.depositar(100)
const valorSacado = contaCorrenteRicardo.sacar(50)


console.log(contaCorrenteRicardo)
console.log(valorSacado)
