import React from "react";
import AboutSecondPage from "../aboutSecondPage/aboutSecondPage";
import "./about.css";
import profilePic from "../../assets/images/profile-pic.webp";

const About = () => {
  return (
    <>
      <section id="about">
        <h2 className="title about-title1">I'm Andy.</h2>
        <div className="about-container">
          <div className="about-items about-box1">
            <img
              className="about-pic"
              src={profilePic}
              alt={"andy mendoza profile pic"}
            />
            <span className="about-title"></span>
          </div>
          <div className="about-items about-box2">
            <h2 className="about-title2">
              I Design & Build Beautiful Web Interfaces
            </h2>
            <p className="about-text">
              I’m a web developer with a strong passion for technology, design,
              and innovation. With several years of experience in building
              websites, I’ve honed a diverse set of skills, ranging from web
              design and programming to creative problem-solving. My background
              includes proficiency in HTML, CSS, JavaScript, and various
              frameworks, which allows me to craft dynamic and responsive
              websites that adapt to users' needs.
              <br />
              <br />
              In addition to web development, I also have extensive experience
              in photo editing and graphic design using Adobe Photoshop,
              empowering me to create visually striking, customized visual
              solutions that elevate the user experience. I take great pride in
              building websites that are not only functional and easy to
              navigate but also visually engaging and aligned with my clients’
              goals. My focus is always on delivering a seamless user experience
              that merges creativity with technical expertise, ensuring every
              project meets the highest standards of quality and efficiency. I’m
              dedicated to staying current with the latest trends in web
              development and design to continuously improve the solutions I
              provide.
            </p>
          </div>
        </div>
      </section>
      <AboutSecondPage />
    </>
  );
};

export default About;
