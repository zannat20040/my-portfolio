export default function Education() {
  return (
    <div className=" card w-full  gap-3 ">
      <h1 className="text-3xl font-bold mt-5 text-white">Education</h1>
      <div
        data-aos="fade-left"
        className="card  rounded-none  bg-slate-950 shadow-2xl"
      >
        <div className="card-body ">
          <div className="flex flex-wrap justify-between gap-2 items-end">
            <h2 className="card-title text-accent">BSC in Computer Science </h2>
            <span>(2021 - 2025)</span>
          </div>
          <p>University of South Asia </p>
          <button className="bg-accent text-black px-4 py-1 w-fit">
            Runing
          </button>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="card  rounded-none  bg-slate-950 shadow-2xl"
      >
        <div className="card-body ">
          <div className="flex flex-wrap justify-between gap-2 items-end">
            <h2 className="card-title text-accent">
              Higher Secondary School Certificate
            </h2>
            <span>(2017 - 2019)</span>
          </div>
          <p>Milestone Collage </p>
          <button className="bg-accent text-black px-4 py-1 w-fit">
            4.42 / 5.00
          </button>
        </div>
      </div>
      <div
        data-aos="fade-left"
        className="card  rounded-none  bg-slate-950 shadow-2xl"
      >
        <div className="card-body ">
          <div className="flex flex-wrap justify-between gap-2 items-end">
            <h2 className="card-title text-accent">
              Secondary School Certificate{" "}
            </h2>
            <span>(2015 - 2017)</span>
          </div>
          <p>National Ideal School</p>
          <button className="bg-accent text-black px-4 py-1 w-fit">
            5.00 / 5.00
          </button>
        </div>
      </div>
    </div>
  );
}
