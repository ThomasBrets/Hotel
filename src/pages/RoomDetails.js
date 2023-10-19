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

const RoomDetails = () => {
  const { rooms } = useContext(roomContext);

  const { id } = useParams();
  // console.log("ID =>", id);

  const room = rooms.find((room) => {
    return room.id === Number(id);
  });
  // console.log("ROOM", room);

  // Destructure room
  const { name, description, facilities, imageLg, maxPerson, price, size } = room;

  return (
  <div className="">
    {/* banner */}
    <div className="bg-room bg-cover bg-center h-[560px] relative flex justify-center items-center">
      {/* overlay */}
      <div className="bg-black/70 h-full w-full absolute"></div>
      {/* title */}
      <h1 className="text-white text-center text-6xl font-primary z-20">{name} Details
      </h1>
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row h-full py-24">
          {/* left */}
          <div className="w-full h-full lg:w-[60%] text-justify px-6 bg-yellow-100">
            <h2 className="h2">{name}</h2>
            <p className="mb-8">{description}</p>
            <img className="mb-8" src={imageLg} alt="" />
            {/* facilities */}
            <div className="mt-3">
              <h3 className="h3 mb-3">Room facilities</h3>
              <p className="mb-12">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nisi quo harum aperiam soluta magni odio quas facere nam perferendis rem nihil, repellendus velit culpa repellat ipsa reiciendis! Laboriosam, facere.
              </p>
              {/* grid */}
              <div className="mb-4">
              {facilities.map((item, index) => {
                const { name, icon } = item
                return <div key={index}>
                  <div className="flex justify-start gap-3">
                  {name}
                  {icon}
                  </div>
                </div>
              })}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full h-full lg:w-[40%] text-justify bg-blue-400">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt ipsum labore atque fugiat asperiores odit mollitia praesentium incidunt nihil nemo recusandae debitis aperiam.
          </div>
        </div>
      </div>
  </div>)
};

export default RoomDetails;
