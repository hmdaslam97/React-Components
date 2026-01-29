import React from 'react'

const countries=[
    {
        name:"India",
        value:"IN",
        cities:['Delhi','Bangalore']
    },
    {
        name:"Pak",
        value:"PA",
        cities:['Lahore','Karachi']
    },
    {
        name:"Bangladesh",
        value:"BA",
        cities:['Dhaka','Chittagong']
    },
]
const Dropdown = () => {
    const [country,setCountry]=React.useState("India")
    const getCountry=(nation)=>{
        setCountry(nation)
    }
  return (
    <div>
            {/* Countries */}
            <div className='country'>
            <p>Select Country</p>
            <select onChange={(e)=>getCountry(e.target.value)}>
                {countries.map((item,i)=>{
                    return <option key={i}>{item.name}</option>
                })}
            </select>
            </div>
        
        {/* States */}
        <div className='states'>
        <p>Select Country</p>
            <select>
                {(countries.filter(item=>item.name===country))[0].cities.map(states=>{
                        return <option>{states}</option>
                })}
            </select>
        </div>
    </div>
  )
}

export default Dropdown
