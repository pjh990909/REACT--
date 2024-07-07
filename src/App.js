import React from "react";
import {Routes,Route,Link} from "react-router-dom"

import Home from "./pages/Home";
import About from "./pages/About";
import Counter from "./pages/Counter";
import Input from "./pages/Input";
import Input2 from "./pages/Input2";
import List from "./pages/List";

function App() {
  return (
    <div className="App">
      <nav>
      <Link to="/">home</Link> |
      <Link to="/about">about</Link> |
      <Link to="/counter">counter</Link> |
      <Link to="/input">input</Link> |
      <Link to="/input2">input2</Link> |
      <Link to="/list">list</Link> |
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/input" element={<Input />} />
        <Route path="/input2" element={<Input2 />} />
        <Route path="/list" element={<List />} />
      </Routes>
    </div>
  );
}

export default App;
