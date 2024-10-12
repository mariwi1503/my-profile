import React from "react";

function ExperienceCard({
  logo,
  company,
  role,
  job,
  start,
  end,
  city,
  country,
  location,
}) {
  return (
    <div className="flex p-2 bg-slate-900 rounded-lg w-full h-50 md:w-[360px] mb-5 lg:w-[470px] hover:cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95">
      <div className="w-1/6">
        <img src={logo} alt="Image" className="rounded-lg" />
      </div>
      <div className="w-5/6 bg-read-200 pl-2 text-secondary">
        <h3 className="font-bold text-lg">{role}</h3>
        <p>{`${company} - ${job}`}</p>
        <p>{`${start} - ${end}`}</p>
        <p>{`${city}, ${country} - ${location}`}</p>
      </div>
    </div>
  );
}

export default ExperienceCard;
