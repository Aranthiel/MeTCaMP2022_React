import {useNavigate} from 'react-router-dom';
import Button from '../../components/button';
import QuestionForm from '../../components/QuestionForm';

function Prueba(){
    const navigate = useNavigate();

    const clickHome= ()=>{
        navigate("/");  
    }
    return(
        <div>
            <h1> Esta es la página de prueba</h1>
            <Button text="Inicio" apretado={clickHome}/>
            <Button text="Inicio" apretado={clickHome}/>
            < QuestionForm />
            < QuestionForm />
            < QuestionForm />
        </div>
    )   
}

export default Prueba;

