class libro{
constructor(titulo,editorial){
    console.log("se activo el contructor");
    this._titulo=titulo;
    this._editorial=editorial
}
get titulo() {
    return this._titulo;
}
set titulo(titulo){
    this._titulo=titulo;
}

setTitulo(titulo){
    this._titulo=titulo;
}
getTitulo(titulo){
    this._titulo=titulo;
}
}

var lib1=new libro();
var lib2=new libro("la voragine","planeta");
     console.log(lib1);
     console.log(lib2);
     console.log(lib2.titulo);
     lib2.setTitulo("nuevo titulo");
     lib2.getTitulo(lib2.titulo);
    lib2.titulo="la voragine recargada";
    // console.log(typeof (lib1));

    //heriencia

    class Usuario{
        constructor(id,nombre,edad){
            this._id=id;
            this._nombre=nombre;
            this._edad=edad;
        }
    }

    class estudiante extends Usuario{
        constructor(id,nombre,edad,ficha,programa){
            super(id,nombre,edad);
            this._ficha=ficha;
            this._programa=programa;
        }
    }
var e1=new estudiante(123,"carlos",17,1861042,"dem");

class moto{
    constructor(placa,estudiante){
        this._placa=placa;
        this._estudiante=estudiante;
    }
}

var m1=new moto("se-123",e1);
console.log(m1);


//relacion tiene un
class grupo{
    constructor(codgrupo,estudiantes){
        this._codgrupo=codgrupo;
        this._estudiantes=estudiantes;
    }
    incorporarestudiantes(estudiante){
        this._estudiantes.push(estudiante);
    }
}
var g1=[]

var grupo1= new grupo(909,g1);
console.log(grupo1)