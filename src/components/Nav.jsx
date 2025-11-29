import React, { useState } from "react";
import Logo from "../assets/logo.svg";
import { navLinks } from "../constants";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <div className=" sticky top-0 z-50 bg-[rgba(0,0,0,0.5)]  flex justify-center ">
      <div className="max-w-[1200px] w-full h-[100px] flex items-center justify-between px-6 py-2">
        <Link to={"/"}>
          <img className="h-[100px]" src={Logo} alt="" />
        </Link>

        <div className="flex justify-center items-center">
          <ul className="text-[#E0E0E0] flex max-md:hidden">
            {navLinks.map((item) => (
              <Link
                className={`ml-4 border-2 border-transparent hover:border-b-[#E0E0E0] ${item.pointer}`}
                to={item.link}
                key={item.label}
              >
                <li className="" key={item.label}>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>

          <Link
            className="ml-6 px-6 py-2 font-semibold text-[#E0E0E0] bg-[#E50914] rounded-full transition duration-300 hover:bg-[#FFC107] hover:text-[#E50914]"
            to="/search"
          >
            Search
          </Link>
          <div className="hidden max-md:block ml-4 cursor-pointer ">
            <Menu
              className="text-white hover:text-[#e50914] duration-300 transition "
              onClick={() => setIsOpen((prev) => !prev)}
            />
            <div
              className={`
    fixed inset-x-0 top-0 z-45 bg-linear-to-r from-[#0a1a3a] via-[#4b0d2a] to-[#0a1a3a] shadow-lg flex justify-center items-center
    transition-transform duration-300 h-screen 
    ${isOpen ? "translate-y-0" : "-translate-y-full"}
  `}
            >
              <div className="p-24 m-auto rounded-sm bg-[rgba(0,0,0,0.5)]">
                <ul className="z-50 text-[#E0E0E0]  flex flex-col text-center text-2xl gap-y-15">
                  {navLinks.map((item) => (
                    <Link
                    onClick={() => setIsOpen((prev) => !prev)}
                      className={` ${item.pointer}`}
                      to={item.link}
                      key={item.label}
                    >
                      <li className="" key={item.label}>
                        {item.label}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
                <X className="absolute top-[5%] right-[10%] text-white h-[50px] w-[50px]" onClick={() => setIsOpen((prev) => !prev)}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
