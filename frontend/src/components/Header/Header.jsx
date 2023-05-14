import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";
//import logo from '../../images/logoFenya.png';
import "../Header/Header.css";
import { SidebarData } from "../SliderbarData/SliderbarData";

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return ( 
        <header>   
            <IconContext.Provider value={{ color: "#FFF" }}>               
                <div className="navbar">               
                    <div className="navbar-logo">                          
                            <Link to="/" end className="logo-links">
                                <h2 className="logo-title">Fenya</h2>
                            </Link>  
                            {/* <Link to="/" end>                   
                                        <img src={logo} alt="Logo" />                                     
                            </Link>                      */}
                        </div>
                        <ul className="navbar-list">            
                            <li className="navbar-list-item">
                                <Link to="/products" className="navbar-links">Товари</Link>
                            </li>
                            <li className="navbar-list-item">
                                <Link to="/size" className="navbar-links">Розмірна сітка</Link>
                            </li>
                            <li className="navbar-list-item">
                                <Link to="/payment_delivery" className="navbar-links">Оплата і доставка</Link>
                            </li>
                            <li className="navbar-list-item">
                                <Link to="/contacts" className="navbar-links">Контакти</Link>
                            </li>                        
                        </ul>
                        <span className="search">                                                
                            <FaIcons.FaSearch />                     
                        </span>
                        <ul className="icons-list">                           
                            <li className="icons-list-item">
                                    <Link to="/profile" className="icons-links"><FaIcons.FaUser/></Link>                        
                                </li>                       
                                <li className="icons-list-item">
                                    <Link to="/favorite" className="icons-links"><FaIcons.FaHeart /></Link>                       
                                </li>
                                <li className="icons-list-item">
                                {/*<Link to="/cart" className="icons-links"><FaIcons.FaCartPlus /><span className="cart-logo-badge">0</span></Link> */}
                                    <Link to="/cart" className="icons-links"><FaIcons.FaCartPlus /></Link> 
                                </li>                            
                        </ul>     
                            <div className="navbar-mob">
                                <Link to="#" className="menu-bars">
                                    <FaIcons.FaBars onClick={showSidebar} />
                                </Link>
                            </div>
                            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                                <ul className="nav-menu-items" onClick={showSidebar}>                                     
                                    <li className="navbar-toggle">
                                        <Link to="#" className="menu-bars">
                                            <AiIcons.AiOutlineClose />
                                        </Link>                                        
                                    </li>
                                    {SidebarData.map((item, index) => {
                                    return (
                                        <li key={index} className={item.cName}>
                                        <Link to={item.path}>
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                        </li>
                                    );
                                    })}
                                </ul>
                        </nav>
                    </div>               
            </IconContext.Provider>
        </header>
    )
};

export default Header;