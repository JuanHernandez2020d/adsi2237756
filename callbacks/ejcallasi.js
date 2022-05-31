// function persona(nombre,callback) {
//     setTimeout(() => {
//         console.log(`hola ${nombre}, mucho gusto`)
//         callback(nombre);
//     }, 2000);
// }

// function persona1(nombre,callback) {
//     setTimeout(() => {
//         console.log(` ${nombre} en que te puedo  ayudar `)

//     },3000)
// }

// persona('carlos',persona1)



function diccionario(palbras,callback){
    setTimeout(() => {
        console.log(`${palbras}la palabra significa:`)

    },1000);
}

function significado(traduccion,palabras){
    setTimeout(() => {
        
    }, timeout);
}

diccionario["glass","car","carrot","dream"]


let palabras =['dog','cat','pencil'];
let traducciones = ['perro', 'gato', 'lapiz']
let sinonimo =[{s1:"canino", s2:"chucho"},{s1:"felino",s2:"minino",s3:"michi"},{s1:"pluma",s2:"boligrafo"}];

function diccionario(callback, callback1, arreglop, arregloS, arreglot){

let palabra = Math.round(Math.random()*arreglop.length)
console.log("La palabra seleccionada es: " , arreglop[palabra])
setTimeout(() => {  
console.log("La palabra traducida es: " , callback(palabra, arreglot));
callback1(palabra, arregloS)
}, 2000);
}

function traduccion(palabra, traduccion){

let traducido=traduccion[palabra]
return traducido;


}

function sinonimos(palabra, arreglo){
setTimeout(() => {
    console.log("Los sinonimos de su palabra son: " , arreglo[palabra])
}, 3000);

}




diccionario(traduccion, sinonimos, palabras, sinonimo, traducciones)

