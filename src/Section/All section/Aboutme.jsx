import React from "react";

const Aboutme = () => {
  return (
    <>
      <div  id="sectionToScroll">
      <div className="">
        <p className="font-medium text-2xl text-emerald-400">01. Know me</p>
      </div>
      <div className="hero min-h-screen ">
        <div className="hero-content p-0 flex-col lg:flex-row-reverse">
          <img
            src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              I'm a web developer with a passion for transforming ideas into
              user-friendly and visually appealing websites. I thrive on
              problem-solving, constantly seeking creative solutions to
              challenges in the ever-evolving digital landscape. Committed to
              staying on the cutting edge of technology, I stay up-to-date with
              the latest trends and tools in web development.
              <br /><br />
              My journey in this field has been driven by a love for creating
              seamless and engaging online experiences. I bring a blend of
              technical skills and design sensibilities to the table, ensuring
              that every project I undertake is not only functional but also
              aesthetically pleasing.
              <br /><br />
              With a continuous hunger for learning and refining my craft, I am
              excited about the opportunity to collaborate on innovative
              projects. Let's work together to bring your digital ideas to life
              and create something truly remarkable!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Aboutme;
