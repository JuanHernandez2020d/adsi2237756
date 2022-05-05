var vec=[]; //array o arreglo lleva llaves
var ob1={
    nombre: "Maria Gomez",              //objeto literal
    documento:123456,                    //objetos de javascript lleva corchetes
    programa:"adsi",
    informacion:function(){
        return `${this.nombre} estudia ${this.programa}
        y su identificacion es ${this.documento}`
    }
};
ob.ficha=2237756
console.log(ob);


console.log(typeof(ob));
console.log(ob.informacion)

var ob2={
    marca:"chevrolet",
    modelo:"onix",
    cilindraje:1400,
}

// var ob= new Object();
// ob1

// var ob={
//     numeros:[123456789],
//     mayor:function(){
//        var menor=this.numeros
//        var mayor=this.numeros
//         var media=this.numeros
//         for(i=0;i<=menor.length;i++){
//             if(menor[i]<=this.numeros){
//                 this.numeros++
//             }

//         }
//         for(i=0;i<=media.length;i++){
//             if(media[i]==this.numeros){
//                 this.numeros++
//             }

//         }
//         for(i=0;i<=mayor.length;i++){
//             if(mayor[i]==this.numeros){
//                 this.numeros++
//             }

//         }
//     }
    
// }
// console.log(ob)
// console.log(`el numero menor es ${menor}, el numero mayor es${mayor} y la media es ${media}`)
// numeros[123456789]



var fracciones={
    n1:8,
    d1:3,
    n2:6,
    d2:7,
    n3:9,
    d3:2,
    n4:4,
    d4:5,
    suma:function(){
        var suma= this.n1*this.d2+this.n2*this.d1+this.n3*this.d4+this.n4*this.d3
    }
}

