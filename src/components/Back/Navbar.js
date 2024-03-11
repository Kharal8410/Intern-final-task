import { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FaSun, FaShoppingCart } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { CgMenuGridO } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [openMenuBar, setOpenMenuBar] = useState(false);

  return (
    <>
      <nav className="mx-auto px-4 bg-slate-100 ">
        <div className="relative flex items-center justify-between py-4">
          <div className="flex gap-12">
            <button
              type="button"
              onClick={() => setOpenMenuBar(!openMenuBar)}
              className="text-2xl font-semibold focus:outline-none"
            >
              <RxHamburgerMenu />
            </button>
            <h1 className="font-bold text-xl sm:text-2xl">Logo</h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-slate-50 text-gray-700 pl-8 pr-3 py-1 rounded-xl focus:outline-none w-64 border border-gray-500"
              />
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <BiSearchAlt2 className="text-gray-500" />
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <div className="flex items-center ml-4">
              <FaSun className="text-xl mr-2 cursor-pointer" />
              <FaShoppingCart className="text-xl mr-2 cursor-pointer" />
              <IoIosNotifications className="text-xl mr-2 cursor-pointer" />
              <CgMenuGridO className="text-xl cursor-pointer" />
            </div>
            <img
              className="h-8 w-8 rounded-full ml-4"
              src="https://img.freepik.com/premium-photo/letter-m-with-blue-background-gold-letters_793585-33.jpg"
              alt=""
            />
          </div>
        </div>
      </nav>
      {openMenuBar && <Sidebar />}
    </>
  );
};

export default Navbar;
