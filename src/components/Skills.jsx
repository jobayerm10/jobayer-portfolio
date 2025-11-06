import React from "react";

const Skills = () => {
  return (
    <div id="skills" className=" max-w-5xl mx-auto px-4">
      <h1 className="text-3xl text-accent text-center font-semibold mb-10 ">
        Skills
      </h1>
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-10">
        <button className="btn bg-[#728f73] hover:!bg-[#3f5040] hover:text-[#fff] px-5 py-3  md:py-1.5 rounded-md transition-all hover:duration-100 hover:scale-120 hover:shadow-md ">
          Web
        </button>

        <button className="btn  bg-[#728f73] hover:!bg-[#3f5040] hover:text-[#fff] px-5 py-3  md:py-1.5 rounded-md transition-all hover:duration-100 hover:scale-120 hover:shadow-md ">
          Tools
        </button>

        <button className="btn  bg-[#728f73] hover:!bg-[#3f5040] hover:text-[#fff] px-5 py-3  md:py-1.5 rounded-md transition-all hover:duration-100 hover:scale-120 hover:shadow-md ">
          Others
        </button>
      </div>
    </div>
  );
};

export default Skills;
