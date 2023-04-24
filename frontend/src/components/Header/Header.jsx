// import { HeaderWrapper, HeaderContainer, Navbar, NavbarLogo, NavbarLinks, NavbarLinksItem, CartLogoBadge, HeaderIconsList, HeaderIconsListItem, HamburgerMenu } from "../Header/Header.styled";
// import { Container } from "../App/App.styled";
// import { Link } from "react-router-dom";
// import { HiSearch, HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineMenu  } from "react-icons/hi";
// import logo from '../../images/logoFenya.png';

// const Header = ({click}) => {
//     return (   
//         <HeaderWrapper>
//             <Container>
//                 <HeaderContainer>
//                     <Navbar> 
//                         <NavbarLogo>                          
//                                 <Link to="/" end>                   
//                                     <img src={logo} alt="Logo" />                                     
//                                 </Link>                          
//                         </NavbarLogo>
//                         <NavbarLinks>            
//                             <NavbarLinksItem>
//                                 <Link to="/products">Товари</Link>
//                             </NavbarLinksItem>
//                             <NavbarLinksItem>
//                                 <Link to="/size">Розмірна сітка</Link>
//                             </NavbarLinksItem>
//                             <NavbarLinksItem>
//                                 <Link to="/payment_delivery">Оплата і доставка</Link>
//                             </NavbarLinksItem>
//                             <NavbarLinksItem>
//                                 <Link to="/contacts">Контакти</Link>
//                             </NavbarLinksItem>
//                         </NavbarLinks>
//                         <HeaderIconsList>
//                             <HeaderIconsListItem>
//                                 <div>                               
//                                     <span>
//                                         <HiSearch />                            
//                                             {/* <Input type="text" name="filter" placeholder="Пошук" />                                */}
//                                                 {/* <Button type="submit"><HiSearch /></Button> */}
//                                     </span>                      
//                                 </div> 
//                             </HeaderIconsListItem>
//                             <HeaderIconsListItem>
//                                 <div>                
//                                     <Link to="/profile"><HiOutlineUser /></Link>
//                                 </div>
//                             </HeaderIconsListItem>                       
//                             <HeaderIconsListItem>
//                                 <div>                
//                                     <Link to="/favorite"><HiOutlineHeart /></Link>
//                                 </div>
//                             </HeaderIconsListItem>
//                             <HeaderIconsListItem>
//                                 <div>
//                                     <Link to="/cart"><HiOutlineShoppingCart /><span><CartLogoBadge>0</CartLogoBadge></span></Link> 
//                                 </div> 
//                             </HeaderIconsListItem>                                         
//                         </HeaderIconsList> 
//                         <HamburgerMenu onClick={click}>                        
//                         <button type="button"><HiOutlineMenu /></button>           
//                     </HamburgerMenu> 
//                     </Navbar>
                    
//                     {/* <HamburgerMenu onClick={click}>                        
//                         <button type="button"><HiOutlineMenu /></button>           
//                     </HamburgerMenu>  */}
//                 </HeaderContainer> 
//             </Container>                    
//         </HeaderWrapper> 
//     )
// };

// export default Header;


import { Link } from "react-router-dom";
import React, { useState } from "react";
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa"; 
import * as AiIcons from "react-icons/ai";

import "../Header/Header.css";
import { SidebarData } from "../SliderbarData/SliderbarData";
import logo from '../../images/logoFenya.png';

const Header = () => {

    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return ( 
        <>   
            <IconContext.Provider value={{ color: "#FFF" }}>
            <div className="navbar">  

                <span className="navbar-logo">                          
                    <Link to="/" end>                   
                        <img src={logo} alt="Logo" />                                                                      </Link>                          
                </span>
                <ul className="navbar-links">            
                    <li className="navbar-links__item">
                        <Link to="/products">Товари</Link>
                    </li>
                    <li className="navbar-links__item">
                        <Link to="/size">Розмірна сітка</Link>
                    </li>
                    <li className="navbar-links__item">
                        <Link to="/payment_delivery">Оплата і доставка</Link>
                    </li>
                    <li className="navbar-links__item">
                    <Link to="/contacts">Контакти</Link>
                    </li>
                    {/* <li className="navbar-links__item">
                    <FaIcons.FaSistrix />
                    </li> */}
                </ul>
                <ul className="header-icons-list">
                    <li className="header-icons-list__item">                                                
                        <FaIcons.FaSearch />                     
                    </li>                    
                    <li className="header-icons-list__item">
                        <div>                
                           <FaIcons.FaUser/>
                        </div>
                    </li>                       
                    <li className="header-icons-list__item">
                        <div>                
                    <FaIcons.FaHeart />
                        </div>
                    </li>
                    <li className="header-icons-list__item">
                        <div>
                           <FaIcons.FaShoppingCart />
                                <span className="cart-logo-badge">0</span>                       
                        </div> 
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
        </>
    )
};

export default Header;