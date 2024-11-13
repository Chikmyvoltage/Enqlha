import Navbar from "../component/Navbar";
//import Hero from "./component/Hero";
//import { About } from "../component/About";
//import Tech from "../component/Tech";
//import Experience from "./component/Experience";
//import Projects from "./component/Projects";
//import Contact from "./component/Contact";
import { LoginForm, openPopup } from "../component/Login";
import NavbarHamburger from "../component/NavbarHamburger";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment, useState, useRef } from "react";
import Root from "../component/Root";
import SignUp from "../component/SignUp"
import Segment from "../component/Segment";
import TopItems from "../component/TopItems";
import Banner from "../component/Banner";
import CarForm from "../component/CarForm";
import CarCollection from "../component/CarCollection";
import CarVideo from "../assets/carvideo.mp4";
import Footer from "../component/Footer";

//<div id="approot" style={{background: "linear-gradient(108deg, #D0B8A8, #8D6C5D, #F8EDE3)"}} className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900"> 
// --	      <div className="fixed top-0 -z-10 h-full w-full">
// --	      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
// --	      </div>
// <NavbarHamburger />

const App = () => {

  const Home = () => {
    return (
      <div className="w-full flex flex-col">
  	<TopItems>
  	  <Banner/>
  	</TopItems>
  	<CarForm/>
        <CarCollection/>
  	<Footer/>
      </div>
    );
  }


  const [popupStyle, setStyle] = useState("none");
  const [popupOpacity, setOpacity] = useState("0%");
  const hamburgerref = useRef(null);

  return (
    <>
	    <LoginForm popupStyle={popupStyle} popupOpacity={popupOpacity} setStyle={setStyle} setOpacity={setOpacity}/>
	    <Root>
	      <NavbarHamburger hamburgerref={hamburgerref}/>
	      <Navbar hamburgerref={hamburgerref} showPopup={() => openPopup(setStyle, setOpacity)}/>
	      <Home/>
	    </Root>
    </>
  );
};

export default App;
