import { useRef } from "react";
import Logo from "../assets/logo.png";
import {Link} from "react-router-dom";
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
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

const Navbar = (props) => {

  const hamburgerref = props.hamburgerref;
  const darkBg = props.dark ? "black" : null;
  let open = false;
//  function showLogin() {
//	  showPopup();
//  }

  function toggleDropDown() {
	  const dd = document.getElementById('dropdown');
	  if (dd.style.display == "none") {
	      dd.style.display = "flex";
	  } else {
	      dd.style.display = "none";
	  }
  }


  function toggleHamburgerMenu() {
	  const stripes = document.getElementsByClassName('stripes');
	  const nav = document.getElementById('hmnv');
	  //const img = document.getElementById('navimg');
	  const original_nav = document.getElementById('nv');

	  if (!open) {
		  disableBodyScroll(hamburgerref.current);
		  stripes[0].style.transform = "rotate(25deg)";
		  stripes[1].style.transform = "translateX(20px)";
		  stripes[1].style.opacity = "0";
		  stripes[2].style.transform = "rotate(-25deg)";

		  nav.style.transform = "translateX(-100%)";
	  } else {
		  enableBodyScroll(hamburgerref.current);
		  stripes[0].style.transform = "rotate(0)";
		  stripes[1].style.opacity = "1";
		  stripes[1].style.transform = "translateX(0)";
		  stripes[2].style.transform = "rotate(0)";

		  nav.style.transform = "translateX(0)";
	  }
	  open = !open;
  }
  return (
     <nav id='nv' className ="md:py-4 px-6 lg:px-14 text-xs lg:text-lg flex item-center justify-between justify-center navbar text-slate-200" style={{background: darkBg}}>

	<div className="flex items-center w-full justify-between gap-6">
		<Link to="/" className="z-[8]">
	  		<img loading="lazy" src={Logo} alt="Brand logo" className="aspect-[3.85] w-[200px]"/>
	  	</Link>
		<button target="_blank" className="hamburger-button" onClick={toggleHamburgerMenu} ><div className="stripes"/> <div className="stripes"/> <div className="stripes"/></button>
        	<div className="flex items-center gap-8 links text-nowrap">
        	  <a href="#">Reservation Status</a>
        	  <a href="#" className="flex flex-row gap-2.5 justify-center self-stretch items-center py-1.5">Log in as car owner <FaArrowRight/></a>
        	  <a href="#" className="flex flex-row gap-2.5 justify-center self-stretch items-center px-3 py-1.5 border border-white border-solid rounded-[60px]">
	  	    <div>Contact Us</div> <PiCaretDown/>
	  	  </a>
	  	  <a href="#" className="flex flex-row gap-2.5 justify-center self-stretch items-center py-1.5">English <PiCaretDown/></a>
	  
        	</div>
	</div>

  </nav>
  
  );
};

export default Navbar;
