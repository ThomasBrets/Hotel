import React, { useContext } from "react";
// room context
import { roomContext } from "../context/RoomContext";
// handless ui menu
import { Menu } from "@headlessui/react";
// icons
import { BsChevronDown } from "react-icons/bs";

const lis = [
  { name: "0 kids" },     
  { name: "1 kid" },
  { name: "2 kids" },
  { name: "3 kids" },
  { name: "4 kids" },
];

const KidsDropdown = () => {
  const { kids, setKids } = useContext(roomContext);
  return (
    <Menu as="div" className="w-full h-full relative bg-white">
      {/* btn */}
      <Menu.Button className="w-full h-full flex items-center justify-between px-8">
        {kids === "0 kids" ? "None" : kids}
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
              onClick={() => setKids(li.name)}
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

export default KidsDropdown;
