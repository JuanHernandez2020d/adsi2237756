var cadena=texto=>{
    var cadena = texto
    var mayus =  "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ"
    var minus =  "abcdefghijklmnñopqrstuvwxyz"
    var especial = "*#.$%&!-/.-,}{´+'"
    var numeros = "0123456789"
    var contar = 0
    var contarm = 0
    var contare = 0
    var contarn = 0
    for(i=0;i<mayus.length;i++){
        for(x=0;x<=cadena.length;x++){
            if(cadena[x]==mayus[i]){
            contar++
            }
        }
    }

    for(i=0;i<minus.length;i++){
        for(x=0;x<=cadena.length;x++){
                if(cadena[x]==minus[i]){
                contarm++
            }
        }
    }

    for(i=0;i<especial.length;i++){
        for(x=0;x<=cadena.length;x++){
                if(cadena[x]==especial[i]){
                contare++
            }
        }
    }

    for(i=0;i<numeros.length;i++){
        for(x=0;x<=cadena.length;x++){
                if(cadena[x]==numeros[i]){
                contarn++
            }
        }
    }


    console.log(`La cadena de texto tiene ${contar} mayusculas
    La cadena de texto tiene ${contarm} minusculas
    La cadena de texto tiene ${contare} caracteres especiales
    La cadena de texto tiene ${contarn} numeros`)
}

cadena('Hola+23')


// Ejercicio 2
var cont=0
var repeticion=(arreglo, num)=>{
    // var arr =  [7, 8, 4, 7, 6, 1, 2, 2, 1, 3, 5 ];
    for(i=0;i<=arreglo.length;i++){
        if(arreglo[i]===num){
            cont++
        }
    }
    console.log(`El numero ${num} esta ${cont} veces`)
}

repeticion([7, 8, 4, 7, 6, 1, 2, 2, 1, 3, 5], 2)
//prueba


// Ejercicio 3

var multiplicar=(arr, num)=>{
    var resultados = [];
    for (i = 0; i< arr.length; i++) {
        var mult = arr[i]*num
        resultados.push(mult)
    }
    console.log(resultados)
}

multiplicar([2,4,5,8,7,9,6], 2)

// ejercicio 4

var promedio=(arr, arr1)=>{
    var sum = 0
    var sumn = 0
    for (i = 0; i< arr.length; i++) {
        sum += arr[i];
        var prom = sum/arr.length
    }
    for (i = 0; i< arr1.length; i++) {
        sumn += arr1[i];
        var promn = sumn/arr1.length
    }
    if(prom > promn){
        console.log(`El arreglo con mayor promedio es ${arr} con un promedio de ${prom}`)
    }else{
        console.log(`El arreglo con mayor promedio es ${arr1} con un promedio de ${promn}`)
    }
}

promedio([2,4,5], [2,4,7,8,5])






function dev(arr){

    let mean = arr.reduce((acc, curr)=>{
        return acc + curr
    }, 0) / arr.length;

    arr = arr.map((k)=>{
      return (k - mean) ** 2
    })

    let sum = arr.reduce((acc, curr)=> acc + curr, 0);

    let variance = sum / arr.length

    return Math.sqrt(sum / arr.length)
}


 console.log(dev([1, 2, 3, 4, 5]))
