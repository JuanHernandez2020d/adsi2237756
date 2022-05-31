const[a,b,c]=[10,20,30];
const[x,y,...vector]=[1,2,3,4,5,6,7,8,9]
// console.log(vector);
// console.log(a);
const vec1=[1,2,3];
const vec2=[...vector,120,456]
console.log(vec2)
function prueba(){
    const a=()=>"valor a";
    const b=()=>"valor b";
    const c=()=>"valor c";
    return [a,b,c];
}

const [p,q,r]=prueba();
console.log(p())
console.log(q())
console.log(r())



function darObjeto(){
    //return[1,2]
    return [
        {
            nombre:'juan',
            documento:'12345',
            lenguajes:["php","java","js"],
            infoTotal:function(){
                return `${this.nombre} ${this.documento} ${this.lenguajes}`
            }
        },
        {
            nombre:'pedro',
            documento:'78945',
            ludicas:{
                nomLudicas:"musica",
                dias:['lunes','miercoles','viernes']
            }
        }

    ]
}
const [ob1,ob2]=darObjeto();
//console.log(darObjeto());
//console.log(ob1.infoTotal());
console.log(ob2.ludicas.dias);