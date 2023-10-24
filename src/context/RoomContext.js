import React, { useEffect } from "react";
import { createContext, useState } from "react";

// Data
import { roomData } from "../data";

// Create context
export const roomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData);
  const [adults, setAdults] = useState("");
  const [kids, setKids] = useState("0 kids");
  const [total, setTotal] = useState(0);
  const  [loading, setLoading] = useState(false)

  useEffect(() => {
    setTotal(Number(adults[0]) + Number(kids[0]));
  }, [adults, kids]);

  const handleClick = (e) => {
    e.preventDefault();    
    setLoading(true)
    const newRooms = roomData.filter((room) => {
      return total <= room.maxPerson;
    });

    setTimeout(() => {
      setRooms(newRooms);
      setLoading(false)
    },3000)
  };
  
  // console.log(rooms);

  // console.log(`adults ${adults}, kids ${kids}`);
  // console.log("DATA", rooms);

  return (
    <roomContext.Provider
      value={{
        rooms,
        adults,
        setAdults,
        kids,
        setKids,
        total,
        setTotal,
        handleClick,
        loading
      }}
    >
      {children}
    </roomContext.Provider>
  );
};

export default RoomProvider;
