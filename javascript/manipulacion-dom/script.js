//Manipulacion del dom
//Nos permite interactuar con el documento,modificar su estructura 
//estilo y contenido

//Seleccionar elementos del DOM     

//por ID 
//obteniendo por ID la etiqueta titulo
//nos permite acceder a todas sus propiedades
let titulo = document.getElementById("titulo");
console.log(titulo);
console.log(titulo.ariaValueMax, titulo.textContent, titulo.innerText);

titulo.textContent = "este es el nuevo titulo";

//eventos(addEventListener, onclick , onchange)
let boton = document.getElementById('boton')

boton.addEventListener('click',function(){
  alert('Este boton ha sido clickeado')
 });