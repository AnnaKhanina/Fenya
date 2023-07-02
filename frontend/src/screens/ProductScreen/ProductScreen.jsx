import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getProductDetails } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";

import { IconContext } from "react-icons";
// import * as FaIcons from "react-icons/fa"; 
import "../ProductScreen/ProductScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";
import "../../components/Header/Header.css";
// import IconBreadcrumbs from "../../components/Breadcrumb/Breadcrumb";

const ProductScreen = ({ match, history }) => {
    const [qty, setQty] = useState(1);
    const dispatch = useDispatch();
  
    const productDetails = useSelector((state) => state.getProductDetails);
    const { loading, error, product } = productDetails;
  
    useEffect(() => {
      if (product && match.params.id !== product._id) {
        dispatch(getProductDetails(match.params.id));
      }
    }, [dispatch, match, product]);
  
    const addToCartHandler = () => {
      dispatch(addToCart(product._id, qty));
      history.push(`/cart`);
    };


    return (        
        <main className="main-screen">
            <IconContext.Provider value={{ color: "#060b26" }}> 
                <div className="container product-container">
                    {/* <div>
                        <IconBreadcrumbs />
                    </div> */}                                    
                    <div className="productscreen">
                    {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <>
          <div className="productscreen-left">
            <div className="left-image">
              <img src={product.imageUrl} alt={product.name} />
            </div>
            <div className="left-info">
              <p className="left-name">{product.name}</p>
              <p>Price: ${product.price}</p>
              <p>Description: {product.description}</p>
            </div>
          </div>
          <div className="productscreen-right">
            <div className="right-info">
              <p>
                Price:
                <span>${product.price}</span>
              </p>
              <p>
                Status:
                <span>
                  {product.countInStock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </p>
              <p>
                Qty
                <select value={qty} onChange={(e) => setQty(e.target.value)}>
                  {[...Array(product.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
              </p>
              <p>
                <button type="button" onClick={addToCartHandler}>
                  Додати у кошик
                </button>
              </p>
            </div>
          </div>
        </>
      )}
                        {/* <ul className="product-list">
                            <li className="product-list-item img">
                                <img className="product-image" src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt="жіноча білизна"/>
                            </li>
                            <li className="product-list-item">                          
                                <p className="product-name">Трусики ажурні Anna</p>                          
                                <p className="product-text">Опис: ажурні трусики від виробника</p>
                                <div className="color-variants">
                                    <p className="product-name">Вибір кольору</p>
                                    <ul className="color-list">
                                        <li className="color-list-item">
                                            <img className="product-image-variants" src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt="жіноча білизна"/>
                                        </li>
                                        <li className="color-list-item">
                                            <img className="product-image-variants" src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt="жіноча білизна"/>
                                        </li>
                                        <li className="color-list-item">
                                            <img className="product-image-variants" src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt="жіноча білизна"/>
                                        </li>
                                        <li className="color-list-item">
                                            <img className="product-image-variants" src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt="жіноча білизна"/>
                                        </li>
                                        <li className="color-list-item">
                                            <img className="product-image-variants" src="https://scx1.b-cdn.net/csz/news/800a/2021/cat-1.jpg" alt="жіноча білизна"/>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="product-list-item">                          
                                <p className="product-name">
                                    Ціна: <span className="span-text">259 грн</span>
                                </p>                            
                                <p className="product-name">
                                    Наявність: <span className="span-text">є в наявності</span>
                                </p>
                                <p className="product-name">
                                    Розмір
                                    <select className="product-size">
                                        <option value="XS">XS</option>
                                        <option value="S">S</option>
                                        <option value="L">L</option>
                                        <option value="XL">XL</option>
                                        <option value="XXL">XXL</option>
                                        <option value="Batal">Batal</option>
                                    </select>
                                    
                                </p>
                                <p className="product-name">
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
                                            <div className="button-text">
                                                <p>купити</p>
                                            </div>
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
                                    <li className="product-delivery-item">Адресна доставка по Харкову — 59 грн</li>
                                    <li className="product-delivery-item">Нова пошта — за тарифами перевізника</li>
                                    <li className="product-delivery-item">Укр пошта — за тарифами перевізника</li>                                                                
                                </ul>
                            </li>
                        </ul>                       */}
                    </div>                   
                </div>
            </IconContext.Provider>    
        </main>
    );
};

export default ProductScreen;