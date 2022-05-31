// const f=async()=>new Promise((resolve, reject)=>{

// })

function a() {
    return new Promise ((resolve, reject)=>{
        console.log('desde la promesa')
        resolve();
    })
}

function b() {
    console.log('soy b')
}

function c() {
    console.log('soy c')
}

function d() {
    console.log('soy d')
}

async function e(){
    a()
    await b()
    await c()
    await d()
}

e()

// a()
// .then(b)
// .then(c)
// .then(d)


///////////////////////////////////////////////////////////////////////time
function herviragua() {
    return new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log(`agua lista`);
        resolve();
    }, 3000);
    })
}


async function agregaringredientes() {
    console.log(`ingredientes listos`)
    await herviragua()

}

function picarcarne() {
    console.log(`carne lista `)
}

function pelapapa() {
    console.log(`lista papa`)
}
function salar() {
    console.log(`sal listo`)
}
herviragua()
agregaringredientes()
pelapapa()
picarcarne()
salar()

/////////////////////////////desviacion media//////////////////////////////////////////////////////////////+

function desviacion(num,num1) {
    var num =  [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`${num}`)
            resolve(num1);
        }, 3000);
    })
}
function media(num,num1) {
     num1=2
    console.log(num/num1)

}

desviacion()
media()