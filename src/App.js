import React, { useEffect, useState } from "react";
import axios from 'axios';
import NasaImage from './Components/NasaImage';
import "./App.css";
import logo from './Images/nasa-logo.png'

function App() {

  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(res => {
        console.log(res);
        setData(res.data);
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      { data && <NasaImage photo={data} logo={logo}/> }
    </div>
  );
}

export default App;



