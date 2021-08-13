
let calculadora = {
    somar:(...n)=>n.reduce((acc,e)=>acc+e),
    subtrair:(...n)=>n.reduce((acc,e)=>acc-e),
    multiplicar:(...n)=>n.reduce((acc,e)=>acc*e),
    dividir:(...n)=>{
        if(n.indexOf(0)!=-1)return "Não é possível divir por zero";
        return n.reduce((acc,e)=>acc/e);
    },
}

module.exports=calculadora;