import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Game from './pages/game';
import About from './pages/about';
import 'bulma/css/bulma.min.css';
import packageInfo from "../package.json";

function App() {
  return (
    <BrowserRouter basename={getBasename}>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/game' element={<Game/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function getBasename(){
  let array = packageInfo.homepage.split("/");
  return array[array.length-1];
}

export default App;
