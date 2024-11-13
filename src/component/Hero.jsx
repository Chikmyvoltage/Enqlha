import { HERO_CONTENT } from "../constants";
import mainpic from "../assets/diriyah.jpg";
import { delay, motion } from "framer-motion"

const container = (delay) =>({
    hidden: {x: -100, opacity:0},
    visible: {x: 0, opacity:1, transition: {duration: 0.5, delay: delay},
},
});


const Hero = () => {
  return (
    <div className="bordar-b bordar-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col item-center lg:items-start">
                    <motion.h1  
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                     className="pb-15 text-6xl font-thin tracking-tight lg:mt-16 
                    lg:text-8xl herotitle" style={{color: "black", fontSize: "3rem", alignSelf: "self-end"}}>ما هو رشد؟</motion.h1>
                    <motion.p
                    variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    style={{color: "black", textAlign: "right", alignSelf: "self-end"}}
                    className="my-2 max-w-xl py-6 font-light">
                    {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8 heroimg">
                <div className="flex justify-center">
                    <motion.img 
                    initial={{x:100, opacity:0}}
                    animate={{x:0, opacity:1}}
                    transition={{duration:0.5 , delay:1}}
                    src={mainpic} alt ="Khalid Fahad" style={{ borderRadius: '2rem', width: '100%', paddingLeft: '1rem' }}/>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero
