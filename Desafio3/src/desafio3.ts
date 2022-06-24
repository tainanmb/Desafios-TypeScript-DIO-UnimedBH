//Código que soma e retorna o saldo digitado ao saldo existente

let botaoAtualizar = document.getElementById('atualizar-saldo') as HTMLElement;
let botaoLimpar = document.getElementById('limpar-saldo') as HTMLElement;
let soma = document.getElementById('soma') as HTMLInputElement;
let campoSaldo = document.getElementById('campo-saldo') as HTMLElement;

campoSaldo.innerHTML = "0";


function somarAoSaldo(soma: number) {
//    let total = parseFloat(campoSaldo.innerHTML) + soma;
//    campoSaldo.innerHTML  = String(total);
   campoSaldo.innerHTML  = String(parseFloat(campoSaldo.innerHTML) + soma);
}

function limparSaldo() {
    campoSaldo.innerHTML = '';
}

if(botaoAtualizar && soma){
    botaoAtualizar.addEventListener('click', function () {
        somarAoSaldo(Number(soma.value));
    });
} 

if(botaoLimpar){
    botaoLimpar.addEventListener('click', function () {
        limparSaldo();
    });
}






