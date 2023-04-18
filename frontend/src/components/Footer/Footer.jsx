import { FooterWrapper, FooterContainer, FooterTop, FooterLinks, FooterLinksItem, FooterSocialList, FooterSocialListItem, FooterRightsContainer } from "../Footer/Footer.styled";
import { Link } from "react-router-dom";
import { Container } from "../App/App.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faViber, faTelegram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return (       
        <FooterWrapper>
            <Container>
                <FooterContainer>
                    <FooterTop>
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
                                </Link>  
                            </FooterLinksItem> 
                            <FooterLinksItem>
                                <Link to="/blog">Lady on the Like</Link>
                            </FooterLinksItem>                                                
                        </FooterLinks>
                    </FooterTop>
                </FooterContainer>                
                <div>
                    <FooterRightsContainer>
                        <p>&copy; Fenya</p>
                    </FooterRightsContainer>
                </div> 
            </Container>                                  
        </FooterWrapper >  
    )
};

export default Footer;