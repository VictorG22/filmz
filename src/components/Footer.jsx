import React from "react";
import Logo from "../assets/logo.svg";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <section
      id="footer"
      className="flex flex-col items-center my-5 mx-2 rounded-lg "
    >
      <div className="max-w-[1200px] w-full flex flex-col justify-center bg-gray-950 p-8 rounded-md animate-dynamic-glow">
        <div className="w-full grid grid-cols-2 md:grid-cols-4 justify-between text-white gap-8 my-4">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h3 className="drop-shadow-[0_0_10px_rgba(139,92,246,0.7)] text-white font-semibold mb-2 border-transparent hover:transparent uppercase">
                {section}
              </h3>
              <ul className="gap-y-2 flex flex-col">
                {links.map((link, index) => (
                  <li
                    key={index}
                    className="border-b border-transparent hover:border-b-white mr-auto cursor-not-allowed"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className=" w-[90%] mx-auto h-0.5 border-0 bg-linear-to-r from-gray-800 via-purple-700 to-pink-600 my-5 " />
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center text-xs">
          <img
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            src={Logo}
            alt=""
            className=" w-[10%] cursor-pointer"
          />

          <div className="text-[#e0e0e0]">
            Copyright © {new Date().getFullYear()} Victor Gaona
          </div>
          <div className="flex gap-2 text-[#e0e0e0] text-xs">
            <p className="border border-transparent hover:border-b-white cursor-not-allowed">
              Privacy Policy
            </p>
            <p className="border border-transparent hover:border-b-white cursor-not-allowed">
              ToS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
