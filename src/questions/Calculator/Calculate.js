import React,{useState,useEffect} from 'react'
import './CalculatorStyles.css'

export const Calculate = () => {

  const [variables,setVariables]=useState("")
  const [operator,setOperator]=useState("")
  const [result,setResult]=useState(0)

  // useEffect(() => {
  //   function handleKeyDown(e) {
      
  //        let p1=/^[0-9()]$/,p2=/^[+-/*]$/,char=e.key;
  //       // let mergedPattern = new RegExp(p1.source + '|' + p2.source);
  //       if(p2.test(char)){
  //         console.log(char)
  //         setOperator(char)
  //         console.log("op",operator)
  //       }
  //       if(p1.test(char)){
  //         setVariables(prev=>{
  //           if(operator!==""){ return prev+""+operator+char }
  //           else{ return prev+char }
  //         })
  //         setOperator("")
  //       }
  //   }
  //   document.addEventListener("keydown", handleKeyDown);
  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once on mount
 
  const evaluate=(val)=>{  
      setVariables(variables+operator+val)
      setOperator("")
  }

  const setOperators=(o)=>{
    setOperator(o)
  }

  const getResult=()=>{
    setResult(eval(variables))
  }
  
  const clear=()=>{
    let newVar= variables
    if(newVar.length>0){
      let arr=newVar.split("")
      arr.pop()
      newVar=arr.join("")
    }
    setVariables(newVar)  
  }

  const clearResult=()=>{
    setVariables("")
    setResult(0)
  }

  return (
    <div className='main'>
        <div className='container'>

          <div className="board">
            <div className='typelist'><p>{variables}</p> <p>{operator}</p></div>
            <h2 className=''>{result}</h2>
          </div>

          <div className='buttons'>
            <div className='row1'>
              <button className='reddish' onClick={()=>clearResult()}>AC</button>
              <button className='bluish' onClick={()=>evaluate("(")}>&#40;</button>
              <button className='bluish' onClick={()=>evaluate(")")}>&#41;</button>
              <button className='reddish' onClick={clear}>&larr;</button>
            </div>

            <div className='row2'>
              <button className='' onClick={()=>evaluate("7")}>7</button>
              <button className='' onClick={()=>evaluate("8")}>8</button>
              <button className='' onClick={()=>evaluate("9")}>9</button>
              <button className='bluish' onClick={()=>setOperators("/")}>/</button>
            </div>

            <div className='row3'>
              <button className='' onClick={()=>evaluate("4")}>4</button>
              <button className='' onClick={()=>evaluate("5")}>5</button>
              <button className='' onClick={()=>evaluate("6")}>6</button>
              <button className='bluish' onClick={()=>setOperators("*")}>x</button>
            </div>

            <div className='row4'>
              <button className='' onClick={()=>evaluate("1")}>1</button>
              <button className='' onClick={()=>evaluate("2")}>2</button>
              <button className='' onClick={()=>evaluate("3")}>3</button>
              <button className='bluish' onClick={()=>setOperators("-")}>-</button>
            </div>

            <div className='row5'>
              <button className='' onClick={()=>evaluate("0")}>0</button>
              <button className='' onClick={()=>evaluate(".")}>.</button>
              <button className='' onClick={getResult}>=</button>
              <button className='bluish' onClick={()=>setOperators("+")}>+</button>
            </div>
          </div>
        </div>
    </div>
  )
}

