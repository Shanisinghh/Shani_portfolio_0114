import React from 'react'
import { Link } from 'react-router-dom';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { useTypewriter,Cursor } from 'react-simple-typewriter';
import { useEffect } from 'react';
import resume from '../assets/shani_resume01.pdf'
import About from './About';
import Skills from './Skills';
import Certificates from './Certificates';
import Projects from './Projects';
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from './Contact';
import Footer from './Footer';
import photo from '../assets/photo.png'


        
function Home() {

    useEffect(() => {
      Aos.init({ duration: 1000 });
    },[])
  const [text] = useTypewriter({
    words: ['Front End Developer', 'React Developer', 'Web Designer', ],
    loop: {},
  })
  return (
    <>
      <div className='md:mt-16 mt-5 md:h-[65vh] h-[100vh] flex flex-col-reverse md:flex md:flex-row'>
        <div data-aos='fade-right'  className='flex flex-col  md:w-[50%] w-[100%] h-[50%] md:pl-25 pl-2 md:pt-14 md:gap-7 gap-4'>
          <h2 className='md:text-7xl text-5xl font-bold text-[var(--textcolor)]'>Hi There,</h2>
          <h2  className='md:text-7xl text-5xl font-bold text-[var(--textcolor)]'>I'm <span className='logo-text'>Shani Babu</span></h2>
          <h4 className='md:text-3xl text-2xl font-semibold  text-[var(--textcolor)]'>I'm a <span className='logo-text'>{text}</span> <span className=' text-red-600'><Cursor /></span></h4>
          {/* <Link to={resume} download='resume'><button className='button'>Download CV</button></Link> */}
          <a  href={resume} download='shani-resume' className=' w-50'><button className='flex items-center  justify-center gap-2 button w-50'><MdOutlineFileDownload className='text-2xl'/><span>Download</span></button></a>
          <div  className='flex gap-2.5'>
            <Link to={'https://www.linkedin.com/in/shani-web-developer/'} target='_blank'><div><FaLinkedin  className='text-4xl text-blue-800 cursor-pointer transform hover:scale-110 duration-100 '/></div></Link>
            <Link to={'https://github.com/Shanisinghh'} target='_blank'><div><FaGithub  className='text-4xl text-[var(--textcolor)] cursor-pointer  transform hover:scale-110 duration-100'/></div></Link>
            <Link to={'https://www.instagram.com/shani_0114?fbclid=IwY2xjawJ56EZleHRuA2FlbQIxMABicmlkETFaNzBQellYWFZuRDBvTWxsAR5SFzUMpBT8M-HlQZDAzvORu3RujcRkeGT-sSSvDSkzJxXgsAL5rgapp3GO4A_aem_I4_af9NH1oZ6Mh92WsicUw'} target='_blank'><div><FaInstagramSquare  className='text-4xl text-[#ff00b3] cursor-pointer  transform hover:scale-110 duration-100'/></div></Link>
            <Link to={'https://www.facebook.com/profile.php?id=100062432334451'} target='_blank'><div><FaFacebookSquare  className='text-4xl text-blue-800 cursor-pointer  transform hover:scale-110 duration-100'/></div></Link>
          </div>
         
        </div>
        <div className='md:w-[50%] h-[42%] w-[100%] '>
          <div data-aos='zoom-in-up' className='home-img flex justify-center md:block md:ml-15 '>
             <img src={photo} alt="" />

          </div>
        </div>
      </div>
      <About />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default Home
