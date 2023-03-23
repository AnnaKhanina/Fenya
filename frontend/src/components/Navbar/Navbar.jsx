import "./Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <NavbarStyled>
            {/*logo*/}
            <NavbarLogo>
                <NavbarLogoTitle>Fenya</NavbarLogoTitle>
            </NavbarLogo>
            {/*links*/}
            <NavbarLinks>
                <NavbarLinksItem>
                    <Link to = "/cart">
                        Кошик
                        <a href="">
                            <svg width="20" height="20">
                                <use href="../../images/icons.svg#icon-shopping-cart"></use>
                            </svg>
                        </a>
                        <CartLogo>0</CartLogo>
                    </Link>
                </NavbarLinksItem>
                <NavbarLinksItem>
                    <Link to="/">
                        Shop
                    </Link>
                </NavbarLinksItem>
            </NavbarLinks>
            {/*hamburger menu*/}
            <HamburgerMenuStyled>

            </HamburgerMenuStyled>
        </NavbarStyled>
    )
}