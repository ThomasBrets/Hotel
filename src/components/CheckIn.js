import React, {useState} from 'react';

// datepicker
import Datepicker from 'react-datepicker'
// datepicker css
import "react-datepicker/dist/react-datepicker.css"
import "../datepicker.css"
// icons
import { BsCalendar } from "react-icons/bs"

const CheckIn = () => {
  const [startDate, setStartDate] = useState(false)
  return <div
  className='w-full h-full'
  selected={startDate}
  placeholderText='Check in' 
  >
    <Datepicker/>
  </div>;
};

export default CheckIn;
