import { motion } from "framer-motion";

import pageTransition from "../utils/pageTransition";
import timeTransition from "../utils/timeTransition";

const Contact = () => {
    return (
        <motion.div
            initial="out"
            exit="out"
            animate="in"
            variants={pageTransition}
            transition={timeTransition}>
            Contact
        </motion.div>
    );
};

export default Contact;