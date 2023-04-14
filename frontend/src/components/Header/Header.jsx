import { Navbar, NavbarLinks, NavbarLinksItem, NavbarLogo, CartLogoBadge, NavbarSearch, NavbarForm, NavbarInput, NavbarButton, HamburgerMenu } from "../Header/Header.styled";
import { Link } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCartShopping, faHeart, faUser, faSearch } from "@fortawesome/free-solid-svg-icons";
import { HiSearch, HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import logo from '../../images/logoFenya.png';

const Header = () => {
    return (        
    <Navbar> 
        <NavbarLinks>
            <NavbarLinksItem>
                <Link to="/" end>                   
                     <NavbarLogo><img src={logo} alt="Logo" /></NavbarLogo>                                     
                </Link>
            </NavbarLinksItem>
            <NavbarLinksItem>
                <Link to="/products">Товари</Link>
            </NavbarLinksItem>
            <NavbarLinksItem>
                <Link to="/size">Розмірна сітка</Link>
            </NavbarLinksItem>
            <NavbarLinksItem>
                <Link to="/payment_delivery">Оплата і доставка</Link>
            </NavbarLinksItem>
            <NavbarLinksItem>
                <Link to="/contacts">Контакти</Link>
            </NavbarLinksItem>
            <NavbarLinksItem>
                <NavbarSearch>                               
                        <NavbarForm>                            
                             <NavbarInput type="text" name="filter" placeholder="Пошук"></NavbarInput>                                
                             <NavbarButton type="submit">
                                {/* <FontAwesomeIcon icon={faSearch} /> */}
                                <HiSearch />
                             </NavbarButton>
                        </NavbarForm>                      
                </NavbarSearch>          
            </NavbarLinksItem>
            <NavbarLinksItem>
                {/* <Link to="/profile"><FontAwesomeIcon icon={faUser} />Увійти</Link> */}
                <Link to="/profile"><HiOutlineUser />Увійти</Link>
            </NavbarLinksItem>            
            <NavbarLinksItem>
                {/* <Link to="/favorite"><FontAwesomeIcon icon={faHeart} /></Link> */}
                <Link to="/favorite"><HiOutlineHeart /></Link>
            </NavbarLinksItem>
            <NavbarLinksItem>
                <Link to="/cart">
                {/* <FontAwesomeIcon icon={faCartShopping} /> */}
                <HiOutlineShoppingCart />
                <span>                    
                    <CartLogoBadge>0</CartLogoBadge>
                </span>
                </Link>                
           </NavbarLinksItem>                    
         </NavbarLinks> 
         <HamburgerMenu>
            <div></div>
            <div></div>
            <div></div>
         </HamburgerMenu>
  </Navbar>      
    )
}

export default Header;