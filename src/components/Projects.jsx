import React from "react";
import { useEffect } from "react";
import { projects } from "../data/Data";
import { Link } from "react-router-dom";
import { IoRocketSharp } from "react-icons/io5";
import { FaLaptopCode } from "react-icons/fa";
import { useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="md:mt-20 mt-15">
        <h1 className=" md:ml-7 ml-3 mb-4 md:text-4xl text-2xl font-bold text-[var(--textcolor)]">
          Projects
        </h1>
        <div className="flex flex-wrap justify-center  pb-4  items-center gap-3.5">
          {projects.map((project) => (
            <div
              key={project.id}
              data-aos={project.animation}
              className="flex flex-col gap-3.5 justify-center"
            >
              <div className="box hover:transform hover:translate-y-[-2px] relative gap-3 sm:w-[341px] md:w-[390px]  w-[95%] m-auto  pb-3 flex flex-col ">
                <img
                  src={project.image}
                  alt=""
                  className="img-box w-[100%] h-[60%] relative bg-cover rounded-t-md"
                />
                <h2 className="text-xl text-[var(--textcolor)] font-bold px-2 mb line-clamp-2">
                  {project.title}
                </h2>
                <p className="text-md text-[var(--textcolor)] font-semibold px-2 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap w-[100%]">
                  {project.techStack.map((tech) => (
                    <p
                      key={tech}
                      className="text-sm text-[blue] font-bold px-2 min-line-clamp-1"
                    >
                      #{tech}
                    </p>
                  ))}
                </div>
                <div className=" ">
                  {" "}
                  <div className="flex justify-center gap-2.5">
                    <Link to={project.live} target="_blank">
                      <button className="button flex justify-center items-center gap-1.5  md:w-[170px]   w-[150px]">
                        <IoRocketSharp className="text-[red]" />{" "}
                        <span>See Live</span>
                      </button>
                    </Link>
                    <Link to={project.github} target="_blank">
                      <button className="button flex justify-center items-center gap-1.5  md:w-[170px]   w-[150px]">
                        <FaLaptopCode className="text-[blue]" />{" "}
                        <span>Git Repo</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
