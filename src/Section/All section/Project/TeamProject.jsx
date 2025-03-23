/* eslint-disable react/prop-types */

const TeamProject = ({ project }) => {
  return (
    <div className="hero mt-14">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:flex-row">
        <div className="image-container ">
          <div
            className={`${project?.img} bg-cover bg-top h-full  duration-500 transition-all ease-in-out `}
          ></div>
        </div>
        <div data-aos="fade-up" className="">
          <h1 className=" mt-4 text-5xl font-bold text-accent">
            {project?.title}
          </h1>
          {/* <h1 className=" mt-4 text-5xl font-bold text-accent">Bank System</h1> */}
          {/* <p className="py-6">
            It is a multilevel transaction system for safe and efficient
            financial operations. It checks and approves transactions at
            different levels, making sure everything is secure and reliable.
          </p>*/}
          <p className="py-6">{project?.description}</p>
          <div className="flex gap-2 flex-wrap">
            {/* <p className="  text-accent  ">Tailwind</p>
            <p className="  text-accent  ">React</p>
            <p className=" text-accent  ">Node</p>
            <p className=" text-accent ">Express</p>
            <p className="  text-accent ">Mongodb</p>
            <p className="  text-accent ">Mongoose</p> */}

            {project?.technologies?.map((tech) => (
              <p key={tech} className="  text-accent ">
                {tech}
              </p>
            ))}
          </div>
          <div className="flex gap-2 mt-3 flex-wrap">
            {project?.links?.map((link, index) => (
              <a key={index} href={link?.url} target="_blank" rel="noreferrer">
                <button className="border btn  py-4 px-10 bg-slate-950 text-white  rounded-md ">
                  {link?.site}
                </button>
              </a>
            ))}
            {/* <a
              href="https://github.com/hexadev6/sentinel-bank-client"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border btn  py-4 px-16 bg-slate-950 text-white  rounded-md ">
                Client code
              </button>
            </a>
            <a
              href="https://github.com/hexadev6/sentinel-bank-server"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border btn  py-4 px-16 bg-slate-950 text-white  rounded-md ">
                Server code
              </button>
            </a>
            <a
              href="https://sentinel-trust-bank.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="border btn py-2 px-16 bg-slate-950 text-white  rounded-md ">
                Live
              </button>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamProject;
