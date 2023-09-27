import React, { createContext, useEffect, useState } from "react";

// Data
import { roomData } from "../data";

// Create context
export const roomContext = createContext();

const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState(roomData)
 
  // console.log("DATA", rooms);
  
  return (
    <roomContext.Provider value={{rooms}}>
      {children}
    </roomContext.Provider>
  );
};

export default RoomProvider;
