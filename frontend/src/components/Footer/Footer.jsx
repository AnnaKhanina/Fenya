import { Link } from "react-router-dom";
import  "../Container/Container.css";
import "../Footer/Footer.css"
import * as FaIcons from "react-icons/fa"; 

const Footer = () => {
    return (  
        <IconContext.Provider value={{ color: "#0a0a0a" }}>     
            <footer className="footer-wrapper">
                <div className="container">
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
                                                <FaIcons.faInstagram />
                                            </li>
                                            <li className="social-list-item">
                                                <FaIcons.faViber />
                                            </li>
                                            <li className="social-list-item">
                                                <FaIcons.faTelegram />
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
                </div>                                  
            </footer > 
        </IconContext.Provider> 
    )
};

export default Footer;