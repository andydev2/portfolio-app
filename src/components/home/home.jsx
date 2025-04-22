import React from "react";
import EditorImg from "../../assets/images/editor.webp";
import Box2 from "../../assets/images/box2.webp";
import ArrowRight from "../../assets/icons/arrow-right.svg";
import MobileAbout from "../../assets/images/mockMobile.svg";
import ReactIcon from "../../assets/icons/react.svg";
import Jsicon from "../../assets/icons/javascript-original.svg";
import "./home.css";
import Projects from "../projects/projects";

function home() {
  return (
    <>
      <section id="home">
        <div className="floating-icon">
          <img src={ReactIcon} alt={"react icon svg"} />
        </div>
        <div className="floating-js-icon">
          <img src={Jsicon} alt={"js icon svg"} />
        </div>
        <h1 className="title">Hi! I'm Andy.</h1>
        <h2 className="title">A Frontend Developer.</h2>
        <p className="title-text">Code with purpose. Design with clarity.</p>
        <main className="home-container">
          <div className="container-items home-item1">
            <div className="item-inside">
              <h2 className="home-title">
                Excellence is not an act, it’s a habit.
              </h2>
              <p className="home-text">
                As a web developer, I focus on creating fast, user-friendly
                interfaces, ensuring exceptional performance and a smooth
                experience. I build fast, easy-to-maintain websites, always
                prioritizing a flawless user experience and solid performance.
              </p>
              <button className="btn-home">Download CV</button>
            </div>
            <div className="item-inside">
              <img
                className="inside-img"
                src={EditorImg}
                alt={"code editor picture"}
              />
            </div>
          </div>
          <div className="container-items home-item2">
            <h2 className="home-title">
              Frontend Developer Intern | Gaining hands-on experience.
            </h2>
            <img className="inside-img2" src={Box2} alt={"andy menoza page"} />
          </div>
          <div className="container-items home-item3">
            <a href="#">
              <h2 className="home-title">
                Read More About Me
                <img
                  className="arrow-icon"
                  src={ArrowRight}
                  alt={"arrow right icon"}
                />
              </h2>
              <img
                className="inside-img3"
                src={MobileAbout}
                alt={"mobile about image"}
              />
            </a>
          </div>
        </main>
      </section>
      <Projects />
    </>
  );
}

export default home;
