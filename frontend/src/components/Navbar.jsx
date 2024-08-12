import React from "react";
import { NavLink } from "react-router-dom";
import tufLogo from "../assets/tuflogo.png";
import WhiteButton from "./WhiteButton";

const Navbar = () => {
  return (
    <nav className="w-full border-b-2 border-zinc-500/20 flex items-center">
      <div className="max-[450px]:w-[90%] w-4/5 mx-auto p-3 flex items-center">
        <NavLink to={"/"} className="mr-5 flex items-center gap-3">
          <img
            src={tufLogo}
            alt="tuf logo"
            className="w-10 h-10 rounded-full"
          />
          <span className="font-inter font-bold text-xl max-[450px]:text-base text-[#F5F5F5]">
            takeUforward
          </span>
        </NavLink>
        <WhiteButton label="Dashboard"></WhiteButton>
      </div>
    </nav>
  );
};

export default Navbar;
