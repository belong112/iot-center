import React from 'react';
import Main from "./containers/Main"
import {BrowserRouter} from "react-router-dom"
import "./css/styles.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>  
  );
}

export default App;
