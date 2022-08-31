
import QuestionCard from '../../components/QuestionCard';
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";


const API_URL="https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game(){

    const [loading, setLoading ] =useState(true);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(
                data => {
                    console.log(data)
                    setQuestions(data)
                }
            )
            .catch(error => console.log(error))
            .finally(()=>setLoading(false));
        }, [])

    

    return(
        <div className="container">
            <section className="section"> 
                <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li className="is-active"><a href="/juego">Juego</a></li>
                    <li><a href="/bio">Contacto</a></li>
                </ul>
                </nav>
                { /* <div>{loading ? "Cargando": "Preguntas listas!"}</div>   esto es un inline if */}
                {
                    loading &&
                        <div> Cargando...</div>
                }
                {
                    !loading && (
                        <div>
                            <span>Preguntas Cargadas!</span>
                            <form>
                                {
                                    questions.map((pregunta) => {
                                        return <QuestionCard key={pregunta.id} preguntaActual={pregunta} />
                                    })

                                }
                                </form>
                        </div>
                    )
                }
                <h1>El juego</h1>
            </section>
        </div>    
    )
}
export default Game;
