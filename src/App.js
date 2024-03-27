
import './App.css';
import React, {useState, useEffect} from "react";

function App() {
  const url ="https://20.244.56.144/test/register"
  const[data,setData]= useState([]);


  useEffect(()=>{
    ( () => {
      const res = fetch(url);
      const d = res.json();
      return setData(d);
    })();
  },[]
  );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
