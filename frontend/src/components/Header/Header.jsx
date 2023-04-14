import { HeaderWrapper, HeaderContainer, Navbar, NavbarLinks, NavbarLinksItem, NavbarLogo, CartLogoBadge, NavbarSearch, NavbarForm, NavbarInput, NavbarButton, HamburgerMenu } from "../Header/Header.styled";
import { Link } from "react-router-dom";
import { HiSearch, HiOutlineUser, HiOutlineHeart, HiOutlineShoppingCart, HiOutlineMenu  } from "react-icons/hi";
import logo from '../../images/logoFenya.png';

const Header = () => {
    return (   
    <HeaderWrapper>
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
                    <NavbarLinksItem>
                        <NavbarSearch>                               
                            <NavbarForm>                            
                                <NavbarInput type="text" name="filter" placeholder="Пошук"></NavbarInput>                                
                                <NavbarButton type="submit">                                
                                <HiSearch />
                                </NavbarButton>
                            </NavbarForm>                      
                        </NavbarSearch>          
                    </NavbarLinksItem>
                    <NavbarLinksItem>                
                        <Link to="/profile"><HiOutlineUser />Увійти</Link>
                    </NavbarLinksItem>            
                    <NavbarLinksItem>                
                        <Link to="/favorite"><HiOutlineHeart /></Link>
                    </NavbarLinksItem>
                    <NavbarLinksItem>
                        <Link to="/cart">                
                        <HiOutlineShoppingCart />
                        <span>                    
                            <CartLogoBadge>0</CartLogoBadge>
                        </span>
                        </Link>                
                </NavbarLinksItem>                    
                </NavbarLinks> 
                <HamburgerMenu>
                    <span>
                        <HiOutlineMenu/>
                    </span>
                </HamburgerMenu>
            </Navbar>      
        </HeaderContainer>        
    </HeaderWrapper> 
    )
};

export default Header;