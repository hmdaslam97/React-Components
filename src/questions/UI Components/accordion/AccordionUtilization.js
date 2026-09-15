import {AccordionData} from './accordionData'
import AccordionComponent from './AccordionComponent'

const AccordionUtilization = () => {

  return (
    <div>
      {AccordionData.map((obj, index)=>{
        return <AccordionComponent key={index+1} title={obj.title} description={obj.content}/>
      })}
    </div>
  )
}

export default AccordionUtilization