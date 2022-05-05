var a=parseInt(prompt("ingrese un numero(a)"))
var b=parseInt(prompt("ingrese un numero(b)"))
var c=parseInt(prompt("ingrese un numero(c)"))

var dis=Math.sqrt((Math.pow(b,2))-(4*a*c))
var x1=((-1*b)+dis)/(2*a)
console.log(x1)
var x2=((-1*b)-dis)/(2*a)
console.log(x2)