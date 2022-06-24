"use strict";
// Desafio 2
// Como podemos melhorar o esse código usando TS?
class Pessoa {
    constructor(name, idade, profissao) {
        this.name = name;
        this.idade = idade;
        this.profissao = profissao;
    }
}
var Profissao;
(function (Profissao) {
    Profissao["Atriz"] = "Atriz";
    Profissao["Padeiro"] = "Padeiro";
})(Profissao || (Profissao = {}));
let pessoa1 = new Pessoa("Maria", 29, Profissao.Atriz);
let pessoa2 = new Pessoa("Roberto", 19, Profissao.Padeiro);
let pessoa3 = new Pessoa("Laura", 32, Profissao.Atriz);
let pessoa4 = new Pessoa("Carlos", 19, Profissao.Padeiro);
console.log(pessoa1.idade, pessoa1.name, pessoa1.profissao);
console.log(pessoa2.idade, pessoa2.name, pessoa2.profissao);
console.log(pessoa3.idade, pessoa3.name, pessoa3.profissao);
console.log(pessoa4.idade, pessoa4.name, pessoa4.profissao);
