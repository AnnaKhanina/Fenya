import { HomeScreenStyled, HomeScreenTitle, HomeScreenText } from "../HomeScreen/HomeScreen.styled";

const HomeScreen = () => {
    return (
        <HomeScreenStyled>
            <HomeScreenTitle>Головна</HomeScreenTitle>
            {/* <img src="https://via.placeholder.com/960x240" alt="" /> */}
            <HomeScreenText>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                laboriosam placeat incidunt rem illum animi nemo quibusdam quia
                voluptatum voluptate.
            </HomeScreenText>    
        </HomeScreenStyled>
    );
};

export default HomeScreen;
