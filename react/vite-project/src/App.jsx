import './App.css'
import Pepito from './components/usuario/Usuario'
import { Proveedor } from './components/proveedor/Proveedor';
import { useEffect } from 'react';

function App() {
  const [characters, setCharacters] = useState ([])
//userEffect va a ejecutar el codigo que se encuentra dentro ,tantas veces como se actualicen sus dependencias
//si no hay dependencias se ejecuta solo antes del primer renderizado.
  useEffect(()=>{
   fetch('https://rickandmortyapi.com/api/character') 
    .then((data) => data.json())
    .then((response) => setCharacters(response.results));
  }, []);

 return (
 <> 
  {characters ? characters.map((item, index) => <p>(item.name)</p>
  ) : (
    <> cargando... </>
  )}

  hola mundo
  <button> hola soy un boton</button>
  <Pepito />
  <Proveedor name={'Abi'}/>
 </>
 ); 
  
}

export default App
