import { motion } from "framer-motion";

import "../css/Home.modules.css";

import pageTransition from "../utils/pageTransition";
import timeTransition from "../utils/timeTransition";

const Home = () => {
    return (
        <motion.div
            initial="out"
            exit="out"
            animate="in"
            variants={pageTransition}
            transition={timeTransition}
            className="container-home">
            <div className="flex-col align-center">
                <h1>
                    <span className="color-transition">E </span>
                    <span className="color-transition">L </span>
                    <span className="color-transition">O </span>
                    <span className="color-transition">D </span>
                    <span className="color-transition">I </span>
                    <span className="color-transition">E </span>
                </h1>
                <h1>
                    <span className="color-transition">S </span>
                    <span className="color-transition">A </span>
                    <span className="color-transition">Y </span>
                    <span className="color-transition">A </span>
                    <span className="color-transition">V </span>
                    <span className="color-transition">O </span>
                    <span className="color-transition">N </span>
                    <span className="color-transition">G </span>
                </h1>
                <p className="color-transition">full stack developper</p>
            </div>
        </motion.div>
    );
};

export default Home;