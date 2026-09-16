import { useState, useEffect } from "react";
import axios from "axios";

export default function DebouncedSearch() {
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState(null);
  const [searching, setSearching] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (value) => {
    if(!value.trimEnd()){
      setError(null)
    }
    setSearching(true);
    setInputText(prev=> value);
  };

  async function handleSearch(){
    await axios
    .get(`https://freedictionaryapi.com/api/v1/entries/en/${encodeURIComponent(inputText.trimEnd())}`)
    .then((response) => {
      setSearching(false);
      const res = response.data;
      if(res?.entries.length){
        setError(null);
        setData(res);
      } else {
        setError("No meaning found!");
        setData(null);
      }
    })
    .catch((error) => {
      console.error(error);
      setSearching(false);
      setError("An error occurred while searching!");
    })
  }

  useEffect(() => {
    if(!inputText.trimEnd())  // don't search if input is empty
    {
      setSearching(false);
      setData(null);
      return;
    }
    const timer = setTimeout(()=>{
      handleSearch();
    }, 500) // debounce delay of 500ms

    return () => clearTimeout(timer)// cleanup the timer on component unmount or before the next effect runs
  }, [inputText]);

  return (<>
    <h1>Welcome to Debounced Dictionary Search </h1>

    <div style={{ width: "300px", margin: "5px"}}>
      <input type="text" placeholder="Search for a meaning..." value={inputText} onChange={(e) => handleInputChange(e.target.value)} aria-placeholder="Search for a meaning..." aria-label={inputText} autoFocus />
      {searching && <span>&#x1F50D; Searching...</span>}
    </div>

    {error && <p style={{ color: "red" }}>{error}</p>}
    {!inputText && <p>Please enter a word to search for its meaning.</p>}

    {!error && data && (
      <div style={{marginLeft: "5px"}}>
        {data?.entries?.map((entry, index)=>{
          return (
            <div style={{ border: "2px solid #4c6d56", padding: "10px", margin: "5px 0" }}>
              <h3>Part of Speech: {entry.partOfSpeech}</h3>
              {entry?.senses?.map((sense, idx)=>{
                return (<div>
                          <p>Definition: {sense.definition}</p>
                        </div>)
              })}
            </div>
          )
        })}
      </div>)}
  </>)
}