import React from "react";
import Home from "../Home/Home";
import Navbar from "../Nabvar/Navbar";
const Main = () => {
 
  return (
    <>
      <div className="bg-emerald-300 sticky top-0 z-50">
        <Navbar></Navbar>
      </div>
      <Home></Home>
    </>
  );
};

export default Main;
