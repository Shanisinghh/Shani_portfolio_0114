import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import photo from "../assets/photo.png";

function About() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <div className="mt-20 md:flex md:flex-row flex flex-col">
        <div
          data-aos="zoom-in-right"
          className="md:w-[30%] w-[100%]  flex justify-center items-center "
        >
          <img src={photo} className="md:w-[75%] w-[50%] rounded-full" alt="" />
        </div>
        <div
          data-aos="zoom-in-up"
          className="md:w-[65%] w-[100%] mt-10 p-2.5  md:p-9"
        >
          <h1 className="md:text-4xl text-2xl font-bold text-[var(--textcolor)]">
            About Me
          </h1>
          <p className="md:mt-5 mt-2.5 md:text-[18px] text-[15px] font-semibold text-left text-[var(--textcolor)]">
            Hi, I'm Shani Babu from Jhansi, Uttar Pradesh, India. I'm completing
            my B.Tech in Computer Science & Engineering from SR Group of
            Institutions, Jhansi. I'm a Full-Stack Developer and MERN Stack
            Developer who loves building scalable and feature-rich web
            applications. I focus on designing user-friendly, responsive, and
            attractive websites using React, and I build powerful backend
            systems using Node.js and Express.js. I use MongoDB for database
            management to store and handle data efficiently. I also create REST
            APIs, integrate JWT authentication for security, and deploy
            applications to make them available for real users. I enjoy solving
            problems by writing clean and simple JavaScript code for both
            frontend and backend. I'm always excited to learn new technologies
            and keep myself updated with the latest trends in web development.
            I'm a good team player and confident in leading a team when needed.
            My hobbies are reading, coding, and exploring new technologies. My
            goal is to improve my skills and get a job in a well-known MNC
            (Multinational Company) as a professional MERN Stack Developer.
          </p>
          <Link to={"/contact"}>
            {" "}
            <button className="button mt-5 w-[185px]">Hire Me</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default About;
