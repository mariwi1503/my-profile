import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import { testimonial } from "../constant";

function Testimonial() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <section id="testimony" className="w-full mx-auto mt-20 px-5 md:px-0">
      <div className="mb-10 ">
        <h3 className="text-3xl sm:text-4xl font-medium">What they said</h3>
        <div className="h-1 w-32 lg:w-[12rem] bg-orange rounded-lg mt-2"></div>
      </div>
      <div>
        <Slider {...settings}>
          {testimonial.map((item, index) => (
            <TestimonialCard key={index + 1} {...item} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
