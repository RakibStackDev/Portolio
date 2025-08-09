import React, { useState, useEffect } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import { Link } from "react-router-dom";
import SocialLinks from "../components/SocialLinks";
import Komentar from "../components/Commentar";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";
import Reviews from "../components/Reviews";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 5, // Default for large screens
    slidesToScroll: 1,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 0, // must be 0 for smooth linear
    cssEase: "linear", // makes it constant speed

    speed: 8000, // 8 seconds for full slide

    responsive: [
      {
        breakpoint: 1200, // below 1200px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "10px",
        },
      },
      {
        breakpoint: 900, // below 900px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600, // below 600px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "20px",
        },
      },
    ],
  };

  return (
    <>
      <div
        id="Testimonial"
        className="text-center lg:mt-[5%] mt-10 mb-2 sm:px-0 px-[5%] py-[3%]"
      >
        <h2
          data-aos="fade-down"
          data-aos-duration="1000"
          className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7]"
        >
          <span
            style={{
              color: "#6366f1",
              backgroundImage:
                "linear-gradient(45deg, #6366f1 10%, #a855f7 93%)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Testimonial
          </span>
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="1100"
          className="text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2"
        >
          What other people has to say about my work and services.
        </p>
      </div>
      <div className="slider-container w-full p-0 ">
        <Slider {...settings}>
          <Reviews
            title="Fantastic Experience!"
            description="Everything was delivered exactly as promised, with great attention to detail. I appreciate the dedication and effort put into ensuring everything was perfect."
            name="Hannah Scott"
            role="Marketing Specialist"
          />
          <Reviews
            title="Amazing Work!"
            description="The attention to detail and premium quality exceeded my expectations. The customer service was exceptional, and the product arrived earlier than expected. I'm thoroughly impressed with every aspect of my purchase."
            name="Asif"
            role="Business Owner"
          />
          <Reviews
            title="Above and Beyond!"
            description="Not only did they meet my requirements, but they also offered suggestions that made the project even better. Truly a pleasure to work with."
            name="Michael Patel"
            role="Entrepreneur"
          />
          <Reviews
            title="Highly Recommended!"
            description="The professionalism and skill were evident in every step of the project. Deadlines were met without compromising on quality, and the final product was flawless."
            name="Sophia Lee"
            role="UI/UX Designer"
          />
          <Reviews
            title="Exceptional Service!"
            description="From start to finish, the entire process was smooth and stress-free. The communication was prompt, and the quality delivered far exceeded what I had imagined."
            name="David Khan"
            role="Project Manager"
          />
          <Reviews
            title="Outstanding Experience!"
            description="The attention to detail and premium quality exceeded my expectations. The customer service was exceptional, and the product arrived earlier than expected. I'm thoroughly impressed with every aspect of my purchase."
            name="Ameerah"
            role="Senior Developer"
          />
        </Slider>
      </div>
    </>
  );
};

export default Testimonial;
