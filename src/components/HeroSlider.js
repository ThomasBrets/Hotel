import React from "react";

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// import required modules
import { EffectFade, Autoplay } from "swiper";

// images
import Img1 from "../assets/img/heroSlider/1.jpg";
import Img2 from "../assets/img/heroSlider/2.jpg";
import Img3 from "../assets/img/heroSlider/3.jpg";

const slides = [
  {
    title: "Your luxury hotel for vacation",
    bg: Img1,
    btnText: "See our rooms",
  },
  {
    title: "Your luxury hotel for vacation",
    bg: Img2,
    btnText: "See our rooms",
  },
  {
    title: "Your luxury hotel for vacation",
    bg: Img3,
    btnText: "See our rooms",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect={"fade"}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      className="heroSlider h-[600px] lg:h-[860px]"
    >
      {slides.map((slide, index) => {
        // Destructure slide
        const { title, bg, btnText } = slide;

        return (
          <SwiperSlide
            className="h-full bg-pink-200 relative flex justify-center items-center"
            key={index}
          >
            <div className="z-20 text-white text-center">
              <div className="uppercase font-tertiary tracking-[6px] mb-5">
                Just enjoy and relax
              </div>
              <h1 className="font-primary uppercase tracking-[2px] text-[32px] max-w-[920px] lg:text-[68px] leading-tight mb-6">
                {title}
              </h1>
              <button className="btn btn-primary btn-lg mx-auto rounded">
                {btnText}
              </button>
            </div>
            <div className="absolute top-0 h-full w-full">
              <img className="object-cover h-full w-full" src={bg} alt="" />
            </div>
            {/* overlay */}
            <div className="absolute h-full w-full bg-black/70"></div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HeroSlider;
