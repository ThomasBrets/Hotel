import React, { useContext } from "react";

// Context
import { roomContext } from "../context/RoomContext";

// Components
import Room from "./Room";

const Rooms = () => {
  const { rooms } = useContext(roomContext);

  // console.log("ROOMS", rooms);

  return (
    <section className="bg-pink-200 py-24">
      <div className="container mx-auto lg:px-0" >
     <div className="grid grid-cols-1 max-w-sm mx-auto gap-[30px]">
      {rooms.map((room) => {
        // console.log(room);
        return <Room room={room} key={room.id}/>
      })}
     </div>
      </div>
      
    </section>
  );
};

export default Rooms;
