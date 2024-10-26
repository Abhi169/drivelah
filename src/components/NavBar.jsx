import { useState, useEffect, useRef } from "react";
import "./NavBar.css";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close menu and reset state on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar" ref={menuRef}>
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>
      <div className="logo-container">
        <img className="logo" src="logo.png" alt="logo" />
      </div>
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <ul>
          <li>Learn more</li>
          <li>List your car</li>
          <li>Inbox</li>
        </ul>
      </div>
      <div className="profile-container">
        <img src="profile-img.jpg" alt="profile-logo" className="profile-img" />
      </div>
    </nav>
  );
};

export default NavBar;
