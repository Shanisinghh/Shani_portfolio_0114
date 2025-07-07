import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import certificates from "../data/Data";
import Aos from "aos";
import "aos/dist/aos.css";



function Certificates() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  },[])
  // console.log(certificates);
  return (
    <>
      <div className="md:mt-20 mt-15">
        <div>
          <h1 className=" md:ml-7 ml-3 md:text-4xl text-2xl font-bold text-[var(--textcolor)]">
            Certificates
          </h1>
          <div className="flex mt-4  flex-wrap gap-3.5 pb-4  justify-center">
            {certificates.map((certificate) => (
              <div key={certificate.id} data-aos={certificate.animation} className="box hover:transform hover:translate-y-[-2px] relative gap-3 md:w-[311px] w-[95vw] pb-3  flex flex-col  ">
                <img src={certificate.image} alt="" className=" w-[100%] relative rounded-t-md" />
                <h2 className="text-xl text-[var(--textcolor)] font-bold px-2 mb line-clamp-2">
                  {certificate.title}
                </h2>
                <div className=" ">
                  {" "}
                  <Link to={`/certificates/${certificate.id}`} className=" w-[212px] flex ">
                    <button className="button flex items-center justify-center gap-2 mx-2  w-[212px]">
                   <FaEye /> <span>See Certificate</span>
                  </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Certificates;
