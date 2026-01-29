import React from "react";

const data=[
    {name:"Aslam",programmer:false},
    {name:"Vishnu",programmer:true},
]
export const CheckBox=()=>{
    const [disp,setDisp]=React.useState(data)
    const changeHandler=(name)=>{        
        let temp=[...disp] //this step is very important
        disp.map((item,index)=>{
            if(item.name===name){
                temp[index]={name:name,programmer:!temp[index].programmer}
            }
        })  
        setDisp(temp)
    }
    
    return <>
    <div>
       {disp.map((item,i)=>{
        return <p key={i}>{item.name}<input type="checkbox" checked={item.programmer} onChange={()=>changeHandler(item.name)}/></p>
       })}
    </div>
    </>
}
