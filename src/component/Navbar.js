import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import pageTransition from "../utils/pageTransition";
import timeTransition from "../utils/timeTransition";

import "../App.css";
import "../css/Navbar.modules.css";

const Navbar = () => {
    return (
        <motion.div
            initial="out"
            exit="out"
            animate="in"
            variants={pageTransition}
            transition={timeTransition}
            className="container-navbar">
            <div className="">
                <Link to="/" className="p1 text-none color-transition">home</Link>
                <Link to="/about-me" className="p1 text-none color-transition">about me</Link>
                <Link to="/project" className="p1 text-none color-transition">check my projects</Link>
                <Link to="/contact" className="p1 text-none color-transition">contact me</Link>
            </div >
        </motion.div >
    );
};

export default Navbar;