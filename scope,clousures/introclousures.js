// function ahorro(dinero){
//     let capital=0;
//     capital=capital+dinero;
//     return capital;
// }

function ahorro(){
    let capital=0;
    function deposito(dinero){
        capital=capital+dinero;
        return capital;
    }
    return deposito;
}

let miahorro=ahorro();
console.log(miahorro(1000));
console.log(miahorro(2000));
console.log(miahorro(3000));

// hacer un contador que arranque en el numero definido por el usuario y al igual su incremento


// function contador(inicio){
//     let i = inicio;
//     function incremento(){
//         inicio++
//         console.log(inicio)
//     }
//     return incremento;
//     }
     
//     const c = contador(75);
//     c();
//     c();
    
//     // FLECHA
//     const cont=(inicio)=>{
//         let  i=inicio;
//          return ()=>{
//              inicio++;
//              console.log(inicio);
//          }
//         }
    
//     const d= cont(1);
//     d();
//     d(); 

function contar(principio){
    let p=principio;
    function aumento(n){
        principio++;
        console.log(principio)
    }
    return aumento;
}
const p=contar(75);
p();
p();
p();
p();
p();


function contador(ini,incr){
    let inicio=ini;
    let inc=incr;
    return()=>{
    inicio=inicio+inc;
    return inicio;
    }
}


const cont=contador(0,100);
cont();
cont();
cont();