import React, {useState} from 'react'

const AccordionComponent = ({title, description}) => {
  const [open, setOpen] = useState(false)
  const handleClick = ()=>{
    setOpen(!open)
  }

  return (
    <div style={{width: "20%"}}>
      <div onClick={handleClick} style={{border:'2px solid grey', borderRadius: '10px', paddingLeft: '5px'}}>
        <p>{title} { open ? "^" : "v"}</p></div>
        {open && <div>{description}</div>}
    </div>
  )
}

export default AccordionComponent