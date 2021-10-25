import { motion } from "framer-motion";

import pageTransition from "../utils/pageTransition";
import timeTransition from "../utils/timeTransition";

const AboutMe = () => {
    return (
        <motion.div
            initial="out"
            exit="out"
            animate="in"
            variants={pageTransition}
            transition={timeTransition}>
            About me
        </motion.div>
    );
};

export default AboutMe;