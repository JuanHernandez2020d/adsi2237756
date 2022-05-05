let minutos=parseInt(prompt("ingrese el tiempo de duracion de su llamada"));
let banderazo="200";
let adicional="50";
let costo_llamada= 0;
console.log(minutos + "duracion de la llamada"); 
if (minutos<=3) {
    costo_llamada= minutos*banderazo
    console.log("el costo de esta llamada es"+costo_llamada);
} else {
    costo_llamada=minutos*adicional;
    console.log("el costo de esta llamada es" +costo_llamada);
}