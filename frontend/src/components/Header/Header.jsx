import { HeaderWrapper, HeaderContainer, Navbar, NavbarLogo, NavbarLinks, NavbarLinksItem, CartLogoBadge, HeaderIconsList, Search, Form, HamburgerMenu } from "../Header/Header.styled";
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
                            <span>
                                <Link to="/" end>                   
                                    <img src={logo} alt="Logo" />                                     
                                </Link>
                            </span>
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
                            <Search>                               
                                <Form>
                                    <HiSearch />                            
                                        {/* <Input type="text" name="filter" placeholder="Пошук" />                                */}
                                            {/* <Button type="submit"><HiSearch /></Button> */}
                                </Form>                      
                            </Search> 
                        </HeaderIconsListItem>
                        <HeaderIconsListItem>
                            <Profile>                
                                <Link to="/profile"><HiOutlineUser />Увійти</Link>
                            </Profile>
                        </HeaderIconsListItem>                       
                        <HeaderIconsListItem>
                            <Favorite>                
                                <Link to="/favorite"><HiOutlineHeart /></Link>
                            </Favorite>
                        </HeaderIconsListItem>
                        <HeaderIconsListItem>
                            <Cart>
                                <Link to="/cart"><HiOutlineShoppingCart /><span><CartLogoBadge>0</CartLogoBadge></span></Link> 
                            </Cart> 
                        </HeaderIconsListItem>                                         
                    </HeaderIconsList> 
                </HeaderContainer> 
            </Container>                       
            <HamburgerMenu>
                <span><HiOutlineMenu/></span>
            </HamburgerMenu>         
        </HeaderWrapper> 
    )
};

export default Header;