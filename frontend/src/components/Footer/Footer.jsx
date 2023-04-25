import { Link } from "react-router-dom";
import "../Footer/Footer.css";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa"; 

const Footer = () => {
    return (  
        <IconContext.Provider value={{ color: "#0a0a0a" }}>     
            <footer className="footer-wrapper">
                <>
                    <div className="footer-container">
                        <div className="footer-top">
                            <ul className="footer-list">
                                <li className="footer-list-item">
                                    <Link to="/about">Про нас</Link>
                                </li>
                                <li className="footer-list-item">
                                    <Link to="/сooperation">Співробітництво</Link>
                                </li>  
                                <li className="footer-list-item">
                                    <Link to="/social" className="social-links">Ми в соцмережі
                                        <ul className="social-list">
                                            <li className="social-list-item">
                                                <FaIcons.FaInstagram />
                                            </li>
                                            <li className="social-list-item">
                                                <FaIcons.FaViber />
                                            </li>
                                            <li className="social-list-item">
                                                <FaIcons.FaTelegram />
                                            </li>
                                        </ul>                
                                    </Link>  
                                </li> 
                                <li className="footer-list-item">
                                    <Link to="/blog" className="social-links">Lady on the Like</Link>
                                </li>                                                
                            </ul>
                        </div>
                    </div>                
                    <div>
                        <div className="footer-rights">
                            <p>&copy; Fenya</p>
                        </div>
                    </div> 
                    </>                                 
            </footer > 
        </IconContext.Provider> 
    )
};

export default Footer;