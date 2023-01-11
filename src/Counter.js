import React, { useState, useEffect } from "react";

function Counter()  {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(count);
  }
  ,[count])

  return (
    <div>
      <h6> Counter </h6>
      <p> current count: {count} </p>
      <button onClick={() => setCount(count + 1)}>increment the count</button>
    </div>
  );
};

export default Counter;

