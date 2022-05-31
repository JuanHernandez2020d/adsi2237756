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
var objet=new Arreglo(v);
console.log(objeto.cuenta_Par)
console.log(objeto.suma_impar)
//vwhiculo

function Vehiculo(marca,modelo,consumo,cilindraje){
    this.marca=marca;
    this.modelo=modelo;
    this.consumo=consumo;
    this.cilindraje=cilindraje;
    this.consumo=function(){
        var distancia=0
        var distancia_total=0
        var capacidad_t=0
        var cons=(distancia_total*capacidad_t/distancia)
    }
}
var consumo=[50]
var distancia=(distancia_total=[600],capacidad_t[50],distancia[100]);
var f=new Vehiculo("Nissan","sentra","this.consumo",[1600])
console.log(objeto.consumo)
//tercer ejercicio

function Libro(titulo, editorial, añoimprecion, paginas, vidautil) {
  this.titulo = titulo;
  this.editorial = editorial;
  this.paginas= paginas;
  this.añoimprecion = añoimprecion;
  this.vidautil = vidautil;
  this.tiempoxlibro=function(pag){
    pag=0;
    tiempolect=0;
  }

}
