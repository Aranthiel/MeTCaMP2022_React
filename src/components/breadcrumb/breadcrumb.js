// se crea el componente Breadcrumb que se utiliza en la page de prueba
// recibe una direccion "/prueba"
// dberia recorrer la lista y colocar la className "is-active" al elemento li padre de un elemento a cuyo href coincida con el valor pasado por props
//no se hacerlo


import {useEffect, useState} from "react";

function Breadcrumb({direccion}){
    const [isActive, setIsActive]=useState(true)
    return(
        <div className="container">
            <section className="section"> 
                <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                <ul>
                    <li className={isActive ? "is-active":""}><a href="/">Inicio</a></li>
                    {/* El operador ternario funciona para asignar la className "is-active" pero no hay ninguna condicion que distinga en que etiqueta debe colocarlo... pensar mas sobre esto */ }
                    <li className="is-active"><a href="/juego">Juego</a></li>
                    <li><a href="/bio">Contacto</a></li>
                </ul>
                </nav>
            </section>
        </div>    
    )
}
export default Breadcrumb;