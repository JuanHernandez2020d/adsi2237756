//callback= funcion que se usa como parametro de otra funcion 

// function principal(callback) {
//     console.log(callback());
// }

// function parametro() {
//     return `soy externa a la principal`
// }

// principal(parametro);

// function principal(num1,num2,callback) {
//     let r=num1+num2;
//     callback();
// }

// function impresora(msj) {
//     console.log (`imprimiendo ${msj}`);
//     return `imprimiendo ${msj}`;
// }

// principal(123,567,impresora);



function principal(l1,l2,callback) {
    this.l1=l1;
    this.l2=l2;
    callback();
}

function impresora(msj) {
    console.log (`imprimiendo ${msj}`);
    return `imprimiendo ${msj}`;
}

principal(123,567,impresora);


/////////////////////////////////////////
function j(vec,callback1,callback2) {
    let tam=Math.round(Math.random()*20);
    for (let i = 0; i < tam; i++) {
        vec.push(Math.round(Math.random()*100));
        
    }
    callback1(vec);
    console.log(callback2(vec));
}

function mostracvec(vec) {
    console.log(vec);
}
function sumarvec(vec) {
    let suma=0;
    for (let i = 0; i < vec.length; i++){
        suma+vec [i];
    }
    return suma;
}

let vector=[];
j(vector, mostracvec,sumarvec);