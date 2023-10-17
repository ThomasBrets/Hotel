import React from 'react';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import "swiper/css"
import "swiper/css/effect-fade"

// import required modules
import { EffectFade, Autoplay } from 'swiper';

// images
import Img1 from "../assets/img/heroSlider/1.jpg"
import Img2 from "../assets/img/heroSlider/2.jpg"
import Img3 from "../assets/img/heroSlider/3.jpg"

const slides = [
  {
    title: "Your luxury hotel for vacation",
    bg: Img1,
    btnText: "Room & Suites"
  },
  {
    title: "Your luxury hotel for vacation",
    bg: Img2,
    btnText: "Room & Suites"
  },
  {
    title: "Your luxury hotel for vacation",
    bg: Img3,
    btnText: "Room & Suites"
  },
]


const HeroSlider = () => {
  return (
    <Swiper className='heroSlider h-[600px] lg:h-[860px]'>
      {slides.map((slide, index) => {
        return (
        <SwiperSlide className='h-full bg-pink-200 relative flex justify-center items-center' key={index}>
          <div>
            <div className="">Just enjoy and relax</div>
          </div>
          <div className='absolute top-0 h-full w-full'>
          <img className='object-cover h-full w-full' src={slide.bg} alt="" />
          </div>
          {/* overlay */}
          <div className='absolute h-full w-full bg-black/70'></div>
        </SwiperSlide>)
      })}
    </Swiper>
    )
};

export default HeroSlider;
