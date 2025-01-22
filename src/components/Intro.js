import '../App.css';
import Me from '../assets/img/dark.png';

const About = () => {
  return (
    <div id="about1">
      <div className="bubble-contain">
        <p className="bubble">Call me Joee!</p>
      </div>
      <div className="left">
        <div className="flyFromTop">
        <div className="title">
          <h1>Joelle Larissa Saavedra</h1>
          <p className="intro">Front-end Developer, UI/UX Designer, & Graphic Designer</p>
          <p className="intro">Building aesthetically-pleasing, functional websites is my forte!</p>
        </div>
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
