import React, { useState } from 'react'

const App = () => {
  
    const[inputValue,setInputValue]=useState("")
    const inputHandler=(value)=>{
      setInputValue( inputValue+value);
    };
    const Clear =()=>{
      setInputValue( " ");
    };
   
    const Calculate =()=>{
      try{
      const result = eval(inputValue);
      setInputValue(result);
      } catch(error){
        setInputValue("Error");
      }
     };
     const handleDelete=()=>{
  if(inputValue?.length) {
    let      val=inputValue.substring(0, inputValue?.length-1)
    setInputValue(val);
  }
};

    return (
    <div className="main-container">
      <input value={inputValue} readOnly className="input-box"/>
      <div className="button-Items">
        <button className='ac' onClick={Clear}>AC</button>
        <button className='de' onClick={handleDelete}>DE</button>
        <button onClick={()=>inputHandler("%")} className="Mud">%</button>
        <button onClick={()=>inputHandler("/")} className="divid">/</button>

        <button className='one' onClick={()=>inputHandler(1)} >1</button>
        <button className='two' onClick={()=>inputHandler(2)} >2</button>
        <button className='three' onClick={()=>inputHandler(3)} >3</button>
        <button onClick={()=>inputHandler("*")}  className="Multi">*</button>

        <button className='four' onClick={()=>inputHandler(4)} >4</button>
        <button className='five' onClick={()=>inputHandler(5)} >5</button>
        <button className='six' onClick={()=>inputHandler(6)} >6</button>
        <button onClick={()=>inputHandler("-")} className="sub">-</button>

        <button className='seven' onClick={()=>inputHandler(7)} >7</button>
        <button className='eight' onClick={()=>inputHandler(8)} >8</button>
        <button className='nine' onClick={()=>inputHandler(9)} >9</button>
        <button onClick={()=>inputHandler("+")} className='Add'>+</button>

        <button className='zero' onClick={()=>inputHandler(0)} >0</button>
        <button className='dot' onClick={()=>inputHandler(".")} >.</button>
        <button onClick={Calculate}   className="equal">=</button>
       




        
      </div>
    </div>
  )
}

export default App