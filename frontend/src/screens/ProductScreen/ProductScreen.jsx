import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { getProduct } from '../actions/productActions';

import { IconContext } from "react-icons";
import "../ProductScreen/ProductScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";
import "../../components/Header/Header.css";


const ProductScreen = ({ match }) => {
  const dispatch = useDispatch();

  const productId = match.params.id;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(getProduct(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
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
                      <p>Loading...</p>
                    ) : error ? (
                      <p>Error: {error}</p>
                    ) : (
                      <div>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Size: {product.size}</p>
                        <p>Color: {product.color}</p>
                        <button onClick={handleAddToCart}>Add to Cart</button>
                      </div>
                    )}
                    </div>                   
                </div>
            </IconContext.Provider>    
        </main>
    );
};

export default ProductScreen;