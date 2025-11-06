import React, { useState } from "react";
import skillsData from "../Data/skillsData.json";

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Web");

  const currentSkills = skillsData[activeTab] || [];
  const categories = Object.keys(skillsData || {});

  return (
    <div id="skills" className="max-w-5xl mx-auto px-4">
      <h1 className="text-3xl text-accent text-center font-semibold mb-10">
        Skills
      </h1>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-md border transition-all duration-200 
              ${
                activeTab === category
                  ? "bg-[#728f73] text-white shadow-md"
                  : "bg-transparent border-[#728f73] text-[#728f73] hover:bg-[#3f5040] hover:text-white"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center">
        {currentSkills.map((skill) => (
          <div
            key={skill.name}
            className="group border rounded-xl shadow-md p-5 flex flex-col justify-center items-center 
                       hover:scale-105 hover:shadow-lg transition-all duration-200 cursor-pointer"
          >
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-10 h-10 mb-3 group-hover:scale-110 transition-transform duration-200"
            />
            <p className="font-medium text-sm md:text-base text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
