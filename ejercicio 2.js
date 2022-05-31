function simulaclase(){
    let atributo="sin iniciar";
    return {
        setAtributo:(a)=>atributo=a,
        getAtributo:()=>atributo
    }
}
const objeto=simulaclase()

console.log(objeto.getAtributo())
objeto.setAtributo("luisillo")
console.log(objeto.getAtributo())

//que tipos de saludo existen al inicio del saludo: hola buenos dias, como esta,
//array que contenga diferentes tipos de saludos
//funcion que genere un saludo//salude 1, salude 2



function saludoram(){
    const saludos=["hola","buenos dias","q hubo","como esta","que hizo","como va"];
    cont=1;
    return {
        numerorandom:(nombre)=>saludos[Math.round(Math.random()*5)]+" "+nombre+ " usted es el numero: " + cont++
    }
}
const saludox=saludoram()
console.log(saludox.numerorandom("juan"))
console.log(saludox.numerorandom("luis"))
console.log(saludox.numerorandom("johan"))
console.log(saludox.numerorandom("maria"))
console.log(saludox.numerorandom("kathe"))
console.log(saludox.numerorandom("alejandro"))




//en la variable externa va a haber un array
//suma promedio mayor y menor
//en la primera asignacion entregar el array con numeros


function numeros(array){
    const x=array;
    return {
        promedio:()=>(x[0]+x[1]+x[2]+x[3]+x[4]+x[5])/(x.length),
        suma:()=>(x[0]+x[1]+x[2]+x[3]+x[4]+x[5]),
        mayor:()=>Math.max(...x),
        menor:()=>Math.min(...x)
    }
}

let array1 = numeros([2,4,89,6,2,0]);
console.log(array1.promedio())
console.log(array1.suma())
console.log(array1.mayor())
console.log(array1.menor())


//pasar a una funcion un arreglo y un numero, buscar el numero en el arreglo y si esta mostrar en que posicion y esta y que numero es.

function numerosearch(array,num){
    const x = array;
    const y = num;
    cont=0
    return {
        buscar:(x,y)=>{for(i=0;i<=x.length;i++){if(x[i]===y){cont++;console.log(`Posicion ${i}`)}}return `El numero ${y} esta ${cont} veces`}
    }
}
let hola = numerosearch();
console.log(hola.buscar([2,0,2,8,5,0],2))

//entregar a la funcion un objeto literal y mostrar cuantos elementos clave valor tiene ese objeto y que tipos son los elementos 

function contar1(obj){
    var x = obj;
    cont=0
    return {
        mostrar:(x)=>{for (const vari in obj1) {cont++;console.log(`El ${vari}: ${obj1[vari]} es ${typeof(obj1[vari])}`)}console.log(`Existen ${cont} elementos en el objeto`)}
    };
}
var obj1={nombre: "luis",apellido: "pulido",edad:18}
const hola1 = contar1();
console.log(hola1.mostrar(obj1))

//prueba

var obj1={nombre: "luis",apellido: "pulido",edad:18}
var cont=0
for (const vari in obj1) {
    cont++
  console.log(`El ${vari}: ${obj1[vari]} es ${typeof(obj1[vari])}` );
}
console.log(`Existen ${cont} elementos en el objeto`)






//construir 3 problemas de programacion que se puedan resolver con clausuras