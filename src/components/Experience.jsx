import React from "react";
import ExperienceCard from "./ExperienceCard";
import { experienceList } from "../constant";

function Experience() {
  return (
    <section id="experience" className="mb-10">
      <div className="px-5">
        <h3 className="text-3xl sm:text-4xl font-medium">Experience</h3>
        <div className="h-1 w-32 bg-orange rounded-lg mt-2"></div>
      </div>
      {/* experience container */}
      <div className="flex mt-5 px-5 flex-wrap justify-center md:gap-2 lg:justify-between">
        {experienceList.map((item, index) => (
          <ExperienceCard {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Experience;
