class ahorro{
    constructor(ingresos,egresos,estado){
        this._ingresos=ingresos;
        this._egresos=egresos;
        this._estado=estado;
    }
    ingresar(transaccion){
        this._transaccion=transaccion;
        var add=(this._transaccion+this._estado);
        return`su nuevo estado es =${add}`
    }
    retirar(retiro){
        this._retiro=retiro;
        var rest=(this._retiro-this._estado);
        return `su nuevo estado es =${rest}`
    }
}
var f=new ahorro(45566,1000,50000000);
console.log(f.ingresar(8000000))