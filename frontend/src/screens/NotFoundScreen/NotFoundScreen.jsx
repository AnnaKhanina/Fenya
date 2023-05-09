import  "../NotFoundScreen/NotFoundScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";

const NotFound = () => {
    return ( 
        <main className="main-screen">
            <div className="container">
                <h2 className="screen-title">404</h2>
                <p className="screen-text">Sorry, we couldn't find that page</p>
            </div>
        </main>
    );
};

export default NotFound;