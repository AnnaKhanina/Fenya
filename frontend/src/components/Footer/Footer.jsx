import { FooterNav, FooterLinks, FooterLinksItem, FooterSocialList,FooterSocialListItem } from "../Footer/Footer.styled";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faViber, faTelegram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (
        <FooterNav>
            <FooterLinks>
                <FooterLinksItem>
                    <Link to="/about">Про нас</Link>
                </FooterLinksItem>
                <FooterLinksItem>
                    <Link to="/сooperation">Співробітництво</Link>
                </FooterLinksItem>  
                <FooterLinksItem>
                    <Link to="/social">Ми в соцмережі
                        <FooterSocialList>
                            <FooterSocialListItem>
                                <FontAwesomeIcon icon={faInstagram} />
                            </FooterSocialListItem>
                            <FooterSocialListItem>
                                <FontAwesomeIcon icon={faViber} />
                            </FooterSocialListItem>
                            <FooterSocialListItem>
                                <FontAwesomeIcon icon={faTelegram} />
                            </FooterSocialListItem>
                        </FooterSocialList>
                        <FooterLinksItem>
                    <Link to="/blog">Lady on the Like</Link>
                </FooterLinksItem> 
                    </Link>    
                </FooterLinksItem>                                   
            </FooterLinks>
        </FooterNav>
    )
};

export default Footer;