let notas = [Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10),Math.floor(Math.random()*10)];

let media = notas.reduce((acc,atual)=>{
    let sum = acc+atual;
    console.log(`Soma: ${sum}`);
    return sum;
},0)/notas.length;

console.log(`A média é: ${media}`);

let counter = 0;

notas.forEach(e=>{
    let mensagem;
    counter++;
    if(e>=7){
        mensagem=`Parabéns pela conclusão do ${counter}º bimestre. Sua nota foi: ${e}.`
    }else{
        mensagem=`Comunicamos que você infelizmente foi reprovado no ${counter}º bimestre. Sua nota foi: ${e}`
    }
    console.log(mensagem);
});