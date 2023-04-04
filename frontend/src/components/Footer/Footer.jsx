import { FooterNav, FooterLinks, FooterLinksItem } from "../Footer/Footer.styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <FooterNav>
            <FooterLinks>
                <FooterLinksItem>
                    <Link to="/products">Товари</Link>
                </FooterLinksItem>
                <FooterLinksItem>
                    <Link to="/payment_delivery">Оплата і доставка</Link>
                </FooterLinksItem>
                <FooterLinksItem>
                    <Link to="/contacts">Контакти</Link>
                </FooterLinksItem>           
                <FooterLinksItem>
                    <Link to="/favorite"><FontAwesomeIcon icon={faHeart} /></Link>
                </FooterLinksItem>
                <FooterLinksItem>
                    <Link to="/cart">
                        <FontAwesomeIcon icon={faCartShopping} />
                    </Link>                
                </FooterLinksItem>            
            </FooterLinks>
        </FooterNav>
    )
};

export default Footer;