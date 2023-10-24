import React, { useContext } from "react";
import { useParams } from "react-router-dom";

// Components
import CheckIn from "../components/CheckIn";
import CheckOut from "../components/CheckOut";
import AdultsDropdown from "../components/AdultsDropdown";
import KidsDropdown from "../components/KidsDropdown";

//Scroll top Component
import ScrollToTop from "../components/ScrollToTop";

// Context
import { roomContext } from "../context/RoomContext";

// Icons
import { FaCheck } from "react-icons/fa";
import { FaTimes } from 'react-icons/fa';
// import { AiOutlineClose } from "react-icons/ai";

const RoomDetails = () => {
  const { rooms } = useContext(roomContext);

  const { id } = useParams();
  // console.log("ID =>", id);

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  // console.log("ROOM", room);

  // Destructure room
  const { name, description, facilities, imageLg, maxPerson, price, size } =
    room;

  return (
    <section className="">
      <ScrollToTop/>
      {/* banner */}
      <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
        {/* overlay */}
        <div className="bg-black/70 h-full w-full absolute"></div>
        {/* title */}
        <h1 className="text-white text-center text-6xl font-primary z-20">
          {name} Details
        </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] text-justify px-6">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="" />
            {/* facilities */}
            <div className="mt-3">
              <h3 className="h3 mb-3">Room facilities</h3>
              <p className="mb-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Expedita nisi quo harum aperiam soluta magni odio quas facere
                nam perferendis rem nihil, repellendus velit culpa repellat ipsa
                reiciendis! Laboriosam, facere.
              </p>
              {/* grid */}
              <div className="mb-12 grid grid-cols-3 gap-6">
                {facilities.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <div
                      key={index}
                      className="flex items-center justify-start gap-3 flex-1"
                    >
                      <div className="text-3xl text-accent">{icon}</div>
                      <div className="text-accent font-primary font-semibold">{name}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-full lg:w-[40%] text-justify">
            {/* reservation */}
            <div className="py-8 px-6 bg-primary mb-12">
              <div className="flex flex-col space-y-4 mb-4 w-full">
                <h3 className="text-accent text-lg font-primary uppercase text-center">
                  Your reservation
                </h3>
                <div className="h-[60px]">
                  <CheckIn />
                </div>
                <div className="h-[60px]">
                  <CheckOut />
                </div>
                <div className="h-[60px]">
                  <AdultsDropdown />
                </div>
                <div className="h-[60px]">
                  <KidsDropdown />
                </div>
              </div>
              <button className="btn btn-lg btn-primary w-full">
                Book now for ${price}
              </button>
            </div>
            {/* rules */}
            <div>
              <h3 className="h3">Hotel Rules</h3>
              <p className="mb-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Delectus soluta est sequi totam.
              </p>
              <ul className="flex flex-col gap-y-4">
                <li className="flex items-center gap-x-4 text-accent font-primary text-lg font-semibold">
                  <FaCheck />
                  Check-in: 3:00 PM - 9:00 PM
                </li>
                <li className="flex items-center gap-x-4 text-accent font-primary text-lg font-semibold">
                  <FaCheck />
                  Check-out: 10:30 AM
                </li>
                <li className="flex items-center gap-x-4 text-accent font-primary text-lg font-semibold">
                  <FaTimes />
                  No Pets
                </li>
                <li className="flex items-center gap-x-4 text-accent font-primary text-lg font-semibold">
                  <FaTimes />
                  No Smoking
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoomDetails;
