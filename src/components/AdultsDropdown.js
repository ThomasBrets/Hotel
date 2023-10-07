import React, { useContext } from "react";
// room context
import { roomContext } from "../context/RoomContext";
// handless ui menu
import { Menu } from "@headlessui/react";
// icons
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "1 adult" },
  { name: "2 adults" },
  { name: "3 adults" },
  { name: "4 adults" },
];

const AdultsDropdown = () => {
  const { adults, setAdults } = useContext(roomContext);
  return (
    <Menu as="div" className="w-full h-full relative bg-white">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {adults}
        <BsChevronDown className="text-base text-accent-hover" />
      </Menu.Button>

      {/* items */}
      <Menu.Items
        as="ul"
        className="bg-white absolute w-full flex flex-col z-40"
      >
        {lis.map((li, index) => {
          return (
            <Menu.Item
              onClick={() => setAdults(li.name)}
              key={index}
              as="li"
              className="border-b last-of-type:border-b-0 h-12 w-full flex justify-center items-center hover:bg-accent hover:text-white cursor-pointer"
            >
              {li.name}
            </Menu.Item>
          );
        })}
      </Menu.Items>
    </Menu>
  );
};

export default AdultsDropdown;
