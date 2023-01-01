import Title from "./components/Title"
import QuestionsBlock from "./components/QuestionsBlock"
import ResultBlock from "./components/ResultBlock"
import {useEffect,useState} from "react"

function App() {
  const [quiz,setQuiz]=useState();
  const [score,setScore]=useState(0);
  const [count,setCount]=useState(0);
  const [finished,setFinished]=useState(false);
  const scoreHandle=(status)=>{
    setCount(count+1);
    if(status)
    {
      setScore(score+1);
      console.log(true)
    }
    else
    console.log(false)

  }
  useEffect(()=>{
    (async()=>{
    try{
      const data=await (await fetch("http://localhost:8000/quiz")).json();
    console.log(data)
    setQuiz(data);
    }
    catch(e)
    {
      alert("An error occured.")
    }
  })()
    
  },[])
  useEffect(()=>{
    if(count && quiz.questions)
    if(count==quiz.questions.length)
    {
      setFinished(true);
      window.scroll(0,document.scrollingElement.scrollHeight)
    }
  },[count])
  return (
    <div className="App">
      
      {quiz?
      <>
      <Title title={quiz.title} subtitle={quiz.subtitle}/>
      {quiz.questions.map((question)=><QuestionsBlock key={question.id} question={question} scoreHandle={scoreHandle}/>)}
      {finished?<ResultBlock score={score} count={count} passed={quiz.result.passed} failed={quiz.result.failed}/>:""}
      
      </>
      :"No Data"
      }
    </div>
  );
}

export default App;
