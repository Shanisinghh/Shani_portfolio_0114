import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="md:flex md:flex-row flex-col-reverse   items-center py-2 gap-4 justify-center bg-[black] w-[100%] overflow-x-hidden ">
        <h3 className="text-center text-[white] ">
          © 2025 Copyright Portfolio Shani Babu
        </h3>
       <div className="flex flex-col md:flex-row justify-center items-center">
         <div className="flex flex-col justify-center ">
          <p className="text-center text-[white] text-md gap-1.5 flex items-center ">
           <TfiEmail className=""/> <span> : shanikushwaha8121@gmail.com</span>
          </p>
          <p className="text-center text-md text-[white] flex gap-1.5 items-center">
            <FaPhoneAlt />  <span> : 9555978716</span>
          </p>
        </div>
       </div>
      </div>
    </>
  );
}

export default Footer;
