import React from "react";
import Home from "../Home/Home";
import Navbar from "../Nabvar/Navbar";
import Footer from "../All section/Footer";
const Main = () => {
 
  return (
    <>
      <div className="bg-accent sticky top-0 z-50">
        <Navbar></Navbar>
      </div>
      <Home></Home>
      <div  className=" mt-24 ">
        <Footer></Footer>
      </div>
    </>
  );
};

export default Main;
