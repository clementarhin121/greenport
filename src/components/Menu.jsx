import { useState, useEffect } from "react"; // import useEffect too
import "./Menu.css";
function Menu() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={`MenuHome ${scrolled ? "scrolled" : ""}`}>
      <div className="master">
        <h2>Clement Asemani Arhin</h2>
      </div>
      {/* Burger Icon */}
      <div
        className="burger"
        onClick={() => setOpen(!open)}>
        <div className={`line ${open ? "open" : ""}`}></div>
        <div className={`line ${open ? "open" : ""}`}></div>
        <div className={`line ${open ? "open" : ""}`}></div>
      </div>

      {/* Slide Menu */}
      <div className={`sideMenu ${open ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#works">Works</a>
          </li>
          <li>
            <a href="#recommendations">Recommendations</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
