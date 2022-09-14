import "./styles.css";
import { Link } from "react-router-dom";


function Breadcrumbs(props){
    console.log({props});
   
    
    return (
        <div className="container">
            <nav className="breadcrumb is-large is-centered" aria-label="breadcrumbs">
                <ul>
                    { props.crumbs.map((opcion)=>
                    <li className={opcion.className}><Link to={opcion.ruta}>{opcion.title}</Link></li>
                    )}
                </ul>   
            </nav>
      </div>
    )   
}

export default Breadcrumbs;