import  "../NotFoundScreen/NotFoundScreen.css";
import "../../components/Container/Container.css";

const NotFound = () => {
    return ( 
        <main className="notfound">
            <div className="container">
                <h2 className="notfound-title">404</h2>
                <p className="notfound-text">Sorry, we couldn't find that page</p>
            </div>
        </main>
    );
};

export default NotFound;