
import useFetch from "./UseFetchUtils.js"

export default function UseFetch(){

  const {data, loading, error} = useFetch({ url: "https://jsonplaceholder.typicode.com/users",
                                            method:"GET",
                                            body:{body:"Aslam", id: 229, title:"Your name", userId: 999},
                                            config:{
                                              "headers": {'Content-Type': 'application/json', // Informs server of data type
                                                          'Authorization': 'Bearer YOUR_TOKEN_HERE' // Optional: Auth header
                                                        }
                                            }
                                          }
                                         )
  console.log(data, loading, error)
  return <div >
          <h1>Welcome to custom useFetch hook in React.</h1>
          {loading && <p>Loading data...</p>}
          <div style={{display:"flex", flexDirection: "row", gap:"20px", flexWrap:"wrap"}}>
            {!error && data && data.map((item, index) =>{
                return <div key={index} style={{border: "3px solid silver", padding: "10px", borderRadius:"10px", width: "300px", backgroundColor: "black"}}>
                          <p style={{color:"white"}}>ID: {item.id}</p>
                          <p style={{color:"white"}}>Name: {item.name}</p>
                          <p style={{color:"white"}}>Phone: {item.phone}</p>
                          <p style={{color:"white"}}>Website: {item.website}</p>
                       </div>
              })
            }
          </div>
         </div>
}