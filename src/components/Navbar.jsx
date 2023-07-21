import React from "react";
import { BsFillSearchHeartFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <header className="bg-cyan-400 flex items-center justify-center w-[100%]">
        <div className="bg-cyan-300 md:w-[420px] w-[210px] rounded-[999px] px-2 py-2 my-2 mx-2">
          <section className="flex gap-1">
            <div className="flex items-center justify-center">
              <input
                type="text"
                placeholder="Search for the Items"
                className="bg-cyacn-300 rounded-3xl md:w-[400px] p-2 focus:outline-none text-cyan-700 "
              />
            </div>
            <div className="md:my-2 md:mx-[-35px] mx-[-36px] my-3">
              <BsFillSearchHeartFill className="md:w-6 md:h-5 w-6 h-5" />
            </div>
          </section>
        </div>
      </header>
    </>
  );
};

export default Navbar;
