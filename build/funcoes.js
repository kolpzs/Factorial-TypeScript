"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fatorial = fatorial;
function fatorial(numero) {
    let fatoriais = [];
    for (let i = 0; i < numero; i++) {
        fatoriais.push(numero - i);
    }
    let resultado = 1;
    for (let number of fatoriais) {
        if (number != 0) {
            resultado *= number;
        }
    }
    return resultado;
}
