import React, { useContext } from 'react';

// Components
import CheckIn from "../components/CheckIn"
import CheckOut from "../components/CheckOut"
import AdultsDropdown from "../components/AdultsDropdown"
import KidsDropdown from "../components/KidsDropdown"
import { roomContext } from '../context/RoomContext';
import { roomData } from "../data";


const BookForm = () => {
  const { handleClick } = useContext(roomContext)

  return <form className='h-[300px] bg-slate-300 w-full lg:h-[70px]'>
    <div className='flex flex-col w-full h-full lg:flex-row'>
      <div className="flex-1 border-r">
        <CheckIn />
      </div>
      <div className="flex-1 border-r">
        <CheckOut />
      </div>
      <div className="flex-1 border-r">
        <AdultsDropdown />
      </div>
      <div className="flex-1 border-r">
        <KidsDropdown />
      </div>
     
      {/* btn */}
      <button
      onClick={(e) => handleClick(e)}
      type='submit'
      className='btn btn-primary'>
        Check Now
      </button>
    </div>
    </form>;
};

export default BookForm;
