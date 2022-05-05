let x=parseInt(prompt("Ingrese un numero"))
let s=0
for (let i = 0; i < x; i++){
    if(x%i==0){
        //console.log(i+" es divisor de "+x)
        s=s+i

    }
}
if(s==x){
    console.log("Su numero es perfecto")
}
else{console.log("Su numero no es perfecto")}