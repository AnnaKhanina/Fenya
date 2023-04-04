import { Footer, FooterLinks, FooterLinksItem } from "../Footer/Footer.styled";

const Footer = () => {
    return (
        <Footer>
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
        </Footer>
    )
}