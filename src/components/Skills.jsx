import React from "react";
import { IoLogoHtml5 } from "react-icons/io";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="md:ml-7 ml-3 gap-5 mt-20">
        <h1 className="md:text-4xl text-2xl  font-bold text-[var(--textcolor)]">
          My Skills
        </h1>
        <div className="md:flex md:flex-row flex flex-col">
          <div
            data-aos="zoom-in-right"
            className="text-[var(--textcolor)] md:w-[50%] w-[100%] pr-3 pt-3.5 md:text-[18px] text-[15px] font-semibold"
          >
            <p className="md:block hidden">
              As a dedicated web developer, I have gained many useful skills
              that help me turn creative ideas into real and working websites. I
              enjoy building websites that are not only good-looking but also
              easy to use and fast. My main focus is on front-end development,
              where I work with technologies like HTML, CSS, and JavaScript to
              create the structure, design, and interactivity of web pages.
              <br /> I also use modern tools and libraries like React and
              Tailwind CSS to make development faster and more effective. These
              tools help me build user-friendly websites that look great on all
              devices. I always try to learn new things and improve my skills to
              stay updated with the latest trends in web development. My goal is
              to build clean, responsive, and high-quality websites that give
              users a smooth experience.
            </p>
            <p className="md:hidden block">
              As a dedicated web developer, I have learned many useful skills
              that help me turn creative ideas into real websites. I’m good at
              front-end technologies like HTML, CSS, and JavaScript, and I also
              use popular tools and libraries to make websites better and
              faster.
            </p>
          </div>
          <div
            data-aos="zoom-in-up"
            className="md:w-[50%] w-[100%] md:mt-0 mt-5 flex flex-col gap-5 md:px-6"
          >
            <div className="w-[100%] flex flex-col mb-5 md:mb-0  gap-5 ">
              <div>
                <div className="subject">HTML</div>
                <div className="progress-bar" value="95%">
                  <div className="progress-line max-w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="subject">CSS</div>
                <div className="progress-bar" value="88%">
                  <div className="progress-line max-w-[88%]"></div>
                </div>
              </div>
              <div>
                <div className="subject">Java Script</div>
                <div className="progress-bar" value="80%">
                  <div className="progress-line  max-w-[80%]"></div>
                </div>
              </div>
              <div>
                <div className="subject">Tailwind CSS</div>
                <div className="progress-bar" value="85%">
                  <div className="progress-line max-w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="subject">React Js</div>
                <div className="progress-bar" value="85%">
                  <div className="progress-line max-w-[85%]"></div>
                </div>
              </div>
              <div>
                <div className="subject">Redux Toolkit</div>
                <div className="progress-bar" value="80%">
                  <div className="progress-line max-w-[80%]"></div>
                </div>
              </div>
              <div>
                <div className="subject">Git Hub</div>
                <div className="progress-bar" value="82%">
                  <div className="progress-line max-w-[82%]"></div>
                </div>
              </div>
              <div>
                <div className="subject">VS Code</div>
                <div className="progress-bar" value="85%">
                  <div className="progress-line max-w-[85%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
