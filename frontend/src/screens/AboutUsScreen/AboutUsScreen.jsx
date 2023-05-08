import  "../AboutUsScreen/AboutUsScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";

const AboutUsScreen = () => {
    return (
        <main className="main-screen">
            <div className="container">
                <h2 className="aboutus-screen-title">Про нас</h2>
                <p className="aboutus-screen-text">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                    laboriosam placeat incidunt rem illum animi nemo quibusdam quia
                    voluptatum voluptate.
                </p>    
            </div>
            
        </main>
    );
};

export default AboutUsScreen;