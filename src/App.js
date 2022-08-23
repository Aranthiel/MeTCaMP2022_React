
import './App.css';
// es necesario importar cada componente para poder ultilizarlo
//las etiquetas de React van con mayusculas y se autocierran ej: <Button/>
import Button from './components/button/index';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="texto del boton" apretado={()=> alert('Me hicieron click')}/> 
        <Button text="otro boton" apretado={()=> alert('a mi tambien me hiceron click')}/> 
      </header>
    </div>
  );
}

export default App;
