function fecha(a){
    var dia = new Date(a);
    var hoy = new Date();
    console.log(dia);
    console.log(hoy);
    console.log()
    var x = hoy.toISOString().split ("T")[0]

    if(dia<x){
        console.log("la fecha que coloco es anterior")
    }else if(dia>x){
        console.log("la fecha que coloco es posterior")
    }else{
        console.log("la fecha que coloco es actual")
    }
}
fecha("2022-04-29")