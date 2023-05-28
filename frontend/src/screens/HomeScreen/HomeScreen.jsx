import  "../HomeScreen/HomeScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";
import  Product  from "../../components/Product/Product";

const HomeScreen = () => {
    return (
        <main className="main-screen">
            <div className="container">                
                <div className="homescreen-products">
                    <h2 className="screen-title">Головна</h2>                   
                    <p className="screen-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
                        voluptatum voluptate.
                    </p>
                    <Product /> 
                    <Product />   
                    <Product /> 
                    <Product />     
                    <Product /> 
                    <Product />   
                    <Product /> 
                    <Product />                                      
                </div>    
            </div>
        </main>
    );
};

export default HomeScreen;
