import { Link } from "react-router-dom";


function Breadcrumbs(props){
    console.log({props});
   
    
    return (
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
                { props.crumbs.map((opcion)=>
                <li className={opcion.className}><Link to={opcion.ruta}>{opcion.title}</Link></li>
                )}
            </ul>   
      </nav>
    )   
}

export default Breadcrumbs;