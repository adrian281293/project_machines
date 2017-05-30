var mecanicos = [];
var maquinas = [];
mecanicos.push("Juan");
mecanicos.push("Manuel");
mecanicos.push("Marcos");

maquinas.push(303);
maquinas.push(208);
maquinas.push(190);
function esVacia(arreglo)
/*
 * Tomo un arreglo como parametro de entrada 
 * Devuelve si el arreglo esta vacio (true) o no (false) 
 * if (arreglo.lenght==0) 
 * return true; 
 * else 
 * return false;
 */
{
	return (arreglo.lenght == 0);

}


function asignar ()
{
	var nroMaquinas=maquinas.shift();
	var nomMecanicos=mecanicos.pop();
	document.write(nroMaquinas+"-"+nomMecanicos);
}

while (!esVacia(maquinas) && !esVacia(mecanicos))
{
asignar();
document.write("<br>");
}