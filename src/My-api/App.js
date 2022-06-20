import './App.css';
import { useState, useEffect} from "react";
import CardList from "./CardList";

function App() {
  const [ data , setData] = useState([]);

  useEffect(() => {
  fetch("http://localhost:5050/users")
  .then(res => res.json())
  .then(data => {
     setData(data.data)
  })
  },[])

  
  return (
    <div className="App container">
      <CardList data = {data} />
    
    </div>
  );
}

export default App;
