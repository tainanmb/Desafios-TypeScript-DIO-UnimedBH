
// Desafio 1
// Como podemos rodar isso em um arquivo .ts sem causar erros? 

//Primeira solução - usando objeto


let employee = {
    code: 10,
    name: "John"
};
employee.code = 10;
employee.name = "John";

//Segunda solução - usando interface

interface Iemployee {
    code: number,
    name: string
};
const iemployee : Iemployee = {
    code:10,
    name: "John"
}

//Terceira solução - usando classe

class Employee{
    name: string;
    code: number;
    constructor(code:number,name: string){
        this.code=code;
        this.name=name;
    }
}
let cemployee = new Employee(10, 'John');

console.log(employee.name, employee.code);
console.log(iemployee.name, iemployee.code);
console.log(cemployee.name, cemployee.code);
