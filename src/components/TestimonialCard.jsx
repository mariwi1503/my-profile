import React from "react";

function TestimonialCard({ name, image, review, designation }) {
  return (
    <div className="bg-secondary text-primary rounded-xl ">
      <div className="rounded-t-xl bg-indigo-300 flex justify-center items-center flex-col text-center">
        <img
          src={image}
          alt=""
          className="h-28 w-28 rounded-full border-2 border-orange mt-4 mb-2"
        />
        <p className="text-xl font-semibold">{name}</p>
        <p className="text-xl font-semibold mb-3">{designation}</p>
      </div>
      <div className="flex flex-col gap-4 p-4 justify-center items-center">
        <p className="text-center">{review}</p>
        <a href="#"></a>
      </div>
    </div>
  );
}

export default TestimonialCard;
