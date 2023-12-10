import React from "react";
import { features } from "../Allobjects";

const Feature = () => {

  
  return (
    <div className="text-white">
      <div className="">
        <p className="font-medium text-emerald-400">Features</p>
        <h1 className="text-5xl font-bold mt-5 ">What I do</h1>
      </div>
<div className="grid grid-cols-4 gap-6">

  {
    features.map(feature=>(
      <div className="card mt-10 bg-base-200 shadow-2xl rounded-md">
  <div className="card-body">
    <h2 className="text-4xl text-emerald-300 mb-5">{feature.icon}</h2>
    <h2 className="card-title text-2xl">{feature.title}</h2>
    <p>{feature.description}</p>
    
  </div>
</div>
    ))
  }
</div>
    </div>
  );
};

export default Feature;
