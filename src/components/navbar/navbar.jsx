import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      const observer = new IntersectionObserver(
        (entries) =>
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActiveSection(entry.target.id); // Cambia la sección activa al entrar en el viewport
          }),
        { threshold: 0.3 }
      );

      document
        .querySelectorAll("section")
        .forEach((section) => observer.observe(section));
      return () => observer.disconnect(); // Limpia el observer al desmontar
    } else {
      setActiveSection(location.pathname.replace("/", "")); // Ajusta la sección activa según la ruta
    }
  }, [location.pathname]);

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      navigate("/"); // Navega a la página principal si no estás en ella
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  return (
    <header className="header content">
      <nav className="nav">
        <ul className="nav-menu">
          {["home", "projects"].map((section) => (
            <li
              key={section}
              className={`nav-menu-item ${
                location.pathname === "/" && activeSection === section
                  ? "active"
                  : ""
              }`}
            >
              <button
                aria-label={`this button will take you to ${section}`}
                onClick={() => handleScroll(section)}
                className="nav-link links"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            </li>
          ))}
          <li
            className={`nav-menu-item ${
              location.pathname === "/about" ? "active" : ""
            }`}
          >
            <Link
              aria-label="this button will take you to about page"
              to="/about"
              className="nav-link links"
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
