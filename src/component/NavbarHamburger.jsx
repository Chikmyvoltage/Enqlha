import logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import {FaMoon} from "react-icons/fa6";
import {FaSun} from "react-icons/fa6";
import {FaArrowRight} from "react-icons/fa6";
import {PiCaretDown} from "react-icons/pi";
import {Dropdown} from "./Dropdown";
import {GiHamburgerMenu} from "react-icons/gi";

const NavbarHamburger = ({hamburgerref}) => {

  function showLogin() {
	  const doc = document.getElementById('login1');
	  doc.style.display = "flex";
  }

  function toggleDropDown() {
	  const dd = document.getElementById('dropdown');
	  if (dd.style.display == "none") {
	      dd.style.display = "flex";
	  } else {
	      dd.style.display = "none";
	  }
  }

  function toggleHamburger() {
  }

  return (
     <nav id="hmnv" ref={hamburgerref} className ="hamburger-nav">
	
	<ul>
	  <li>
	        <div style={{marginTop: "1.5rem", alignSelf: "center", scale: "1.5"}} className="item-center">
	            <img style={{width: "10rem"}} className="mx-2" src={logo} alt="logo" />
	        </div>
	  </li>
	  <li>
          <a href="#" className="hamburger-links">Reservation Status</a>
	  </li>
	  <li>
          <a href="#" className="hamburger-links gap-2.5">Log in as car owner <FaArrowRight/> </a>
	  </li>
	  <li>
          <a href="#" className="hamburger-links">Contact Us</a>
	  </li>
	  <li>
	  <a href="#" className="hamburger-links gap-2.5">English <PiCaretDown/></a>
	  </li>
	  <li>
	  <a href="#" className="hamburger-links"><FaSun/></a>
	  </li>
	</ul>
     </nav>
  
  );
};

export default NavbarHamburger
