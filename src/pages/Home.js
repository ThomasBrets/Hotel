import React from "react";

// Components
import Rooms from "../components/Rooms";
import BookForm from "../components/BookForm";
import HeroSlider from "../components/HeroSlider";

const Home = () => {
  return (
    <>
    <HeroSlider />
      <div className="container mx-auto relative">
        <div className="bg-black mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12">  
        <BookForm />
        </div>
      </div>
      <Rooms />
    </>
  );
};

export default Home;
