import React from "react";
import {Route, Router, Routes} from "react-router-dom";
import UpdateTask from "./components/UpdateTask";
import Task from "./components/task";
import AddTask from "./components/addTask";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Task/>}/>
          <Route path="/add" element={<AddTask/>}/>
          <Route path="/update" element={<UpdateTask/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
