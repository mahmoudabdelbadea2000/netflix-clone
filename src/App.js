import React from "react";
import "./App.css";
import Nav from "./components/navBar/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Nav />
      <>
        <Outlet />
      </>
    </div>
  );
}

export default App;
