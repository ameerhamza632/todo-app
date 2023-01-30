"use client";
import React, { useState } from "react";

export default function CounterAppAdvanced() {
  const [counter, setCounter] = useState(0);
  const decrement = (kitna = 1) => {
    console.log("in decrement");
    setCounter(counter - kitna);
  };
  const increment = (kitna = 1) => {
    console.log("in increment");
    setCounter(counter + kitna);
  };

  return (
    <>
         {/* increment */}
      <button onClick={() => increment(5)}>Increment by 5</button><br/><br/>
      <button onClick={() => increment(2)}>Increment by 2</button><br/><br/>
      <button onClick={() => increment()}>Increment 1</button><br/><br/>
      {counter}<br/><br/>
    {/* Decrement */}
    <button onClick={() => { decrement(1);}} > Decrement 1</button><br/><br/>
    <button onClick={() => { decrement(2);}}> Decrement by 2 </button><br/><br/>
      <button onClick={() => {  decrement(5);  }}>Decrement by 5</button><br/><br/>
     

    

      
    </>
  );
}