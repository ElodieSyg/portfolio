import { useState } from "react";
import { Link } from "react-router-dom";
// CSS
import "../App.css";

const Navbar = () => {
    const [isShow, setIsShow] = useState(false);

    const handleClickDropDown = () => {
        setIsShow(!isShow);
    };

    return (
        <div className="container">
            <div onClick={handleClickDropDown} className="jc_flex-end">
                <img src="./img/menu.png" alt="menu item" width="50px" />
                {
                    isShow &&
                    <div onClick={handleClickDropDown}>
                        <Link to="/about-me">About me</Link>
                        <Link to="/project">Check my projects</Link>
                        <Link to="/contact">Contact me</Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default Navbar;