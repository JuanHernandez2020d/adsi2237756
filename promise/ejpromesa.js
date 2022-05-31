//sopa
function aguahervida() {
    return new Promise((resolve,reject,)=>{
    setTimeout(() => {
        console.log(`proceso de hervir agua`)
            resolve();
    }, 3000);
    })
}

function agregaringredientes() {
    console.log(`ingredientes listos`)

}

function picarcarne() {
    console.log(`lista `)
}

function pelapapa() {
    console.log(`lista papa`)
}
function lavar() {
    console.log(`listo`)
}

aguahervida()
.then(agregaringredientes)
pelapapa()
lavar()
picarcarne()




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function llamada(remitente){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`${remitente}:  bla bla bla 
            jajajajajajajajaja`)
            resolve();
        }, 2000);
    })
}
function conversacion(receptor){
    console.log(`${receptor}: bla bla bla bla
    y no se que y si se mas`)
}

function aviso(sonido) {
setTimeout(() => {
    console.log(`${sonido} nueva llamada entrante`)
}, 3000);
}


function reanudar(alerta){
    setTimeout(() => {
        console.log(`${alerta}  retomando llamada anterior,
     por favor habilitar la llamada original`)
    }, 5000);
}

llamada("j")
.then(aviso`${aviso} new call:  `)
conversacion("D")

reanudar("turuuu");

///////////////API/////////////////////////////////////////////////////API//////////////////////////////////////////////////////////////////////////////////////API

function INICIO() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            console.log()
        }, 2000);
    })
}