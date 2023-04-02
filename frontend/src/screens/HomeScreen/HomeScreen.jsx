// import { HomeScreenStyled, HomeScreenTitle, HomeScreenText } from "../HomeScreen/HomeScreen.styled";

// const HomeScreen = () => {
//     return (
//         <HomeScreenStyled>
//             <HomeScreenTitle>Головна</HomeScreenTitle>
//             <img src="https://via.placeholder.com/960x240" alt="" />
//             <HomeScreenText>
//                 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
//                 laboriosam placeat incidunt rem illum animi nemo quibusdam quia
//                 voluptatum voluptate.
//             </HomeScreenText>    
//         </HomeScreenStyled>
//     );
// };

// export default HomeScreen;
import { NavbarLinks, NavbarLinksItem, NavbarLogo, NavbarTitle, NavbarIcon, NavbarButton } from "../../components/App/App.styled";

const HomeScreen = () => {
    return (
        <Nav> 
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
                <Link to="/favorite">
                    <NavbarIcon></NavbarIcon>
                      Бажане      
                </Link>
            </NavbarLinksItem>
            <NavbarLinksItem>
                <Link to="/cart">
                   <NavbarIcon></NavbarIcon>
                     Кошик       
                 </Link>
            </NavbarLinksItem>               
          </NavbarLinks> 
          <NavbarButton>Увійти</NavbarButton>  
       </Nav>  
    );
};

export default HomeScreen;