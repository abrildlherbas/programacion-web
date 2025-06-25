import { useState, useEffect } from "react"; 

export function Rickymorty(){
const [characters, setCharacters] = useState ([])
//userEffect va a ejecutar el codigo que se encuentra dentro ,tantas veces como se actualicen sus dependencias
//si no hay dependencias se ejecuta solo antes del primer renderizado.

useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character') 
     .then((data) => data.json())
     .then((response) => setCharacters(response.results));
   }, []);
   
   (
    <> 
     {characters ? characters.map((item, index) => <p>(item.name)</p>
     ) : (
       <> cargando... </>
     )}
   
    
    </>
    ); 
       
  return <> </> ;
}