import React, { useState, useEffect } from "react";
import '../App.css';
import Intro from "../components/Intro";
import More from "../components/More-Info";
import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";

const About = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const toggleModal = () => {

    if (isModalOpen){
      setIsClosing(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setIsClosing(false);    
    }, 150);
    } else {
      setIsModalOpen(true);
    }
  };

  const handleOutsideClick = (event) => {
    if (event.target.className.includes("modal")) {
      setIsModalOpen(false);
    }
  };

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }; 
  }, []);

  const handleScrollClick = () => {
    const nextSection = document.getElementById("about2");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <div className="center">
      <div className={`scroll ${scrolled ? "scrollFadeOut" : "scrollFadeIn"}`} onClick={handleScrollClick}></div>
    </div>
    
    {/* Contacts stuck to the left */}
    <div className="contacts">
          <a href="https://github.com/hvngry"><FaGithub size={50} className="react-icons" /></a>
          <a href="https://www.linkedin.com/in/joelle-larissa-saavedra-205978145/"><FaLinkedin size={50} className="react-icons" /></a>
          <a><FaPhoneAlt size={50} onClick={toggleModal} className="react-icons" /></a>
    </div>
    {isModalOpen && (
          <div className="modal-contain">
            <div className={`modal ${isClosing ? "fadeOut" : "fadeIn"}`} onClick={handleOutsideClick}>
            <h4>+63 (0917) 105 2827</h4>
            </div>
          </div>
    )}

    {/* About content */}
    <div className="section">
      <Intro />
    </div>
    
    <div className="section">
      <More />
    </div>
    </>
    
    
  );
}

export default About;
