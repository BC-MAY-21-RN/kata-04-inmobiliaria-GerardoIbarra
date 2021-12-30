import React from 'react'
import Home from './componets/index'; 
import homesFromJsonData from './componets/casa.json';

const App = () => {
  return homesFromJsonData.casa.map(home => (
    <Home key={home.name} home={home} />
  ))
}

export default App;
