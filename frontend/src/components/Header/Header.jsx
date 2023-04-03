import { Navbar, NavbarLinks, NavbarLinksItem, NavbarLogo, NavbarTitle, NavbarButton } from "../Header/Header.styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart, faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
    return (        
    <Navbar> 
        <NavbarLinks>
            <NavbarLinksItem>
                <Link to="/" end>
                    <NavbarLogo>
                        <NavbarTitle>Fenya</NavbarTitle>
                    </NavbarLogo>                         
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
                <Link to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
           </NavbarLinksItem>            
         </NavbarLinks> 
        <NavbarButton><FontAwesomeIcon icon={faUser} /></NavbarButton>  
  </Navbar>          
       
        
    )
}

export default Header;