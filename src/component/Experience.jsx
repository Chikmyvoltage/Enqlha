import {RiReactjsLine} from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { motion } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10 , -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    }
})



const Tech = () => {
  return (
     <div className="border-b borderwhite pb-24">

        <motion.div 
        whileInView={{opacity:1 , x: 0}}
        initial={{opacity: 0 , x:-100}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gapfloat">
        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
	style={{marginTop: "5rem", width: "20rem"}}
        className="rounded-2xl border-4 borderwhite p-4 mx20">
        <p id="num1" style={{fontSize: "5rem", color: "black", textAlign: "center"}}>+<AnimatedCounter from={70} to={100}/>k</p>
        <p style={{fontSize: "5rem", color: "black", textAlign: "center"}}>مسجل</p>
	</motion.div>

        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
	style={{width: "20rem"}}
        className="rounded-2xl border-4 borderwhite p-4 mx20">
        <p id="num2" style={{fontSize: "5rem", color: "black", textAlign: "center"}}>+<AnimatedCounter from={0} to={30}/></p>
        <p style={{fontSize: "5rem", color: "black", textAlign: "center"}}>فريق</p>

        </motion.div>

        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
	style={{width: "20rem"}}
        className="rounded-2xl border-4 borderwhite p-4 mx20">
        <p id="num3" style={{fontSize: "5rem", color: "black", textAlign: "center"}}>+<AnimatedCounter from={4000} to={9600}/></p>
        <p style={{fontSize: "5rem", color: "black", textAlign: "center"}}>مستفيد</p>
        </motion.div>
        </motion.div>
     </div>
  );
};

export default Tech
