import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import UpdateTask from "./components/UpdateTask";
import AddTask from "./components/AddTask";
import Task from "./components/Task";


const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task/>}/>
          <Route path="/add" element={<AddTask/>}/>
          <Route path="/update" element={<UpdateTask/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
