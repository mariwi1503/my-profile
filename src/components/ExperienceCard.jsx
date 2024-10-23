import React from "react";
import { FaCheckCircle } from "react-icons/fa"; // Mengimpor ikon centang

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
  isActive, // Tambahkan prop untuk status aktif
  onClick,
}) {
  return (
    <div
      className="relative flex p-2 bg-slate-900 rounded-lg w-full h-50 md:w-[360px] mb-5 lg:w-[470px] hover:cursor-pointer transform transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"
      onClick={onClick}
    >
      {/* Icon centang di pojok kanan atas jika aktif */}
      {isActive && (
        <div className="absolute top-2 right-3 p-1">
          <FaCheckCircle className="text-secondary w-6 h-6" />
        </div>
      )}

      <div className="w-1/6">
        <img src={logo} alt="Company logo" className="rounded-lg" />
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
