import '../App.css';
import logo from '../assets/img/light.png';
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="App">
      <nav>
        <div className="left_header">
        <a href="/"><img src={logo} className="logo"></img></a>
        <ul>
          <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=joee.saavedra@gmail.com" className="button"><IoMdMail className="inline-icons" /> joee.saavedra@gmail.com</a></li>
        </ul>
        </div>
        <div className="right_header">
          <ul>
            <li><a href="/">About Me</a></li>
            <li><a href="/Education-and-Experience">Education & Experience</a></li>
            <li><a href="/Projects">Projects</a></li>
            <li><a className="button" href="https://tinyurl.com/joee-saavedra-resume-0001">Resume</a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;