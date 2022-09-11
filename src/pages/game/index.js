import { useState } from "react";
import Button from "../../components/button";
import QuestionCard from "../../components/QuestionCard";
import Result from "../../components/Result/"
import Breadcrumbs from "../../components/Breadcrumbs";
import useFetch from "../../hooks/useFetch";
import "./styles.css";


const API_URL = "https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game() {
    const { loading, data: questions } = useFetch(API_URL);
    const [selectedAnswers, setSelectedAnswers] = useState([]);
    const [result, setResult] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    function calcularResultado() {
        const respuestasCorrectas = selectedAnswers.filter((respuesta) => respuesta.valorOpcion === true)
        setResult(respuestasCorrectas.length)
        setMostrarResultado(true)
    }
    
    const [crumbs, setCrumbs] = useState([ {title:'Home', ruta: "/", className:""}, {title:'Juego', ruta: "/game", className:"is-active"}, {title:'Info', ruta: "/about", className:""}]);

    return (
        <div className="container">
            <section className="section">
                
                <Breadcrumbs crumbs={ crumbs } />
               
                {
                    loading &&
                    <div>Cargando...</div>
                }
                {
                    !loading && (
                        <div className="container">
                        <form className="is-flex">
                            {
                                questions.map((pregunta) => {
                                    return <QuestionCard
                                        key={pregunta.id}
                                        preguntaActual={pregunta}
                                        selectedAnswers={selectedAnswers}
                                        setSelectedAnswers={setSelectedAnswers}
                                        mostrarResultado={mostrarResultado}
                                    />
                                })
                            }
                        </form>
                        </div>
                    )
                }
                <div className="level">
                    <div className="level-left">
                        {
                            mostrarResultado &&
                            <Result valorResultado={result} />
                        }
                    </div>
                    <div className="level-right">
                        <Button
                            disabled={selectedAnswers.length !== questions.length || mostrarResultado}
                            onClick={() => calcularResultado()}
                            text="Validar" />

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Game;