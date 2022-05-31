//un arreglo numerico,hacer un metodo para contar pares y sumar impares
function Arreglo(vec){
    this.vec=vec;
    this.cuenta_Par=function(){
        let cont=0;
        for(let i=0; i < this.vec.length; i++){
            if(this.vec[i]%2==0){
                cont++;//cont+=1 cont=cont+1
            }
        }
        return cont;
    }
    this.suma_impar=function(){
        let sum=0;
        for(let i=0; i <this.vec.length; i++){
            if(this.vec[i]%2!=0){
                sum+=this.vec[i];//cont+=1 cont=cont+1
            }
        }
    }
    return sum;
}
var vec=[123456789]
 var objet=new Arreglo();
console.log(Objecto.cuenta_Par)
console.log(Objecto.suma_impar)
//vwhiculo

function Vehiculo(marca,modelo,consumo,cilindraje){
    this.marca=marca;
    this.modelo=modelo;
    this.consumo=consumo;
    this.cilindraje=cilindraje;
    this.consumof=function(distancia,distancia_t,){
        var consumo=this.consumo
        var distancia1=distancia
        var distancia_total=distancia_t
        var cons =((distancia_total*consumo)/distancia1);
        return`su auto consumio ${cons} galones de combustible`;
    }

    this.tanqueo=function(valor){
        if(valor>this.consumo){
            return `el valor excede la capacidad del tanque`
        }else if(valor==this.consumo){
            return `su tanque esta lleno`
        }else {
            return `su tanque no esta lleno`
        }
    }
}
var f=new Vehiculo("Nissan","sentra",60,[1600])
console.log(f.consumof(100,600))
console.log(f.tanqueo(30))

//tercer ejercicio

function Libro(titulo, numerop, añoimprecion) {
  this.titulo = titulo;
  this.paginas= numerop;
  this.añoimprecion = añoimprecion;
  this.tiempoxlibro=function(){
   var fecha= new Date();
   var tiempo=fecha.getFullYear()-this.añoimprecion
  }

}
