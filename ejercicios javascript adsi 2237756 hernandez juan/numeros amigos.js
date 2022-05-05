let n1= parseInt(prompt("introdusca un numero"))
let n2= parseInt(prompt("introdusca otro numero"))
let suma1=0
let suma2=0  
        for(i = 1;i < n1;i++){                                   
             if(n1%i==0){
                suma1=suma1+i;
             }
        }
        for(i = 1;i < n2;i++){                                                
            if(n2%i==0){
               suma2=suma2+i;
            }
        }

        if(suma1==n2 && suma2==n1){
            
        }