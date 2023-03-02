import React, { useState, useEffect } from 'react';
import './App.css';
// import Loading from "./componentes/Loading";
// import Tours from "./componentes/Tour";
const url = 'https://course-api.com/react-tours-project';

function App() {
  
  const [loading, setloading] = useState(true);
  
  const [tours, setTours] = useState([]);
  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return <h2>tours projects setup</h2>
}

export default App;
