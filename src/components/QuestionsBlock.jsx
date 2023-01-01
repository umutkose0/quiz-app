import {useState} from "react"
import OptionBlock from "./OptionBlock"

const QuestionsBlock=({question,scoreHandle})=>{
    const [answered,setAnswered]=useState(false);
    const clickHandle=(e,optionId)=>{
        if(!answered)
        {
            setAnswered(true);
            
            if(question.answerId==optionId)
            {
                e.target.classList.add("true");
                scoreHandle(true);
            }
            else
            {
                e.target.classList.add("false");
                scoreHandle(false);


            }
            
        }
            
    }
    return(
        <div className="question">
            <h2>{question.question}</h2>
            <img src={question.image}/>
            <div className="options">
            {question.options.map((option)=><OptionBlock onClick={clickHandle} status={answered} key={option.id} option={option}/>)}
            </div>

        </div>
    );
}
export default QuestionsBlock