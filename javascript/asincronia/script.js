const button = document.getElementById("boton");
let contador = 0  


//setTimeout
//recibe por parametros dos valores
//recibe una funcion y recibe el tiempo que va a tardar en ejecutarse

button.addEventListener("click", () => {
setTimeout(function(){
    alert("hola fui clickeado hace 2 segundos")
},2000); milisegundos
});

//setInterval 
//ejecutar el codigo cada "n" cantidad de tiempo

//setInterval(() => {
//   contador ++
  // console.log(contador);
//},1000);

//Asincronia 
//Peticion a una API
//Metodos: get,post,put,delete

//fetch
fetch('https://rickandmortyapi.com/api/character')
 .then((data) => data.json())
 .then((response) => console.log("response",response));

//async await
//funcion flecha asincrona
const asyncFuction = async () => {

 try{
   const response = await fetch ("https://rickandmortyapi.com/api/character")
   const data = await response.json();
   console.log("data", data);
 } catch (error) {
    console.log("error",error);
 }

};

asyncFuction(); //para ejecutar una funcion debemos llamarla y poner ; y () al final

//funcion regular asincrona 
 async function  asyncFuc() {};

function sumar() {
     var miVariable = 0; 
     console.log(miVariable,miVariable2);
     let miVariable2 = "fede"
}

console.log(miVariable,miVariable2);

sumar();