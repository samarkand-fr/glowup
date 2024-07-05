import { useState } from 'react';
import closeImage from "../assets/images/close.png";
import menuImage from "../assets/images/menu.png";


function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="sidenav" className={isOpen ? 'open' : ''}>
        <nav>
          <ul>
            <li><a href="#banner" onClick={toggleNav}>Home</a></li>
            <li><a href="#features" onClick={toggleNav}>Features</a></li>
            <li><a href="#service" onClick={toggleNav}>Services</a></li>
            <li><a href="#testimonials" onClick={toggleNav}>Reviews</a></li>
            <li><a href="#footer" onClick={toggleNav}>Contact</a></li>
          </ul>
        </nav>
      </div>
      <div id="menubtn" onClick={toggleNav}>
        <img src={isOpen ? closeImage : menuImage} alt="menu" id="menu" />
      </div>
    </>
  );
}

export default SideNav;
