let ini= parseInt(prompt("ingrese el inicio"));
let fin= parseInt(prompt("ingrese el fin"));
let cant=parseInt(prompt("ingrese incremento o decremento"));
if(ini<fin){
    for (let i=ini; i <= fin; i=i+cant) {
        console.log(i);
    }
}else if(ini>fin){
    for (let i=ini; i>=fin; i=i-cant) {
        console.log(i);
}
}else{

}