var peso_pacientes={

    nombre:"carlos",
    apellido:"Parra",
    peso:75,
    altura:1.72,
    
    masamuscular:function(){
    
    
    var alturaalcuadrado=this.altura*this.altura
    var imc= this.peso/alturaalcuadrado
    
    
    
     if(imc<18.5){
        return `el imc del paciente ${this.nombre} ${this.apellido} es  de  ${imc} kg por ende esta por debajo del peso ideal`
    }
    else
    {
        if(imc <24.9 ){
            return `el imc del paciente ${this.nombre} ${this.apellido}   es  de  ${imc} kg por ende esta saludable`
        }else{
            if(imc <29.9){
                return `el imc del paciente ${this.nombre} ${this.apellido}   es  de  ${imc} kg por ende esta con sobrepeso`
            }else{
                if(imc <39.9){
                    return `el imc del paciente ${this.nombre} ${this.apellido}   es  de  ${imc} kg por ende se encuentra en un estado de obesidad`
                }
            }
        }
      
    }
    
    } 
    }
    
    console.log(peso_pacientes.masamuscular())
    


