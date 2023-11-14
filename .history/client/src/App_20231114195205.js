import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import Task from "./components/task";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Task/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
