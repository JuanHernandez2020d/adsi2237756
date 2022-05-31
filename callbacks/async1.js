setTimeout(() => {
    console.log("programar")
},3000);

for (let i=1; i<=5;i++){
    setTimeout(() => {
        console.log("programar");
    },i*3000);
}

let vec1=[1,2,3,4,5,6,7,8,9]
let i=0
for (let i=1;i<=10;i++){
    setTimeout(() => {
        console.log(vec1[Math.round(Math.random()*4)])
    }, i*1000);
}