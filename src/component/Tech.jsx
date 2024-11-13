import {RiReactjsLine} from "react-icons/ri";
import { SiPython } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiFlutter } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import {  motion } from "framer-motion";

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
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 borderwhite p-4 mx20">
        <p style={{fontSize: "5rem", color: "black", textAlign: "center"}}>رسالتنا</p>
	<hr style={{borderColor: "black"}}/>

	<p style={{
		color: "black",
		textAlign: "right",
		marginTop: "1rem"
	}}>نحن في "رشد" نسعى لتمكين طلاب المرحلة الثانوية من تحقيق إمكاناتهم الكاملة من خلال توفير إرشاد أكاديمي ومهني شامل، وموارد تعليمية عالية الجودة، وبناء شبكة دعم قوية تساعدهم على اتخاذ قرارات مستنيرة لمستقبلهم.</p>
	</motion.div>

        <motion.div 
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 borderwhite p-4 mx20">
        <p style={{fontSize: "5rem", color: "black", textAlign: "center"}}>رؤيتنا</p>
	<hr style={{borderColor: "black"}}/>

	<p style={{
	    color: "black",
	    textAlign: "right",
	    marginTop: "1rem"
	}}>نتطلع إلى مجتمع سعودي يتمتع فيه كل طالب بفرص متكافئة للوصول إلى التعليم العالي والمهن المرموقة، بما يتماشى مع رؤية 2030 واحتياجات سوق العمل المستقبلية.</p>
        </motion.div>

        <motion.div 
        variants={iconVariants(1)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 borderwhite p-4 mx20">
        <p style={{fontSize: "5rem", color: "black", textAlign: "center"}}>هدفنا</p>
	<hr style={{borderColor: "black"}}/>

	<p style={{
	    color: "black",
	    textAlign: "right",
	    marginTop: "1rem"
	}}>تحسين فرص النجاح الأكاديمي والمهني لطلاب المرحلة الثانوية في المملكة العربية السعودية من خلال توفير برامج إرشادية متكاملة، وموارد تعليمية متميزة، وفرص تواصل فعالة تتغلب على الحواجز المادية والجغرافية والأكاديمية.</p>
        </motion.div>
        </motion.div>
     </div>
  );
};

export default Tech
