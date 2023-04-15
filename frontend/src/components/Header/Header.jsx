import { HeaderWrapper, HeaderContainer, Navbar, NavbarLogo, NavbarLinks, NavbarLinksItem, CartLogoBadge, HeaderIconsList, HeaderIconsListItem, HamburgerMenu } from "../Header/Header.styled";
import { Container } from "../App/App.styled";
import { Link } from "react-router-dom";
import { HiSearch, HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineMenu  } from "react-icons/hi";
import logo from '../../images/logoFenya.png';

const Header = () => {
    return (   
        <HeaderWrapper>
            <Container>
                <HeaderContainer>
                    <Navbar> 
                        <NavbarLogo>                          
                                <Link to="/" end>                   
                                    <img src={logo} alt="Logo" />                                     
                                </Link>                          
                        </NavbarLogo>
                        <NavbarLinks>            
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
                        </NavbarLinks> 
                    </Navbar>
                    <HeaderIconsList>
                        <HeaderIconsListItem>
                            <div>                               
                                <span>
                                    <HiSearch />                            
                                        {/* <Input type="text" name="filter" placeholder="Пошук" />                                */}
                                            {/* <Button type="submit"><HiSearch /></Button> */}
                                </span>                      
                            </div> 
                        </HeaderIconsListItem>
                        <HeaderIconsListItem>
                            <div>                
                                <Link to="/profile"><HiOutlineUser /></Link>
                            </div>
                        </HeaderIconsListItem>                       
                        <HeaderIconsListItem>
                            <div>                
                                <Link to="/favorite"><HiOutlineHeart /></Link>
                            </div>
                        </HeaderIconsListItem>
                        <HeaderIconsListItem>
                            <div>
                                <Link to="/cart"><HiOutlineShoppingCart /><span><CartLogoBadge>0</CartLogoBadge></span></Link> 
                            </div> 
                        </HeaderIconsListItem>                                         
                    </HeaderIconsList> 
                    <HamburgerMenu>
                        <button type="button"><HiOutlineMenu /></button>           
                    </HamburgerMenu> 
                </HeaderContainer> 
            </Container>                    
        </HeaderWrapper> 
    )
};

export default Header;