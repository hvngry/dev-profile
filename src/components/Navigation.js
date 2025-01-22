import React, { useState, useEffect } from "react";
import '../App.css';
import logo from '../assets/img/light.png';
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; 
  }, []);

  return (
      <nav className={`${scrolled ? "scrolled" : ""}`}>
        <div className="left_header">
        <a href="/"><img src={logo} className="logo"></img></a>
        <ul>
          <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=joee.saavedra@gmail.com" className="button"><IoMdMail className="inline-icons" /> joee.saavedra@gmail.com</a></li>
        </ul>
        </div>
        <div className="right_header">
          <ul>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/Education-and-Experience">Education & Experience</Link></li>
            <li><Link to="/Projects">Projects</Link></li>
            <li><a className="button" href="https://tinyurl.com/joee-saavedra-resume-0001">Resume</a></li>
          </ul>
        </div>
      </nav>
  );
}

export default Navigation;