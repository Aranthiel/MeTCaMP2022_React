import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";

function About(){
    const [crumbs, setCrumbs] = useState([ {title:'Home', ruta: "/", className:""}, {title:'Juego', ruta: "/game", className:""}, {title:'Info', ruta: "/about", className:"is-active"}]);

    return (
        <div className="container">
            <section className="section">
                <Breadcrumbs crumbs={ crumbs } />
                <h1> About page</h1>
            </section>
        </div>
    )
}

export default About;
