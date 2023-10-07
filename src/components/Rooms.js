import React, { useContext } from "react";

// Context
import { roomContext } from "../context/RoomContext";

// Components
import Room from "./Room";

const Rooms = () => {
  const { rooms } = useContext(roomContext);


 
  return (
    <section className="py-24">
      <div className="container mx-auto lg:px-0" >
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
