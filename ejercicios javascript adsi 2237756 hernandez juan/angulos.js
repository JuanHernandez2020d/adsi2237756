let g=parseInt(prompt("ingrese grados"));
let vueltas=0;
let cuad
if(g>360){
vueltas=parseInt(g/360);
cuad=g%360;
//console.log("vuelta "+vueltas);
}else{
    cuad=g;
}
if (cuad<=90) {
    console.log("Cuadrante 1 "+ "Grados "+cuad+" vuelta "+vueltas);
}
else if (cuad<=180) {
    console.log("Cuadrante 2 "+ "Grados "+cuad+" vuelta "+vueltas);
}
else if (cuad<=270) {
    console.log("Cuadrante 3 "+ "Grados "+cuad+" vuelta "+vueltas);
}
else if (cuad<=360) {
    console.log("Cuadrante 4 "+ "Grados "+cuad+" vuelta "+vueltas);
}

