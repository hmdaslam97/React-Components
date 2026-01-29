import React,{useState,useCallback} from 'react'
import { UseCallbackChild } from './UseCallbackChild';
import {WithoutMemo} from './WithoutMemo.js'

export const UseCallback = () =>{
const [count, setCount] = useState(0);

const handleClick = useCallback(() => {
    setCount(prevCount => prevCount + 1);
}, []);//

console.log('Parent component rendered');
return ( <div>
    <h1> Count from Parent's: {count} </h1>
    <UseCallbackChild onClick = {handleClick}/>
    <WithoutMemo onClick={handleClick}/>
    </div>
);
}


