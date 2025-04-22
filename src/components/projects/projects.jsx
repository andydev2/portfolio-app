import React from "react";
import Pixelap from "../../assets/images/macbook-pixelap.webp";
import "./projects.css";
import WeatherApp from "../../assets/images/weather-app.webp";
const Projects = () => {
  return (
    <section id="projects">
      <h2 className="project-title">Projects</h2>
      <div className="projects-container">
        <div className="projects-items projects-box1">
          <div className="projects-inside_item">
            <img
              className="project-img_inside"
              src={Pixelap}
              alt={"pixelap image"}
            />
          </div>
          <div className="projects-inside_item">
            <h2 className="home-title project-title_inside">Pixelap</h2>
            <p className="home-text project-text">
              Pixelap: A personal web project to showcase my creative and unique
              Photoshop editing works, highlighting my skills in digital design
              and visual storytelling.
            </p>
            <a className="project-btn" href="/">
              View project
            </a>
          </div>
        </div>
        <div className="projects-items projects-box2">
          <a
            aria-label="this link will take you to weather project"
            target="blank_"
            href="#"
          >
            <h2 className="home-title">Weather App</h2>
            <img
              className="project2-img_inside"
              src={WeatherApp}
              alt={"weather app image"}
            />
          </a>
        </div>
        <div className="projects-items projects-box3 coming-soon">
          <div className="coming-soon_box"></div>
          <div className="coming-soon_text"></div>
          <div className="coming-soon_text2"></div>
          <div className="coming-soon_title"></div>
        </div>
        <div className="projects-items projects-box4 coming-soon">
          <div className="coming-soon_box"></div>
          <div className="coming-soon_text"></div>
          <div className="coming-soon_text2"></div>
          <div className="coming-soon_title"></div>
        </div>
        <div className="projects-items projects-box5 coming-soon">
          <div className="coming-soon_box"></div>
          <div className="coming-soon_text"></div>
          <div className="coming-soon_text2"></div>
          <div className="coming-soon_title"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
