import './App.css';
import Nav from './Components/navbar';
import MyKitchen from './Components/MyKitchen.jsx';
import React from 'react';

function App() {
  return (
    <div id="main">
      <Nav/>
      <MyKitchen/>
    </div>
  );
}

export default App;
