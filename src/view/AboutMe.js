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
            transition={timeTransition}
            className="container-1">

            <p className="raleway-dots w">Bonjour !</p>
        </motion.div>
    );
};

export default AboutMe;