import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Tack/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
