import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import UpdateTasl from "./components/UpdateTask";
import Task from "./components/task";
import AddTask from "./components/addTask";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Task/>}/>
          <Route path="/add" element={<AddTask/>}/>
          <Route path="/update" element={<UpdateTasl/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
