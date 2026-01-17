import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Import Swiper styles
import { Navigation, Pagination, Autoplay } from "swiper/modules"; // Import modules
import { Link } from "react-router-dom";

const CarouselWithBackground = ({ slides }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]} // Add Autoplay module here
      navigation
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000, disableOnInteraction: false }} // Autoplay settings
      className=""
    >
      {slides.map((slide) => (
        <SwiperSlide
          key={slide._id}
          className="relative flex flex-col items-center justify-center min-h-[60vh] md:min-h-[80vh]"
          style={{
            backgroundImage: `url(${slide.bgImage})`, // Ensure proper URL syntax
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
          }}
        >
          <div className="flex items-center space-x-3 rtl:space-x-reverse font-cormorant max-w-5xl">
            <div className="absolute inset-0 bg-black opacity-50" />{" "}
            {/* Optional overlay for better text visibility */}
            <div className="relative z-10 text-center px-4 md:px-12 py-8">
              {/* Arabic Heading */}
              <h2
                className="text-white  md:block text-4xl md:text-6xl font-bold  font-cormorant mx-auto text-center leading-snug"
                dir="rtl"
                style={{ maxWidth: "800px" }}
              >
                {slide.contentArabic}
              </h2>
              {/* English Heading */}
              {/* <h2 className="text-white text-4xl md:text-6xl font-bold mb-2 font-cormorant">
                {slide.content}
              </h2> */}

              {/* Subcontent */}
              <p
                className="text-white text-2xl md:text-4xl hidden md:block font-cormorant mx-auto text-center leading-relaxed"
                style={{ maxWidth: "1200px" }}
              >
                {slide.subcontent}
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselWithBackground;
