// import React from "react";
// import { IoLogoHtml5 } from "react-icons/io";
// import { useEffect } from "react";
// import Aos from "aos";
// import "aos/dist/aos.css";

// function Skills() {
//   useEffect(() => {
//     Aos.init({ duration: 1000 });
//   }, []);
//   return (
//     <>
//       <div className="md:ml-7 ml-3 gap-5 mt-20">
//         <h1 className="md:text-4xl text-2xl  font-bold text-[var(--textcolor)]">
//           My Skills
//         </h1>
//         <div className="md:flex md:flex-row flex flex-col">
//           <div
//             data-aos="zoom-in-right"
//             className="text-[var(--textcolor)] md:w-[50%] w-[100%] pr-3 pt-3.5 md:text-[18px] text-[15px] font-semibold"
//           >
//             <p className="md:block hidden">
//               As a dedicated web developer, I have gained many useful skills
//               that help me turn creative ideas into real and working websites. I
//               enjoy building websites that are not only good-looking but also
//               easy to use and fast. My main focus is on front-end development,
//               where I work with technologies like HTML, CSS, and JavaScript to
//               create the structure, design, and interactivity of web pages.
//               <br /> I also use modern tools and libraries like React and
//               Tailwind CSS to make development faster and more effective. These
//               tools help me build user-friendly websites that look great on all
//               devices. I always try to learn new things and improve my skills to
//               stay updated with the latest trends in web development. My goal is
//               to build clean, responsive, and high-quality websites that give
//               users a smooth experience.
//             </p>
//             <p className="md:hidden block">
//               As a dedicated web developer, I have learned many useful skills
//               that help me turn creative ideas into real websites. I’m good at
//               front-end technologies like HTML, CSS, and JavaScript, and I also
//               use popular tools and libraries to make websites better and
//               faster.
//             </p>
//           </div>
//           <div
//             data-aos="zoom-in-up"
//             className="md:w-[50%] w-[100%] md:mt-0 mt-5 flex flex-col gap-5 md:px-6"
//           >
//             <div className="w-[100%] flex flex-col mb-5 md:mb-0  gap-5 ">
//               <div>
//                 <div className="subject">HTML/CSS</div>
//                 <div className="progress-bar" value="90%">
//                   <div className="progress-line max-w-[90%]"></div>
//                 </div>
//               </div>

//               <div>
//                 <div className="subject">Java Script</div>
//                 <div className="progress-bar" value="80%">
//                   <div className="progress-line  max-w-[80%]"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="subject">Tailwind CSS</div>
//                 <div className="progress-bar" value="85%">
//                   <div className="progress-line max-w-[85%]"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="subject">React Js</div>
//                 <div className="progress-bar" value="85%">
//                   <div className="progress-line max-w-[85%]"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="subject">Node Js</div>
//                 <div className="progress-bar" value="70%">
//                   <div className="progress-line max-w-[70%]"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="subject">Mongo DB</div>
//                 <div className="progress-bar" value="75%">
//                   <div className="progress-line max-w-[75%]"></div>
//                 </div>
//               </div>
//                             <div>
//                 <div className="subject">Express Js</div>
//                 <div className="progress-bar" value="88%">
//                   <div className="progress-line max-w-[88%]"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="subject">Git Hub</div>
//                 <div className="progress-bar" value="82%">
//                   <div className="progress-line max-w-[82%]"></div>
//                 </div>
//               </div>
//               <div>
//                 <div className="subject">VS Code</div>
//                 <div className="progress-bar" value="85%">
//                   <div className="progress-line max-w-[85%]"></div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Skills;
import { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiTypescript, SiNextdotjs, SiGithub } from "react-icons/si";

export default function Skills() {
  const [activeTab, setActiveTab] = useState("All");
  const [selected, setSelected] = useState(null);

  const skills = [
    { name: "HTML", level: 95, icon: <FaHtml5 className="text-4xl text-orange-500" />, category: "Frontend" },
    { name: "CSS", level: 90, icon: <FaCss3Alt className="text-4xl text-blue-500" />, category: "Frontend" },
    { name: "JavaScript", level: 92, icon: <FaJs className="text-4xl text-yellow-400" />, category: "Frontend" },
    { name: "TypeScript", level: 82, icon: <SiTypescript className="text-4xl text-blue-600" />, category: "Frontend" },
    { name: "React JS", level: 88, icon: <FaReact className="text-4xl text-cyan-400" />, category: "Frontend" },
    { name: "Next JS", level: 80, icon: <SiNextdotjs className="text-4xl text-black dark:text-white" />, category: "Frontend" },
    { name: "Tailwind CSS", level: 85, icon: <SiTailwindcss className="text-4xl text-sky-400" />, category: "Frontend" },
    { name: "Node JS", level: 75, icon: <FaNodeJs className="text-4xl text-green-500" />, category: "Backend" },
    { name: "Express JS", level: 70, icon: <SiExpress className="text-4xl text-gray-600" />, category: "Backend" },
    { name: "MongoDB", level: 68, icon: <SiTailwindcss className="text-4xl text-green-600" />, category: "Database" },
    { name: "Git", level: 78, icon: <FaGitAlt className="text-4xl text-orange-600" />, category: "Tools" },
    { name: "GitHub", level: 76, icon: <SiGithub className="text-4xl" />, category: "Tools" },
  ];

  const tabs = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredSkills =
    activeTab === "All" ? skills : skills.filter(skill => skill.category === activeTab);

  return (
    <section className="py-12 px-3 mt-8 max-w-6xl mx-auto" id="skills">
      <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-2 rounded-full font-medium transition ${
              activeTab === tab ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredSkills.map((skill, index) => (
          <div
            key={index}
            onClick={() => setSelected(selected === skill.name ? null : skill.name)}
            title={`Skill level: ${skill.level}%`}
            className={`relative p-5 rounded-xl shadow-md cursor-pointer transition 
            hover:scale-[1.03] hover:shadow-xl group bg-white dark:bg-gray-900
            ${selected === skill.name ? "border-2 border-blue-500 scale-[1.03]" : ""}`}
          >
            {/* Icon + Name */}
            <div className="flex items-center gap-4 mb-3">
              {skill.icon}
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                {skill.name}
              </h3>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
              <div
                className="h-2 rounded-full bg-blue-600 transition-all duration-500"
                style={{ width: `${skill.level}%` }}
              />
            </div>

            {/* Level */}
            <p className="text-right text-sm font-semibold mt-2 text-gray-600 dark:text-gray-300">
              {skill.level}%
            </p>

            {/* Selected Badge */}
            {selected === skill.name && (
              <span className="absolute top-[-8px] right-[-8px] bg-blue-600 text-white text-xs px-2 py-1 rounded-xl shadow-lg animate-bounce">
                Selected ⭐
              </span>
            )}

            {/* Hover Hint */}
            <span className="absolute bottom-2 left-3 opacity-0 group-hover:opacity-100 text-xs text-gray-500 transition">
              Click to select
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
