//metodos de arreglos
//lenght -> longitud del arreglo
const miArreglo = [1, 2, "pepito", true];
const longitud = miArreglo.length;
console.log(longitud);

//push(valor) ->agregan un elemento final
//equivalente al append de python
miArreglo.push("abi");
console.log("cadena", miArreglo);

//pop()elimina el ultimo elemento de arreglo
//si queremos lo podemos guardar en una variable
const ultimo = miArreglo.pop();
console.log("ultimo", ultimo);

//shift()elimina el primer elemento de un arreglo
//si queremos lo podemos guardar en una variabl
const primero = miArreglo.shift();
console.log(miArreglo);

//unshift(valor)agrega un elemento al principio del arreglo
miArreglo.unshift("muak");
console.log(miArreglo);

//forEach
//SOLO RECORRE , no guarda los valores en ningun lado
miArreglo.forEach((item, index, arregloEntero) => {
  console.log(
    "elemento",
    item,
    "index",
    index,
    "arreglo Completo",
    arregloEntero
  );
});

// map recorre el arreglo, lo modifica con una funcion 
//y nos devuelve uno nuevo
const nuevoArreglo = arreglo.map((item,index) => {
 const num = 2;
  return (item += num);

})

console.log("Nuevo arreglo", nuevoArreglo);

//filter crea un nuevo array a partir de los elementos que 
//cumplan la condicion
const arregloNum = [2,4,5,6]
const pares = arregloNum.filter((item) => %2 === 0);

console.log(pares);