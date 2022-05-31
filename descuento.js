var cantidad,precio,desc,compra,pagar;

	precio = parseInt(prompt("Ingresar precio"));
	cantidad = parseInt(prompt("Ingresar cantidad"));

	compra = precio*cantidad;
	desc = compra*0.15;
	pagar = compra-desc;

	console.log("El desceunto es: "+desc);
	console.log("El total a pagar es: "+pagar);

	precio(40000);
	cantidad(2)