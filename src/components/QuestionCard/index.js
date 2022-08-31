import "./styles.css";

function QuestionCard ({preguntaActual}){
    console.log(preguntaActual.question);
    console.log(preguntaActual.answers);
    return (
        <div className="box">
            <div className="mi-clase">
                <span className="tag is-rounded is-primary">{preguntaActual.id}</span>
                <span><strong> {preguntaActual.question}</strong></span>
                
                <br/>
            </div>
            {
                preguntaActual.answers.map((opcion) => (
                    <div key={opcion.id}>
                        
                        <input type="radio" id={`${opcion.id}`} name={opcion.id} value={opcion.answer} ></input>
                        <span> {opcion.answer} </span>
                        <span className="is_correct">  {`${opcion.is_correct}`} </span>
                        <br/>
                    </div>
                ))
            }
            <br/>
        </div>
    )
}

export default QuestionCard;