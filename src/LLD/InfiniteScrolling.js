import axios from 'axios';
import React, {useEffect, useState} from 'react'

const InfiniteScrolling = () => {
  let timer = null;
  const limit = 10;
  let start = 0;
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadData = async () => {
    if(start+limit <= 500) {
      const response = await axios.get(`https://jsonplaceholder.typicode.com/comments?_start=${start}&_limit=${limit}`)
      setData(prevData => [...prevData, ...response.data]);
      start += limit;
    }
    setLoading(false);
  }

  function debouncedCall(func, delay){
    if (timer) clearTimeout(timer);

    timer = setTimeout(()=>{
      func();
    }, delay)
    return () => clearTimeout(timer);
  }

  function handleScroll() {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight-100 && !loading) {
      setLoading(true);
      debouncedCall(loadData, 1000)
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll', handleScroll)
    loadData();
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div style={{border: "2px solid green", margin: "10px", padding: "5px"}}>
      <h1>Welcome to Infinite Scrolling</h1>
      <div>
        {data.map((item) => (
          <div key={item.id} style={{border: "1px solid gray", margin: "5px", padding: "5px"}}>
            <p><strong>{item.name}</strong></p>
            <p><em>{item.email}</em></p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}

    </div>
  )
}

export default InfiniteScrolling