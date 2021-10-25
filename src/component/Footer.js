import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="container-1">
            <div className="flex justify-center">
                <Link to="/contact" className="text-none color-transition">elodie.sayavong.dev@gmail.com</Link>
            </div>
        </div>
    );
};

export default Footer;