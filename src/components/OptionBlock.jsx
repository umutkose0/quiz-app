const OptionBlock=({option,onClick})=>{
    return(
        <div onClick={(e)=>{onClick(e,option.id)}} className="option">{option.text}</div>
    );
}
export default OptionBlock