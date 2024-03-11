import React, { useState } from "react";
import "./styles/sidebar.css";
import {
  FaChartPie,
  FaAngleDown,
  FaCalendarAlt,
  FaCalendarDay,
  FaShoppingCart,
  FaGraduationCap,
  FaFlag,
  FaGlobe,
  FaLock,
} from "react-icons/fa";
import { IoChatbubbles, IoTabletLandscape } from "react-icons/io5";
import { TbMailOpenedFilled } from "react-icons/tb";
import { BsFillKanbanFill } from "react-icons/bs";
import { IoShareSocialSharp } from "react-icons/io5";

const Sidebar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="sidebar bg-slate-100  h-screen  ">
      <div className="sidebar-content p-3 font-semibold text-gray-600 h-full overflow-y-auto text-md">
        <div className="flex items-center font-semibold cursor-pointer mt-4">
          <FaChartPie aria-label="Dashboard Icon" className="FaChartPie" />
          <span className="ml-2 ">Dashboard</span>
          <FaAngleDown
            className={`ms-auto mx-1 FaAngleDown ${
              dropdownVisible ? "rotate-180" : ""
            }`}
            onClick={toggleDropdown}
          />
        </div>

        {dropdownVisible && (
          <div className="pl-6">
            {dropdownOptions.map((option, index) => (
              <div
                key={index}
                className="flex items-center font-semibold cursor-pointer mb-2"
              >
                <span>{option}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center my-4">
          <span className="text-gray-400 font-semibold">App</span>
          <hr className="border-gray-400 my-0 mx-2 w-full" />
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <FaCalendarAlt className="FaCalendarAlt" />
          <span className="ml-2">Calendar</span>
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <IoChatbubbles className="IoChatbubbles" />
          <span className="ml-2">Chat</span>
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <TbMailOpenedFilled className="TbMailOpenedFilled" />
          <span className="ml-2">Email</span>
          <FaAngleDown className="ms-auto mx-1 FaAngleDown" />
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <FaCalendarDay className="FaCalendarDay" />
          <span className="ml-2">Events</span>
          <FaAngleDown className="ms-auto mx-1 FaAngleDown" />
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <FaShoppingCart className="FaShoppingCart" />
          <span className="ml-2">E Commerce</span>
          <FaAngleDown className="ms-auto mx-1 FaAngleDown" />
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <FaGraduationCap className="FaGraduationCap" />
          <span className="ml-2">
            E Learning{" "}
            <span className="text-green-700 ml-2 p-1 text-[0.7rem] bg-green-200 rounded">
              New
            </span>
          </span>
          <FaAngleDown className="ms-auto mx-1 FaAngleDown" />
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <BsFillKanbanFill className="BsFillKanbanFill" />
          <span className="ml-2">Kanban</span>
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <IoShareSocialSharp className="IoShareSocialSharp" />
          <span className="ml-2">Social</span>
          <FaAngleDown className="ms-auto mx-1 FaAngleDown" />
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <IoTabletLandscape className="IoTabletLandscape" />
          <span className="ml-2">Support Desk</span>
          <FaAngleDown className="ms-auto mx-1 FaAngleDown" />
        </div>
        <div className="flex items-center my-4">
          <span className="text-gray-400 font-semibold">Pages</span>
          <hr className="border-gray-400 my-0 mx-2 w-full" />
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <FaFlag className="FaFlag" />
          <span className="ml-2">Starter</span>
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <FaGlobe className="FaGlobe" />
          <span className="ml-2">Learning</span>
        </div>
        <div className="flex items-center font-semibold cursor-pointer mb-4">
          <FaLock className="FaLock" />
          <span className="ml-2">Authentication</span>
          <FaAngleDown className="ms-auto mx-1 FaAngleDown" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
