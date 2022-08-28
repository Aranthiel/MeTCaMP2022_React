import './styles.css';
import Question from '../../components/Question'; 
import Option from '../../components/Option'; 

function QuestionForm (){
    return (
        <div> <Question text="Elige tu opción" />
        <Option text="Opción 1"/>
        <Option text="Opción 2"/>
        <Option text="Opción 3"/>
        </div>
    )
}

export default QuestionForm;
