//paso 3 importar todos los componentes que vayan a ser usados en el doigo

import Button from '../../components/button';
import {useNavigate} from "react-router-dom"; // guarda el historial de navegacion entre paginas -  es parte del paquete react-router-dom
import background from "../../assets/background.png";

//paso 1 crear la function y en el return va el html
function Home(){
    
    const navigate = useNavigate();
    // se declara como constante la funcion de callback que se ejecuta al hacer click en el boton y luego se la declara en el HTML 
    const clickJuego= ()=>{
        navigate("/juego");
    }
    
    return(
        <section className="hero is-medium is-fullheight">
            <div className="hero-body" style={{ backgroundImage: `url(${background})`, backgroundSize:"cover" }} > 
                <div className="container has-text-centered ">
                    <Button text="MeTCaMP Quiz" apretado={clickJuego}/>
                </div>
            </div>
        </section>
    )
}

//paso 2 exportar la funcion, sino no se puede usaren ningun lado
export default Home;