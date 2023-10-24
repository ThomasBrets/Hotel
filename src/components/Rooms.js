import React, { useContext } from "react";

// Context
import { roomContext } from "../context/RoomContext";

// Components
import Room from "./Room";

// Loader
import { SpinnerCircularSplit } from "spinners-react";

const Rooms = () => {
  const { rooms, loading } = useContext(roomContext);

  return (
    <section id="#rooms" className="py-24">
      {/* overlay && spinner */}
      {loading && (
        <div className="h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex items-center justify-center">
          <SpinnerCircularSplit size={50} thickness={100} speed={100} color="#a37d4c" secondaryColor="rgba(0, 0, 0, 0.44)" />
        </div>
      )}
      <div className="container mx-auto lg:px-0" >
        <div className="text-center">
          <div className="font-tertiary uppercase text-[15px] tracking-[6px]">
            Hotel & Spa Andina
          </div>
          <h2 className="font-primary text-[45px] mb-4">
            Room & Suite
          </h2>
        </div>
     <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px] lg:grid-cols-3 lg:max-w-none lg:mx-0">
      {rooms.map((room) => {

        return <Room room={room} key={room.id}/>
      })}
     </div>
      </div>
      
    </section>
  );
};

export default Rooms;
