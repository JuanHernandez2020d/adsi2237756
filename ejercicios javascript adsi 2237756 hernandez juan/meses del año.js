let num = parseInt(prompt("ingrese numero"));
let dias = 0;
console.log("numero ingresado" + num);
if (num >= 1 && num <= 31) {
  console.log(num + "de Enero");
} else if (num > 31 && num <= 59) {
  dias = num - 31;
  console.log(dias + "de Febrero");
} else if (num > 59 && num <= 90) {
  dias = num - 59;
  console.log(dias + "de Marzo");
} else if (num > 90 && num <= 120) {
  dias = num - 90;
  console.log(dias + "de Abril");
} else if (num > 120 && num <= 151) {
  dias = num - 121;
  console.log(dias + "de Mayo");
} else if (num > 151 && num <= 181) {
  dias = num - 151;
  console.log(dias + "de Junio");
} else if (num > 181 && num <= 212) {
  dias = num - 181;
  console.log(dias + "de Julio");
} else if (num > 212 && num <= 243) {
  dias = num - 212;
  console.log(dias + "de Agosto");
} else if (num > 243 && num <= 273) {
  dias = num - 243;
  console.log(dias + "de Septiembre");
} else if (num > 273 && num <= 304) {
  dias = num - 273;
  console.log(dias + "de Octubre");
} else if (num > 304 && num <= 334) {
  dias = num - 304;
  console.log(dias + "de Noviembre");
} else if (num > 334 && num <= 365) {
  dias = num - 334;
  console.log(dias + "de Diciembre");
} else if (num < 1) {
  console.log("el numero indicado pertenece a el año anterior");
} else {
  console.log("el numero indicado pertence a el siguiente año");
}