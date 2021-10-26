import { motion } from "framer-motion";

import pageTransition from "../utils/pageTransition";
import timeTransition from "../utils/timeTransition";

import "../css/About-me.modules.css";

const AboutMe = () => {
    return (
        <motion.div
            initial="out"
            exit="out"
            animate="in"
            variants={pageTransition}
            transition={timeTransition}
            className="container-about-me">
            <div className="raleway-dots font">
                My name is Elodie Sayavong and consider myself like a geek with a good relational.
                I appreciate make websites and mobile applications because it use my technical, creativity and challenges.

            </div>
        </motion.div>
    );
};

export default AboutMe;