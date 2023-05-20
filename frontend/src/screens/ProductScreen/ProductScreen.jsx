
import { IconContext } from "react-icons";
import * as FaIcons from "react-icons/fa"; 
import "../ProductScreen/ProductScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";

const ProductScreen = () => {
    return (        
        <main className="main-screen">
            <IconContext.Provider value={{ color: "#060b26" }}> 
            <div className="container product-container">
                {/* <h2 className="screen-title">Товари</h2>
                <p className="screen-text">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                        laboriosam placeat incidunt rem illum animi nemo quibusdam quia
                        voluptatum voluptate.
                </p> */}  
                <div className="productscreen">
                    <ul className="product-list">
                        <li className="product-list-item">
                            <img className="product-image" src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt="жіноча білизна"/>
                        </li>
                        <li className="product-list-item">                          
                            <p className="product-name">Трусики жіночі</p>                          
                            <p className="product-text">Опис: ажурні трусики від виробника</p>                 
                        </li>
                        <li className="product-list-item">                          
                            <p className="product-name">
                                Ціна: <span className="span-text">259 грн</span>
                            </p>                            
                            <p className="product-name">
                                Наявність: <span className="span-text">є в наявності</span>
                            </p>
                            <p className="product-name-qty">
                                Кількість
                                <select className="product-qty">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </p> 
                            <ul className="product-icons">
                                <li className="product-icons-item">
                                    <button className="product-button" type="button">
                                        <p className="button-text">купити</p>
                                    </button> 
                                </li> 
                                <li className="product-icons-item">
                                    <button className="product-favorite-button" type="button" >
                                        <span className="icon"><FaIcons.FaHeart /></span>
                                        <p className="icon-text">додати до бажаного</p>
                                    </button> 
                                </li>                                   
                            </ul>                                                     
                        </li>
                        <li className="product-list-item">
                            <p className="product-name">Доставка</p>
                            <ul className="product-delivery">
                                <li className="product-delivery-item">Самовивіз — безкоштовно</li>
                                <li className="product-delivery-item">Адресна доставка по Харкову — 99 грн</li>
                                <li className="product-delivery-item">Нова пошта — за тарифами перевізника</li>                                
                            </ul>
                        </li>
                    </ul>                      
                </div>                   
                </div>
            </IconContext.Provider>    
        </main>
    );
};

export default ProductScreen;