// import React from 'react';


// Link
// import { Link, BsPeople } from 'react-router-dom'

// Icons
import { BsArrowsFullscreen } from 'react-icons/bs';
 



const Room = ({ room }) => {
  console.log(room);
  const { id, name, description, facilities, size, image, maxPerson, price } = room;
  
  return <div className='bg-white shadow-2xl min-h-[500px] group'>
    {/* Img */}
    <div className='overflow-hidden'>
    <img className='group-hover:scale-110 transition-all duration-300 w-full' src={image} alt=""/>
    </div>

    {/* Details */}
    <div className='bg-white shadow-lg max-w-[300px] mx-auto h-[60px] -translate-y-1/2 uppercase flex justify-center items-center font-tertiary tracking-[1px] font-semibold text-base'>
      <div className="flex justify-between w-[80%]">
      
        {/* size */}
      <div>
      <BsArrowsFullscreen />
      </div>

        {/* room capacity */}
      <div>
        people
      </div>
      
      {/* description
    <div>
      description
    </div>

     price 
    <div>
      price
    </div> */}

      </div>
    </div>
  </div>;
};



export default Room;
