"use client";

import { useState } from "react";

export default function StrPrac() {
  // let val = "hello";

  const [val, setVal] = useState("String");
  const [val2, setVal2] = useState("String");

  const onChangeHandler = (e: any) => {
    console.log("e is", e.target.value);
    // val = e.target.value;
    setVal(e.target.value);
  };
  const onChangeHandler2 = (e: any) => {
    console.log("e is", e.target.value);
    // val = e.target.value;
    setVal2(e.target.value);
  };
  return (
    <>
    Name. 1<br />
      <input type={"text"} value={val} onChange={onChangeHandler} /><br /><br />
    Name. 2<br />
      <input type="text" value={val2}  onChange={onChangeHandler2} /><br /><br />
      Length of string 1: {val.length} <br />
      Length of string 2: {val2.length}
    </>
  );
}