import React from "react";

function TestimonialCard({ name, image, review, designation, linkedin }) {
  return (
    <div className="bg-secondary  rounded-xl font-poppins">
      <div className="rounded-t-xl text-white bg-gradient-to-r from-blue-500 to-purple-600 flex justify-center items-center flex-col text-center">
        <img
          src={image}
          alt=""
          className="h-28 w-28 rounded-full border-2 border-orange mt-4 mb-2"
        />
        <p className="text-xl">{name}</p>
        <p className="text-xl font-bold mb-3">{designation}</p>
      </div>
      <div className="flex flex-col gap-4 p-4 justify-center text-slate-900 items-center">
        <p className="text-center h-32">{review}</p>
        <a
          className="bg-gradient-to-r from-blue-500 to-purple-600 py-2 px-4 rounded-md text-white hover:scale-105 active:scale-95"
          href={linkedin}
          target="_blank"
        >
          View Profile
        </a>
      </div>
    </div>
  );
}

export default TestimonialCard;
