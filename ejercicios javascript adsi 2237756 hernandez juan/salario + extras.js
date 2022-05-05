let horas_trabajadas=parseInt(prompt("Ingrese las horas trabajadas"));
let precio_horas_n="2600";
let precio_horas_e="5000";
let salario=0;
let horas_extras=0;
console.log("el número de horas trabajadas es " +salario);
if (horas_trabajadas<=40){
salario=horas_trabajadas*precio_horas_n
console.log("Su salario semanal es de "+salario);
} else {
horas_e=horas_trabajadas-40;
console.log("el número de horas extras es " +horas_e);
salario=40*precio_horas_n+horas_extras*precio_horas_e;
console.log("Su salario semanal es de " +salario);
}