function prometedora(num) {
    return new Promise((resolve, reject)=>{
        resolve(num);
        reject();
    })
}
let param=100;

/////////////////////
function prueba(parametro){
    console.log(`soy externa ${parametro}`)
    return parametro;
}

function p2(){
    let vec=[1,2,3]
    console.log(vec)
}

prometedora(param)
    .then((num)=>console.log(`se ejecuta el resolve ${num}`))
    .then(prueba)
    .then(p2)
    .catch(error=>console.log('algo ocurrio'))
    ////////

/////
// function conparametros(num){
//     console.log(`${num}es un parametro`)
// }
console.log[123,456,789]