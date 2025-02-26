//Introdução a javascript
//CTRL + ; -> comenta o codigo selecionado

//Declaração de variáveis no JS: CONST + LET + VAR

const nome = "Larissa"; //Const precisa de um valor atribuido a ele
let Nome; // Let não precisa de valor atribuido a ele

var cor = "Azul";
var cor = "Amarelo";
let cidade = "Registro";
cidade = "Jacupiranga";

const message = "Hello, world! Iniciando estudos Javascript!";
console.log(message);

function saudacao() {
  console.log("Olá, bem-vindo!");
}

saudacao();

//função com parametro /Argumento
//parametro
//arguemento

function Saudacao(nome) {
  //PARAMETRO
  console.log("olá, bem-vindo " + nome); //Concatenando
  //usando TEMPLATE STRINGS ``
  console.log(`Olá, bem-vindo ${nome}`);
  //${}-> Placeholder
}

Saudacao("Derick"); //ARGUMENTO

//FUNCAO COM MAIS DE UM PARAMEATRO
function soma(n1, n2) {
  let resultado = n1 + n2;
  console.log(`A soma dos dois numeros foi ${resultado}.`);
}
let n1 = 6;
let n2 = 19;
soma(n1, n2);

//FUNCAO COM RETORNO
function Soma(n1, n2) {
  return n1 + n2;
}
console.log(`A soma dos dois numeros foi ${Soma(2, 6)}`);

//FUNCAO COM MAIS DE UM RETORNO
function parImpar(n) {
  if (n % 2 == 0) {
    return "par";
  } else {
    return "ímpar";
  }
}

let num = 89752;

console.log(parImpar(num));
console.log(`O numero ${num} é ${parImpar(num)}!`);

//FUNCAO ANÔNIMA chama avariavel
let dobro = function (x) {
  return x * 2;
};
console.log(dobro(15));
console.log(`o dobro do numero é ${dobro(15)}!`);

//ARROW FUNCTION COM PARAMETRO  UNICO
// FUNCAO FLECHA
//parametro unico não precisa dos parenteses, mais de um parametro precisa.
const Dobro = (x) => {
    return x*2
}
console.log(`Funcao Dobro com ARROW Function. Resultado: ${Dobro(20)}.`);

//Arrow Funciton com mais de um parametro
const calc = (num1, operador, num2) =>{
    return eval(`${num1} ${operador} ${num2}`)
}
console.log(`O resultado da opecao é ${calc(6, '*', 6)}.`)

//SIMPLIFICANDO ARROW FUNCTION COM APENAS UM RETORNO
const Calc = (num1, operador, num2) => 
    eval(`${num1} ${operador} ${num2}`)
console.log(`O resultado da operação é ${Calc(7, '*',7)}`)

//IIFE - Imediately Invoked Function Expression
//Função Imediata - última \o/
const iife = (function(){
    console.log("estou sendo executada, imediatamente!..")
})

//IIFE COM PARAMETRO
const start = (function(app){
    console.log(`Executando imediatamente o app ${app}.`)
})("UAITIZAIPE")

//GIT ADD
//git commit -m "@seu-username"
//git push