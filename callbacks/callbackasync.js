function saludar(nombre,callback,callback1) {
    setTimeout(() => {
        console.log(`hola ${nombre}`);
        callback(nombre,callback1);
        // callback1();
    }, 1000);
    
}
function hablar(nombre, callback) {
    setTimeout(() => {
        console.log(`${nombre}ja ja ja `)
        callback();
    },2000);
}

function despedirse() {
    setTimeout(() => {
        console.log(`hasta luego`)
    }, 3000);
}

saludar("carlos",hablar,despedirse)
hablar()
despedirse()
saludar()