import { Link } from "react-router-dom";
// CSS
import "../App.css";
import "../css/Navbar.modules.css";

const Navbar = () => {
    return (
        <div className="container-1">
            <div className="flex-col">
                <div className="navbar-text">
                    <Link to="/about-me" className="p1 text-none color-transition">about me</Link>
                    <Link to="/project" className="p1 text-none color-transition">check my projects</Link>
                    <Link to="/contact" className="p1 text-none color-transition">contact me</Link>
                </div>
            </div >
        </div >
    );
};

export default Navbar;