import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import View from "./components/View";
import Layout from "./components/Layout";
import Cart from "./components/Cart"
//import Slider from "./components/Slider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [user, setUser] = useState({});

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout user={user} setUser={setUser} />}>
            <Route
              index
              element={<Home user={user} setUser={setUser} />}
            ></Route>
            <Route path="/:pId" element={<View user={user} />}></Route>
            <Route path="/cart" element={<Cart user={user} />}></Route>
          </Route>
          <Route path="/login" element={<Login setUser={setUser} />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
