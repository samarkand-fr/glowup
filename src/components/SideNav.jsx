import  { useState } from 'react';
import closeImage from "../assets/images/close.png" 
import menuImage from "../assets/images/menu.png"

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);
const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div id="sidenav" style={{ right: isOpen ? '0' : '-250px' }}>
        <nav>
          <ul>
            <li><a href="#banner">Home</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#testimonials">Reviews</a></li>
            <li><a href="#footer">Contact</a></li>
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