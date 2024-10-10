export function fatorial(numero:number):number {
    let fatoriais:number[] = [];
    for(let i:number = 0; i < numero; i++) {
        fatoriais.push(numero - i);
    }

    let resultado:number = 1;

    for(let number of fatoriais) {
        if(number != 0) {
            resultado *= number;
        }
    }
    return resultado;
}