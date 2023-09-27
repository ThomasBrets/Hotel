import React from 'react';

// Link
import { Link, BsPeople } from 'react-router-dom'

// Icons
import {BsArrowsFullScreenIcon} from 'react-icons/bs'



const Room = ({ room }) => {
  console.log(room);
  const { id, name, description, facilities, size, image, maxPerson, price } = room;
  
  return <div className='bg-white shadow-2xl min-h-[500px] group'>
    {/* img */}
    
    <div className='overflow-hidden'>
    <img className='group-hover:scale-110 transition-all duration-300 w-full' src={image} alt=""/>
    </div>
  </div>;
};

export default Room;
