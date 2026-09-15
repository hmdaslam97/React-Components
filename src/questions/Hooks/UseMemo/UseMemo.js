import React, { useState, useMemo } from 'react';

function UseMemo({ data }) {
  const [count, setCount] = useState(0);
 const [count2, setCount2] = useState(0);


  // Expensive calculation that depends on 'data'
  const processedData = useMemo(() => {
    console.log('Calculating processed data...'); // Added for demonstration
    return data.reduce((pre, curr, i, arr)=>{
							return pre+curr;
						}); // Example: double each item
  }, [data]); // Recalculate only when 'data' changes


  const increment = () => {
    setCount(c => c + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment Count</button>
      <p>Count: {count}</p>

      <button onClick={increment}>Increment Count 2</button>
      <p>Count2: {count2}</p>
      <p>Processed Data: {processedData}</p>
    </div>
  );
}

export default UseMemo;