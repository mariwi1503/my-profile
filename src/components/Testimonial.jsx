import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialCard from "./TestimonialCard";
import { testimonial } from "../constant";
import TestimonialModal from "../modals/TestimonialModal";

function Testimonial() {
  const [selectedReview, setSelectedReview] = useState(null);

  const handleReadMore = (item) => {
    setSelectedReview(item);
  };

  const closeModal = () => {
    setSelectedReview(null);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 767, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="testimony" className="w-full mx-auto px-5">
      <div className="mb-5">
        <h3 className="text-3xl sm:text-4xl font-medium">Testimonies</h3>
        <div className="h-1 w-32 lg:w-[12rem] bg-orange rounded-lg mt-2"></div>
      </div>
      <div className="px-2">
        <Slider {...settings}>
          {testimonial.map((item, index) => (
            <TestimonialCard
              key={index}
              {...item}
              onReadMore={() => handleReadMore(item)}
            />
          ))}
        </Slider>
      </div>

      {selectedReview && (
        <TestimonialModal item={selectedReview} onClose={closeModal} isOpen={selectedReview ? true : false}/>
      )}
    </section>
  );
}

export default Testimonial;
