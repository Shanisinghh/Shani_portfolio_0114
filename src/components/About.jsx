import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import photo from '../assets/photo.png'

function About() {
    useEffect(() => {
        Aos.init({ duration: 1000 });
      },[])
  return (
    <>
      <div className="mt-20 md:flex md:flex-row flex flex-col">
        <div data-aos="zoom-in-right" className="md:w-[30%] w-[100%]  flex justify-center items-center ">
          <img
            src={photo}
            className="md:w-[75%] w-[50%] rounded-full"
            alt=""
          />
        </div>
        <div data-aos='fade-up' className="md:w-[60%] w-[100%] mt-10 p-2.5  md:p-9">
          <h1 className="md:text-4xl text-2xl font-bold text-[var(--textcolor)]">About Me</h1>
          <p className="md:mt-5 mt-2.5 md:text-[18px] text-[15px] font-semibold text-left text-[var(--textcolor)]">
            Hi, I'm Shani Babu from Jhansi, Uttar Pradesh, India. I'm 
            completing my B.Tech in Computer Science & Engineering from SR Group
            of Institutions, Jhansi. I'm a Front-End Developer who loves
            creating user-friendly, responsive, and attractive websites. I work
            with modern tools like React to build smooth and fast web
            applications. I enjoy solving problems by writing clean and simple
            code. I'm always excited to learn new things and keep myself updated
            with the latest technologies. I'm a good team player and also
            confident in leading a team when needed. My hobbies are reading,
            coding, and exploring new technologies. My goal is to improve my
            skills and get a job in a well-known MNC (Multinational Company).
          </p>
         <Link to={'/contact'}> <button className="button mt-5 w-[165px]">Hire Me</button></Link>
        </div>
      </div>
    </>
  );
}

export default About;
