export default function Skills() {
  return (
    <div className="grid gap-3 w-full">
      <h1 className="text-3xl font-bold mt-5 text-white">Technial Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <div data-aos="fade-right" className="">
            <p className="text-accent font-medium text-lg">HTML5</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-left" className="">
            <p className="text-accent font-medium text-lg">CSS3</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-right" className="">
            <p className="text-accent font-medium text-lg">Javascript</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-left" className="">
            <p className="text-accent font-medium text-lg">Tailwind</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-right" className="">
            <p className="text-accent font-medium text-lg">React</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-left" className="">
            <p className="text-accent font-medium text-lg">NextJs</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-right" className="">
            <p className="text-accent font-medium text-lg">Node</p>
            <progress
              className="progress w-full progress-warning"
              value="65"
              max="100"
            ></progress>
          </div>
        </div>

        <div>
          <div data-aos="fade-left" className="">
            <p className="text-accent font-medium text-lg">Express</p>
            <progress
              className="progress w-full progress-warning"
              value="65"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-right" className="">
            <p className="text-accent font-medium text-lg">MongoDB</p>
            <progress
              className="progress w-full progress-warning"
              value="60"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-left" className="">
            <p className="text-accent font-medium text-lg">Mongoose</p>
            <progress
              className="progress w-full progress-warning"
              value="65"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-right" className="">
            <p className="text-accent font-medium text-lg">Git</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-left" className="">
            <p className="text-accent font-medium text-lg">Github</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-right" className="">
            <p className="text-accent font-medium text-lg">Figma</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
          <div data-aos="fade-left" className="">
            <p className="text-accent font-medium text-lg">Vs Code</p>
            <progress
              className="progress w-full progress-warning"
              value="90"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
}
