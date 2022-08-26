import Button from '../../components/button';
import {useNavigate} from "react-router-dom";

function Home(){
    
    const navigate = useNavigate();
    const clickJuego= ()=>{
        navigate("/juego");
    }
    const clickBio= ()=>{
        navigate("/bio");
    }


    return(
        <div> 
        <h1> Este es el home</h1>,
        <Button text="MeTCaMP Quiz" apretado={clickJuego}/>,        
        <Button text="Otro Boton" apretado={clickBio}/>
        </div>
    )
}
export default Home;