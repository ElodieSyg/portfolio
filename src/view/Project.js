import { motion } from "framer-motion";

import pageTransition from "../utils/pageTransition";
import timeTransition from "../utils/timeTransition";

const Project = () => {
    return (
        <motion.div
            initial="out"
            exit="out"
            animate="in"
            variants={pageTransition}
            transition={timeTransition}>
            Project
        </motion.div>
    );
};

export default Project;