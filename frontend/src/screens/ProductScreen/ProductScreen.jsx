import "../ProductScreen/ProductScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";

const ProductScreen = () => {
    return (
        <main className="main-screen">
            <div className="container">
                <h2 className="screen-title">Товари</h2>
                <p className="screen-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
                        voluptatum voluptate.
                </p>
                <div className="productscreen">
                    <div className="productscreen-left">
                        <div className="left-image">
                        <img src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt="жіноча білизна"/>
                        </div>            
                        <div className="left-info">
                            <p className="left-name">Трусики жіночі</p>
                            <p>Ціна: 259 грн</p>
                            <p>Опис: ажурні трусики від виробника</p>
                        </div>
                    </div> 
                    <div className="productscreen-right">
                        <div className="right-info">
                            <p>
                                Ціна: <span>259 грн</span>
                            </p>
                            <p>
                                Наявність: <span>є в наявності</span>
                            </p>
                            <p>
                                Кількість
                                <select>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </p>
                             <p>
                               <button type="button">Додати в кошик</button> 
                            </p>  
                        </div>
                    </div>                   
                </div> 
            </div>
        </main>
    );
};

export default ProductScreen;