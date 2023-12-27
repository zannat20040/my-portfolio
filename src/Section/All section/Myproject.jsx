import React from 'react';
import Project from './Project/Project';
import Project2 from './Project/Project2';
import Project3 from './Project/Project3';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const Myproject = () => {
    AOS.init();

    return (
        <div>
            <div className="mt-32 " id='scrollToProjects'>
        <p data-aos="fade-right"  className="font-medium text-2xl text-accent">03. My Projects</p>
      </div>
      <div>
       <Project2></Project2>
       <Project></Project>
       <Project3></Project3>
      </div>
        </div>
    );
};

export default Myproject;