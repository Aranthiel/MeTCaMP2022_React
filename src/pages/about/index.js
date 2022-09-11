import { useState } from "react";
import Breadcrumbs from "../../components/Breadcrumbs";
import NAM from "../../assets/NAM.png";
import "./styles.css";

function About(){
    const [crumbs, setCrumbs] = useState([ {title:'Home', ruta: "/", className:""}, {title:'Juego', ruta: "/game", className:""}, {title:'Info', ruta: "/about", className:"is-active"}]);

    return (
        <div className="container">
            <section className="section hero is-fullheight">
                <Breadcrumbs crumbs={ crumbs } />
                <div class="tile is-ancestor">
                    <div class="tile is-vertical is-8">
                    <div class="tile is-parent">
                        <article class="tile is-child notification ">
                            <p class="title">El Proyecto</p>
                            <p class="subtitle">MeTCaMP React 2022 dictado por <a href="https://mujeresentecnologia.org/">Mujeres en Tecnología</a></p>
                            <div class="content">
                                <p>Este proyecto refleja los conocimientos adquiridos durante el MeTCaMP Web 2022</p>
                                <p>El proyecto integra estilos del framework <a href="https://bulma.io/">Bulma</a> que provee componentes listos para usar y que son faciles de combinar para lograr un diseño web full responsive</p>
                                <p>Se implementa el ruteo para lograr una facil navegacion entre las diferentes pages del proyecto</p>
                                <p> El uso de Hooks predefinidos y customizados permite permite crear/acceder facilmente al estado y a los ciclos de vida de React </p>
                            </div>
                        </article>
                        </div>
                        <div class="tile">
                            <div class="tile is-parent is-vertical ">
                            <article class="tile is-child notification">
                            <p class="subtitle">Versión de</p>
                            <p class="title">Natalia Moroni</p>
                            <p class="subtitle">Full Stack Developper</p>
                            </article>
                            <article class="tile is-child notification">
                            <p class="title">Encontrame en Linkedin</p>
                            <p class="subtitle"><a href="https://www.linkedin.com/in/nataliamoroni/">www.linkedin.com/in/nataliamoroni/</a></p>
                            </article>
                            <article class="tile is-child notification">
                            <p class="title">Mirá mis Repositorios de GitHub</p>
                            <p class="subtitle"><a href="https://github.com/Aranthiel">www.github.com/aranthiel</a></p>
                            </article>
                        </div>
                        <div class="tile is-parent">
                            <article class="tile is-child">                            
                            <figure class="image is-4by4">
                                <img src={NAM}></img>
                            </figure>                            
                            </article>
                        </div>
                        </div>
                        
                    </div>
                    <div class="tile is-parent">
                        <article class="tile is-child notification is-primary">
                        <div class="content">
                            <p class="title">Info sobre MeT</p>
                            <p class="subtitle">@comunidadmet</p>

                            <div class="content">
                                <p>MeT es un organización que fomenta la participación de mujeres y diversidades de género en las diversas áreas de tecnología y potencia su desarrollo a través de la creación de comunidad y visibilización de su trabajo, buscando la transformación del ecosistema tecnológico. Facilitamos un espacio donde puedan confluir y desarrollarse diferentes iniciativas con objetivos afines y trabajamos en red con otros grupos y organizaciones, reforzando así la comunidad regional y global</p>
                                <p>Inspiran, acompañan e impulsan a las mujeres y diversidades en las distintas etapas de su interacción, con el ecosistema tecnológico.</p>                                
                                <p>Seguilas en <a href="https://www.instagram.com/comunidadmet/">  instagram </a> y enterate de las nuevas propuestas</p>
                            </div>
                        </div>
                        </article>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About;
