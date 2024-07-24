import React from "react";
import Home from "./components/pages/Home";
import Projects from "./components/pages/Projects";
import Account from "./components/pages/Account";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/pages/NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects/:id" element={<Projects />}></Route>
        <Route path="/account" element={<Account />}></Route>
      </Routes>
    </div>
  );
};

export default App;
