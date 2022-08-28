
import QuestionCard from '../../components/QuestionCard';
import {useEffect, useState} from "react";


const API_URL="https://62bb6e36573ca8f83298fbef.mockapi.io/metcampweb22/v1/questions/harry-potter";

function Game(){

    const [loading, setLoading ] =useState(true);
    const [questions, setQuestions] = useState([])

    useEffect(()=>{
        fetch(API_URL)
            .then(response => console.log (response))
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('Hubo un problema con la petición Fetch:' + error.message))
            .finally(()=>setLoading(false));
        }

    )

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
                { /* <div>{loading ? "Cargando": "Preguntas listas!"}</div>*/}
                {
                    loading &&
                        <div> Cargando...</div>
                }
                {
                    !loading && (
                        <form>
                            {
                                questions.map((pregunta) => {
                                    return <QuestionCard key={pregunta.id} preguntaActual={pregunta} />
                                })

                            }
                        </form>
                    )
                }
                <h1>El juego</h1>
            </section>
        </div>    
    )
}
export default Game;
