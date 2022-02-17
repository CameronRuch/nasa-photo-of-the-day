import React, { useEffect, useState } from "react";
import axios from 'axios';
import "./App.css";

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
    </div>
  );
}

export default App;
