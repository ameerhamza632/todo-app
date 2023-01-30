"use client";
import React, { useState } from "react";

export default function CounterApp() {
  const [counter, setCounter] = useState(0);
  const decrement = () => {
    console.log("in decrement");
    setCounter(counter - 1);
  };
  const increment = () => {
    console.log("in increment");
    setCounter(counter + 1);
  };
  return (
    <>
       <button onClick={increment}>Increment</button><br/><br/>
      {counter}<br/><br/>
      <button onClick={decrement}>Decrement</button><br/><br/>
    </>
  );
}