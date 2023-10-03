import React from 'react';

// Components
import CheckIn from "../components/CheckIn"
import CheckOut from "../components/KidsDropdown"
import AdultsDropdown from "../components/AdultsDropdown"
import KidsDropdown from "../components/KidsDropdown"


const BookForm = () => {
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
    </div>
    </form>;
};

export default BookForm;
