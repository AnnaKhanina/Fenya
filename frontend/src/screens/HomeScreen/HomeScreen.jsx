import  "../HomeScreen/HomeScreen.css";
import "../../components/Container/Container.css";

const HomeScreen = () => {
    return (
        <main className="home-screen">
            <div className="container main-container">
                <h2 className="home-screen-title">Головна</h2>
                {/* <img src="https://via.placeholder.com/960x240" alt="" /> */}
                <p className="home-screen-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                    laboriosam placeat incidunt rem illum animi nemo quibusdam quia
                    voluptatum voluptate.
                </p>    
            </div>
        </main>
    );
};

export default HomeScreen;
