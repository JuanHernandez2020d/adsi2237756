function a(){
    let x=0;
    return x;
}
console.log(a());

let i;
for(i=0;i<10;i++){
    console.log(i)
}
console.log(i);


function a(param){
    return param*param;
}


function externa(){
    let msj=`parte externa`;
    function interna(){
        return`soy de la parte interna ${msj}`
    }
    return interna;
}
const prueba=externa();
console.log(prueba());


const externa1=()=>{
    let msj=`soy la funcion externa`;
    let interna=()=>`soy de la parte interna ${msj}`;
    return interna;
}
const proof=externa1();
console.log(proof());