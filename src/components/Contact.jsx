import React from 'react'
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function Contact() {

    useEffect(() => {
      Aos.init({ duration: 1000 });
    },[])

  return (
    <div className=" my-25 h-[60vh]">
      <form data-aos="fade-up" action="https://api.web3forms.com/submit" method="POST" className="box relative hover:transform hover:translate-y-[-2px] flex gap-2 flex-col md:w-[50vw] w-[90vw] m-auto p-4 rounded-md ">
        <h2 className='md:text-3xl text-2xl m-auto mb-2 font-bold text-[var(--textcolor)]'>Get In Touch</h2>
        <input type="hidden" name="access_key" value="2680dfd0-09e7-4706-866e-2134f8361f12" />
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone No</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button className="button m-auto w-[265px]" type="submit">
          Submit <i className="fa fa-send" aria-hidden="true"></i>
        </button>
      </form>
    </div>
  )
}

export default Contact
