import {useState, useEffect} from 'react'

export default function useFetch({url, method, body, config}) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function makeAPICall() {
    setLoading(true)
    await fetch(url, {method, body: method==="GET" ? null: body, config})
      .then(res => {
        if(!res.ok){
          setError(`HTTP error! Status: ${res.status}`)
        }
        return res.json();
      })
      .then(data => {
        setData(data)
      })
      .catch(error => {
        setError(error)
      })
      .finally(()=>{
        setLoading(false)
      })
  }

  useEffect(()=>{
    makeAPICall(url, method, body, config)
  }, [])

  return {data, loading, error}
}