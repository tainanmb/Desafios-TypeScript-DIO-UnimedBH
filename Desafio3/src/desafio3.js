"use strict";
//Código que soma e retorna o saldo digitado ao saldo existente
let botaoAtualizar = document.getElementById('atualizar-saldo');
let botaoLimpar = document.getElementById('limpar-saldo');
let soma = document.getElementById('soma');
let campoSaldo = document.getElementById('campo-saldo');
campoSaldo.innerHTML = "0";
function somarAoSaldo(soma) {
    //    let total = parseFloat(campoSaldo.innerHTML) + soma;
    //    campoSaldo.innerHTML  = String(total);
    campoSaldo.innerHTML = String(parseFloat(campoSaldo.innerHTML) + soma);
}
function limparSaldo() {
    campoSaldo.innerHTML = '';
}
if (botaoAtualizar && soma) {
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
}
if (botaoLimpar) {
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}
