let h=parseInt(prompt("Ingrese horas"));
let m=parseInt(prompt("Ingrese minutos"));
let s=parseInt(prompt("Ingrese segundos"));
console.log("La hora antes de afectarla ")
console.log("horas "+h+" minutos "+m+" segundos "+s);
s=s+1;// s+=1  s++   ++s
if (s>59) {
    s=0;
    m++; //m=m+1
    if (m>59) {
        m=0;
        h++;
        if(h>23){
            h=0;
        }        
    }
} 
console.log("La hora despúes de afectarla ")
console.log("horas "+h+" minutos "+m+" segundos "+s);