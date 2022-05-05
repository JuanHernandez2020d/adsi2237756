let num1=parseInt(prompt("digite un numero"));
let cont=0
for (let i = 1; i <= num1; i++) {
if (num1%i==0) {
  cont++ 
}
}
if (cont==2) {
console.log("el numero es primo")  
} else {
    console.log("el no numero es primo")    
}