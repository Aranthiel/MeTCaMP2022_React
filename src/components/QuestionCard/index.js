import "./index.css";
import q1  from "../../assets/q1.png";
import q2  from "../../assets/q2.png";
import q3  from "../../assets/q3.png";
import q4  from "../../assets/q4.png";
import q5  from "../../assets/q5.png";
import q6  from "../../assets/q6.png";
import q7  from "../../assets/q7.png";
import q8  from "../../assets/q8.png";
import q9  from "../../assets/q9.png";
import q10  from "../../assets/q10.png";


function QuestionCard({ preguntaActual, selectedAnswers, setSelectedAnswers, mostrarResultado }) {

    function seleccionarRespuesta(identificador, valorOpcion) {
        const otrasRespuestas = selectedAnswers.filter((respuesta) => respuesta.id !== identificador)
        setSelectedAnswers([...otrasRespuestas,
        {
            id: identificador,
            valorOpcion
        }
        ])
    }

    function mostrarColores(valor) {
        let valorClase = "";
        if (mostrarResultado) {
            if (valor === true) {
                valorClase = "has-text-primary";
            } else {
                valorClase = "has-text-danger"
            }
        }
        return valorClase;
    }
    
    let url=[`${q1}`, `${q2}`, `${q3}`, `${q4}`, `${q5}`, `${q6}`, `${q7}`, `${q8}`, `${q9}`, `${q10}`];


    return (
        <div className="card mi-carta" id="wrapper">
            <div>
                <div className="media">
                    <div className="media-left">
                        <span className="title is-5 is-primary">{preguntaActual.id}</span>
                    </div>
                    <div className="media-content">
                        <p className="title is-5"><strong> {preguntaActual.question}</strong> </p>
                    </div>
                    </div>
            </div>
            <div className="colums level">
                    <div className="column card-image   is-one-quarter-tablet is-one-quarter-desktop">
                        
                        <figure className="image mi-imagen level-left" >
                            {/* <img width="50" height="50" src={`../../assets/q${preguntaActual.id}.png`} alt={preguntaActual.id}></img> */}
                            <img src={url[`${preguntaActual.id}`-1]} alt={preguntaActual.id}></img>
                        </figure>
                    </div>
                    <div className="column card-content level-right is-full-mobile is-two-third-tablet is-two-third-desktop">
                        {
                            preguntaActual.answers.map((opcion) => (
                                <div className="content" 
                                key={opcion.id}
                                onChange={() => seleccionarRespuesta(preguntaActual.id, opcion.is_correct)}
                                >
                                    <input type="radio"
                                    id={`${opcion.id}`}
                                    name={preguntaActual.id}
                                    value={opcion.answer} ></input>

                                
                                    <label htmlFor={`${opcion.id}`}
                                    className={mostrarColores(opcion.is_correct)}
                                        >&nbsp;{opcion.answer}</label>
                                </div>
                            ))
                    }       
                    </div>
            </div>
        </div>
       
        )
}


export default QuestionCard;