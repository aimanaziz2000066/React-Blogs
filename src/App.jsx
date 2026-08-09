//function App(){
//return(
//<h1>Hello React.js!</h1>
//)
//}
//export default App;

const { useState, useEffect } = require("react");

//import College from "./College"

//function App(){
//return(
//<h1>First Component</h1>
//)
//}
//export default App;

//2: JSX with Variables
//function App() {
//const name = "Aiman";
//const age = 20;
//return (
//<>
//<h1>My Name is {name}</h1>
//<h2>Age: {age}</h2>
//</>
//);
//}
//export default App;

//Props
//import User from "./User";
//function App(){
//return(
//<div>
//<h1>Props in React.js</h1>
//<User/>
//</div>
//)
//}
//export default App;

//Nested Looping
//function App() {
  //const CollegeData =
  //{
    //name: "Islamia College",
    //city: "Peshawar",
    //website: "www.islamia.com",
  //},
    //student: [
      //{
        //name: "Ayesha",
        //age: "18",
        //email: "ayesha.test.com"
      //},
      //{
        //name: "Amna",
        //age: "20",
        //email: "amna.test.com"
      //},
      //{
        //name: "Alina",
        //age: "23",
        //email: "alina.test.com"
      //},
    //]
//},
//{
  //name: "Jinnah College",
    //city: "Peshawar",
      //website: "www.jinnah.com",
      //},
//student: [
  //{
    //name: "Sara",
    //age: "25",
    //email: "sara.test.com"
  //},
  //{
    //name: "Laiba",
    //age: "20",
    //email: "laiba.test.com"
  //},
  //{
    //name: "Sumaiya",
    //age: "23",
    //email: "sumaiya.test.com"
  //},
//]
//{
  //name: "fazaia College",
    //city: "Islamabad",
      //website: "www.fazaia.com",
      //},
//student: [
  //{
    //name: "Aiman",
    //age: "18",
    //email: "aiman.test.com"
  //},
  //{
    //name: "Shafaq",
    //age: "26",
    //email: "shafaq.test.com"
  //},
  //{
    //name: "Laraib",
    //age: "23",
    //email: "laraib.test.com"
  //},
//]
//return (
  //<div>
    //<h1>Nested Looping With Components</h1>
    //{
      //CollegeData.map((college, index) => (
        //<div key={index}>
          //<College college={college}/>

        //</div>

      //)
      //)
    //}
  //</div>
//)
//export default App;

//useEffect Hooks
function App(){
  const[counter,setCounter]=useState(0);
  const[data,setData]=useState(0);
  useEffect(()=>{
//callOnce();
  },[])
  function callOnce(){
    console.log("callOnce function called");
  }
  return(
    <div>
      <h1>useEffect Hooks</h1>
      <button onClick={()=>setCounter(counter+1)}>Counter {counter}</button>
       <button onClick={()=>setData(data+1)}>Data {data}</button>
    </div>
  )
}
export default App;