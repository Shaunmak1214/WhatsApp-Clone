import React from 'react';
import './App.css';
import Sidebar from './Sidebar';

function App() {
  return (
    //Bem Naming Convention

  <div className="app">
      <div className="app__body">
        {/*Sidebar */}
        <Sidebar />
        {/*Chat */}
      </div>
  </div>
  );
}

export default App;
