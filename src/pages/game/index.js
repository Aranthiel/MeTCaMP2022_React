import {useNavigate} from 'react-router-dom';
import Button from '../../components/button';

function Game(){
    const navigate = useNavigate();

    const clickHome= ()=>{
        navigate("/");  
    }
    return(
        <div>
            <h1> Esta es la página del juego</h1>
            <Button text="Inicio" apretado={clickHome}/>

        </div>
        
    )
}
export default Game;

