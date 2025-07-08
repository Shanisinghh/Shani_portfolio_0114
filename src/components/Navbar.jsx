import React from "react";
import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { IoIosMoon } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Navbar() {
  const [theme, setTheme] = useState(true);
  const [menu, setMenu] = useState(true);

  const SetDarkTheme = () => {
    document.querySelector("body").setAttribute("Data-theme", "dark");
  };
  const SetLightTheme = () => {
    document.querySelector("body").setAttribute("Data-theme", "light");
    // setTheme("light")
  };
  //  SetLightTheme()

  function handleTheme(e) {
    if (e.target.checked) {
      SetDarkTheme();
      setTheme(!theme);
    } else {
      SetLightTheme();
      setTheme(!theme);
    }
  }
  function handleMenu() {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
    setMenu(!menu);
  }

  return (
    <>
      <div className="my-border z-50 flex justify-between items-center  border-none backdrop-blur-xl md:backdrop-saturate-100 md:backdrop-blur-0 border-b-[1px]   md:h-17 h-15 fixed top-0 w-screen px-4   md:px-9">
        <div>
          <Link to={"/"}>
            {" "}
            <p className="logo text-4xl text-[var(--textcolor)] font-bold">
              Por<span className="logo-text">tfo</span>lio.
            </p>
          </Link>
        </div>
        <div className="flex justify-between items-center gap-12">
          <div className="">
            <ul
              onClick={() => handleMenu()}
              id="nav-links"
              className="nav-links flex-col flex gap-3  text-[var(--textcolor)] justify-between items-center md:gap-13 md:flex  md:flex-row"
            >
              <Link to={"/"}>
                <li className="nav-link">Home</li>
              </Link>
              <Link to={"/about"}>
                <li className="nav-link">About</li>
              </Link>
              <Link to={"/skills"}>
                <li className="nav-link">Skills</li>
              </Link>
              <Link to={"/certificates"}>
                <li className="nav-link">Certificates</li>
              </Link>
              <Link to={"/projects"}>
                {" "}
                <li className="nav-link">Projects</li>
              </Link>
              <Link to={"/contact"}>
                {" "}
                <li className="nav-link">Contact</li>
              </Link>
            </ul>
          </div>
          <div className="flex gap-4 justify-center items-center">
            {/* <label htmlFor="theme"> <BsSunFill className="text-2xl"/></label> */}
            <label
              htmlFor="theme"
              className="hover:transform hover:scale-110 duration-75"
            >
              {" "}
              {theme ? (
                <IoIosMoon className="text-3xl  cursor-pointer text-[var(--textcolor)] hover:text-[var(--color)]" />
              ) : (
                <BsSunFill className="text-3xl  text-[var(--textcolor)] hover:text-[var(--color)] cursor-pointer" />
              )}
            </label>
            <input
              type="checkbox"
              id="theme"
              className="hidden"
              onChange={handleTheme}
            />
            <div
              className="md:hidden hover:transform hover:scale-110 "
              onClick={handleMenu}
            >
              {menu ? (
                <IoMenu className="text-4xl text-[var(--textcolor)] cursor-pointer hover:text-[var(--color)]" />
              ) : (
                <IoClose className="text-4xl text-[var(--textcolor)] cursor-pointer hover:text-[var(--color)]" />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
