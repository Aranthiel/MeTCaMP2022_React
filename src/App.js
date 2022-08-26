
import './App.css';
// es necesario importar cada componente para poder ultilizarlo
//las etiquetas de React van con mayusculas y se autocierran ej: <Button/>

import{BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/home';
import Game from './pages/game';
import Bio from './pages/bio';

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/juego" element={<Game/>}/>
        <Route path="/bio" element={<Bio/>}/>
      </Routes>
    </BrowserRouter>
  );

}

export default App;
