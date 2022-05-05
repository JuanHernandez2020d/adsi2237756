let año=parseInt(prompt("Ingrese el año para calcular la fecha de pascua"));
A=año%19
B=año%4
C=año%7
D=(19*A+24)%30
E=(2*B+4*C+6*D+5)%7
N=(22+D+E)
if(N>31){
    FP=N-31
    alert("el día de pascua corresponde al "+FP+ " de Abril")
}else{
    alert("El día de pascua corresponde al "+N+ " Marzo")
}