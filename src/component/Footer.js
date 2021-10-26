import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import pageTransition from "../utils/pageTransition";
import timeTransition from "../utils/timeTransition";

import "../css/Footer.modules.css";

const Footer = () => {
    return (
        <motion.div
            initial="out"
            exit="out"
            animate="in"
            variants={pageTransition}
            transition={timeTransition}
            className="container-footer">
            <Link to="/contact" className="text-none color-transition">elodie.sayavong.dev@gmail.com</Link>
        </motion.div>
    );
};

export default Footer;