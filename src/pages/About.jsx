import React from "react";
import "../styles/About.css";
import "../styles/App.css";
import profileImg from "../assets/profile.jpg"; // Replace with your actual image file

const About = () => {
  return (
    <section className="about">
      <div className="about-wrapper">
        <div className="about-image">
          <img src={profileImg} alt="Profile" />
        </div>

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I'm a passionate frontend developer with a love for creating sleek,
            responsive web interfaces. I specialize in React and enjoy bringing
            ideas to life through elegant code and thoughtful design.
          </p>
          <p>
            With a background in computer science and a hunger for learning, I
            constantly explore new tools, technologies, and trends in the web dev
            world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
