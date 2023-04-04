import { Navbar, NavbarLinks, NavbarLinksItem, NavbarLogo, CartLogoBadge, NavbarButton } from "../Header/Header.styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
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
                <Link to="/payment_delivery">Оплата і доставка</Link>
            </NavbarLinksItem>
            <NavbarLinksItem>
                <Link to="/contacts">Контакти</Link>
            </NavbarLinksItem>           
            <NavbarLinksItem>
                <Link to="/favorite"><FontAwesomeIcon icon={faHeart} /></Link>
            </NavbarLinksItem>
            <NavbarLinksItem>
                <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                <span>                    
                    <CartLogoBadge>0</CartLogoBadge>
                </span>
                </Link>                
           </NavbarLinksItem>            
         </NavbarLinks> 
        <NavbarButton><FontAwesomeIcon icon={faUser} /></NavbarButton>  
  </Navbar>          
       
        
    )
}

export default Header;