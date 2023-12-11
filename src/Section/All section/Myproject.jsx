import React from 'react';
import Project from './Project/Project';

const Myproject = () => {
    return (
        <div>
            <div className="mt-32 ">
        <p className="font-medium text-2xl text-emerald-400">03. My Projects</p>
      </div>
      <div>
       <Project></Project>
      </div>
        </div>
    );
};

export default Myproject;