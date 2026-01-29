import React from 'react'
import axios from 'axios'

function DataFromFile() {

  React.useEffect(()=>{
    const options={
      url:"./list.json",
      method:"GET",
      data:{}
    }
    axios.request(options)
    .then(res=>{
      console.log(res.data[0].Countries)
    })
    .catch(err=>{
      console.log(err)
    })
  },[])

  return (
    <div>
      <h1>Calling Data from a JSON file stored in Public Folder</h1>
    </div>
  )
}

export default DataFromFile
