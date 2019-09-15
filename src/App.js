import React from 'react';
import Main from "./containers/Main"
import { HashRouter } from "react-router-dom"
import "./css/styles.css"

function App() {
  return (
    <HashRouter basename="/iot-center">
      <div className="App">
        <Main />
      </div>
    </HashRouter>  
  );
}

export default App;
