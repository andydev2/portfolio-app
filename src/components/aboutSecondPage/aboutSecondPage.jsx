import React from "react";
import "./aboutSecondPage.css";
import computerImage from "../../assets/images/interests.webp";
import Jinwoo from "../../assets/icons/jinwoo.svg";
import GojoIcon from "../../assets/icons/gojo.svg";
import Hologram from "../../assets/images/hologram.webp";

const AboutSecondPage = () => {
  return (
    <section id="aboutSecond">
      <div className="secondAbout-container">
        <div className="secondAbout-items items-about_second1">
          <h2 className="secondAbout-titles">Interest</h2>
          <p className="secondAbout-texts">
            Music, photography, and coding all play a significant role in
            shaping the way I approach design and development. Each of these
            passions fuels my creativity, pushes my curiosity to explore new
            ideas <br />
            <br /> and sharpens my attention to detail. Music helps me think
            about rhythm and flow, photography teaches me to capture the essence
            of a moment, and coding allows me to bring these ideas to life
            through technology. Together, they inspire me to create intuitive,
            impactful, and visually appealing user experiences.
          </p>
          <img
            className="secondAbout-img"
            src={computerImage}
            alt={"computer image"}
          />
        </div>
        <div className="secondAbout-items items-about_second2">
          <h2 className="secondAbout-titles">Studies</h2>
          <p className="secondAbout-texts">
            I’m a self-taught web developer. I’ve learned by building, breaking,
            and fixing things — and I keep learning every day.
          </p>
          <img
            className="secondAbout-img_jinwoo"
            src={Jinwoo}
            alt={"jinwoo icon svg"}
          />
        </div>
        <div className="secondAbout-items items-about_second3">
          <h2 className="secondAbout-titles">My goals</h2>
          <p className="secondAbout-texts">
            Working at an elite company will help me earn well and learn from
            the best. Creating a social network will allow me to leave a lasting
            impact.
          </p>
          <img
            className="secondAbout-img_gojo"
            src={GojoIcon}
            alt={"gojo icon svg"}
          />
        </div>
        <div className="secondAbout-items items-about_second4">
          <h2 className="secondAbout-titles">
            My Frontend Philosophy: Designing Experiences, Not Just Code
          </h2>
          <p className="secondAbout-texts">
            It's not enough for an interface to work; it has to feel right.
            Every interaction, every animation, every detail tells a story that
            the user perceives—even if they don't consciously notice it. The
            subtle nuances of design create the emotional connection that makes
            the experience memorable and intuitive.
          </p>
          <img
            className="secondAbout-img_hologram"
            src={Hologram}
            alt={"hologram image"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSecondPage;
