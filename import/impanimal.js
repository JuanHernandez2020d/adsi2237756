const prueba=require('./animal.json')
// console.log(prueba)
console.log(typeof(prueba))
for (const key in prueba[0]) {
  console.log(key)
    
}

const pruebaString=JSON.stringify(prueba)
console.log(pruebaString.includes('name'))