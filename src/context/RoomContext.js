import React from "react" 
import { createContext, useState } from "react";

// Data
import { roomData } from "../data";

// Create context
export const roomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData)
  const [adults, setAdults] = useState("1 adult")
  const [kids, setKids] = useState("0 kids")
  const [total, setTotal] = useState(0)
  console.log(`adults ${adults}, kids ${kids}`);
 
  // console.log("DATA", rooms);
  
  return (
    <roomContext.Provider value={{rooms, adults, setAdults, kids, setKids, total, setTotal}}>
      {children}
    </roomContext.Provider>
  );
};

export default RoomProvider;
