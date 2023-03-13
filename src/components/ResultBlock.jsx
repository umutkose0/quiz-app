import { useEffect } from "react";

const ResultBlock=({count,score,passed,failed})=>{
    useEffect(()=>{
      window.scroll({left:0,top:document.scrollingElement.scrollHeight,behavior:"smooth"})
    },[])
    console.log((100/count)*score)
    return (100/count)*score>50? 
    <div name="result" className="passed result">
        <p>Congrats!!!</p>
        <p>{passed}</p> 
        <p>you answered {count}/{score} You are in top 50%</p>
         
        </div>
    :
    <div name="result" className="failed result">
        <p>Sorry :(</p>
        <p>{failed}</p> 
        <p>you answered {count}/{score}</p>
            </div>;

}
export default ResultBlock