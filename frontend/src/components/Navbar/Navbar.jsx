import "./Navbar.styled";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <NavbarStyled>
            <NavbarLogo>
                <NavbarLogoTitle>Fenya</NavbarLogoTitle>
            </NavbarLogo>

            <NavbarLinks>
                <NavbarLinksItem>
                    <Link to = "/cart">

                    </Link>
                </NavbarLinksItem>
            </NavbarLinks>
        </NavbarStyled>
    )
}