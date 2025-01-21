import '../App.css';
import Me from '../assets/img/dark.png';
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  return (
    <div className="section">

      <div className="left">
        <div className="contacts">
          <a href="https://github.com/hvngry"><FaGithub size={50} className="react-icons" /></a>
          <a href="https://www.linkedin.com/in/joelle-larissa-saavedra-205978145/"><FaLinkedin size={50} className="react-icons" /></a>
        </div>
      </div>

      <div className="left">
        <div className="title">
          <h1>Joelle Larissa Saavedra</h1>
          <p className="intro">Front-end Developer, Graphic Designer</p>
          <p className="intro"> I like long walks on the beach, big dick, and fried chicken</p>
        </div>
      </div>

      <div className="right">
        <div className="title">
          <img src={Me} className="me" />
        </div>
      </div>


    </div>
    
  );
}

export default About;
