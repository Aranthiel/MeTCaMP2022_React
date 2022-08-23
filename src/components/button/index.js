// componente boton
import './styles.css'

function Button({text, apretado}){
    // el valor {text} es una "variable" que se pasa como atributo en la etiqueta del componente
    return (
        //aca va el html del elemento
        <button onClick= {apretado} className="boton"> {text} </button>
    )
}

// es necesario exportarlo ara que se pueda usar en otro elemento
//usar las palabras reservadas export default y el nombre de la funcion

export default Button;