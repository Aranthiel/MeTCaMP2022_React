import {useNavigate} from 'react-router-dom';
import Button from '../../components/button';
import Breadcrumb from "../../components/breadcrumb/breadcrumb";

function Prueba(){
    const navigate = useNavigate();

    const clickHome= ()=>{
        navigate("/");  
    }
    return(
        <div>
            <Breadcrumb direccion="/test" />
            <h1> Esta es la página de prueba</h1>
            <Button text="Inicio" apretado={clickHome}/>
            <Button text="Inicio" apretado={clickHome}/>
        </div>
    )   
}

export default Prueba;

