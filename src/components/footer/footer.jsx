import React from "react";
import { Link } from "react-router-dom"; // Para navegación a otras páginas
import { Link as ScrollLink } from "react-scroll"; // Para scroll suave dentro de la misma página
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <h3>Made with ❤️ by Andy Mendoza</h3>
      <div className="footer-container">
        <div className="footer-items">
          <h4 className="footer-title">Sections</h4>
          {/* Scroll suave para Home */}
          <ScrollLink
            aria-label="this link will take you to home section"
            className="footer-links"
            to="home"
            smooth={true}
            duration={100}
            offset={-70}
            as="a" // Esto asegura que se renderice como un enlace HTML
            href="#home" // Agrega un href para SEO
          >
            Home
          </ScrollLink>
          {/* Scroll suave para Projects */}
          <ScrollLink
            aria-label="this link will take you to project section"
            className="footer-links"
            to="projects"
            smooth={true}
            duration={100}
            offset={-70}
            as="a"
            href="#projects"
          >
            Projects
          </ScrollLink>
          {/* Navegación a otra página para About */}
          <Link
            aria-label="this link will take you to the about page"
            className="footer-links"
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="footer-items">
          <h4 className="footer-title">Socials</h4>
          <a
            aria-label="this link will take you to my instagram profile"
            className="footer-links"
            href="https://www.instagram.com/akira.san__"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            aria-label="this link will take you to my whatsapp"
            className="footer-links"
            href="https://walink.co/f08335"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
          <a
            aria-label="this link will take you to my github profile"
            className="footer-links"
            href="https://github.com/andydev2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
