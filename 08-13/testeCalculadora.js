
let calculadora = require('./calculadora');

for(let i = 0; i<10;i++){
    console.log(`
    Soma dos números ${i} e ${i+1}: ${calculadora.somar(i,i+1)}
    Divisão dos números ${i} e ${i+1}: ${calculadora.dividir(i,i+1)}
    Subtração dos números ${i} e ${i+1}: ${calculadora.subtrair(i,i+1)}
    Multiplicação dos números ${i} e ${i+1}: ${calculadora.multiplicar(i,i+1)}`)
}