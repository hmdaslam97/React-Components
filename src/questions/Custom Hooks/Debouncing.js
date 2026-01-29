import {useEffect, useState} from "react"

const Debouncing = ()=>{
  const [query, setQuery] = useState("")
  const handleQuery=(str)=>{
    setQuery(()=>str)
  }

  useEffect(()=>{
    let timeout = setTimeout(()=>{

      if(query) { //Checking of non-empty value
        console.log("Making api call for search query", query)
      }
    }, 1000)

    return ()=>{
              clearTimeout(timeout);
            }
  }, [query])
  return <>
    <h1>You Typed: {query}</h1>
    <input type="text" value={query} onChange={(e)=>{handleQuery(e.target.value)}} />
  </>
}

export default Debouncing;