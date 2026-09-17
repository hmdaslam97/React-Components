import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../App.css";

const CustomTable = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const [data, setData] = useState([]);
  const [order, setOrder] = useState([
    {id: true, type: "number"},
    {name: true, type: "string"},
    {email: true, type: "string"},
    {body: true, type: "string"}
  ])

  async function fetchData(){
    const response = await axios.get("https://jsonplaceholder.typicode.com/comments")
    setFetchedData(response.data);
    setData(response.data);
    sort("id")
  }

  function sort(key) {
    switch(key){
      case "id" : setOrder((prev)=>{ return prev.map(item => item.id !== undefined ? {...item, id: !item.id} : item) });
                break;
      case "name" : setOrder((prev)=>{ return prev.map(item => item.name !== undefined ? {...item, name: !item.name} : item) });
                break;
      case "email" : setOrder((prev)=>{ return prev.map(item => item.email !== undefined ? {...item, email: !item.email} : item) });
                break;
      case "body" : setOrder((prev)=>{ return prev.map(item => item.body !== undefined ? {...item, body: !item.body} : item) });
                break;
    }

    setData(prev=>{
      const curr = [...prev]
      const orderItem = order.find(item => item[key] !== undefined);
      if(orderItem?.type === "number"){
        if(orderItem[key]){ //increasing order sort
          curr.sort((a, b)=>{
            return a[key] - b[key]
          })
        } else { //descreasing order
          curr.sort((a, b)=>{
            return b[key] - a[key]
          })
        }
      } else {
        if(orderItem[key]){ //increasing order sort
          curr.sort((a, b)=>{
            return a[key].localeCompare(b[key])
          })
        } else { //decreasing order
          curr.sort((a, b)=>{
            return b[key].localeCompare(a[key])
          })
        }
      }
      return curr
    })
  }

  function filter(key, value) {
    if(!value) {
      setData(fetchedData);
      return;
    }
    setData(prev => {
      return prev.filter(item => item[key].toString().toLowerCase().includes(value.toLowerCase()));
    });
  }

  useEffect(()=>{
    fetchData();
  }, [])

  return (
    <div>
      <h1>Custom Table with filters and sort options</h1>
      <table>
        <thead>
          <tr>
            <th className="table-header" onClick={() => sort("id")}>ID</th>
            <th className="table-header" onClick={() => sort("name")}>Name</th>
            <th className="table-header" onClick={() => sort("email")}>Email</th>
            <th className="table-header" onClick={() => sort("body")}>Comment</th>
          </tr>
          <tr>
            <th><input type="text" onChange={(e) => filter("id", e.target.value)}></input></th>
            <th><input type="text" onChange={(e) => filter("name", e.target.value)}></input></th>
            <th><input type="text" onChange={(e) => filter("email", e.target.value)}></input></th>
            <th><input type="text" onChange={(e) => filter("body", e.target.value)}></input></th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td className="table-cell">{item.id}</td>
              <td className="table-cell">{item.name}</td>
              <td className="table-cell">{item.email}</td>
              <td className="table-cell">{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default CustomTable