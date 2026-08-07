//function App(){
  //return(
    //<h1>Hello React.js!</h1>
 // )
//}
//export default App;

import { useState } from "react";
import "./App.css";
import User from "./User";
function App(){
  const [counter,setCount]=useState(0)
  return(
    <>
    <h1>Counter Val:{counter}</h1>
    <User/>
    <div>
<button onClick={()=>setCount(counter+1)}>Increase Counter</button>
    </div>
    
    </>
  )
};
export default App;