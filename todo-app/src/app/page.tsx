import { format } from "path";
import React from "react";
import { text } from "stream/consumers";
import CounterApp from "./counter-app";
import CounterAppAdvanced from "./counter-app-advanced";
import StrPrac from "./str-prac";
import Todo from "./todo";

export default function page() {
  return (
    <div><br /><br />
      { 
      <h2 >UseState Practice and String Practice </h2>}
      <StrPrac /><br /><br /><br /><br /><hr/>
      
      <h2>Counter App</h2>
      {<CounterApp />}
      <br /><br /><br /><br /><hr/>
      {<h2>Counter App Advanced</h2>}

      { <CounterAppAdvanced /> }
      <br /><br /><br /><br /><hr/>
      <br /><br />
     <Todo />
      <br /><br /><br /><br /><hr/>
    </div>
  );
}