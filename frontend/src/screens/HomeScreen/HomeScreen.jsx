import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
 
import  "../HomeScreen/HomeScreen.css";
import "../../components/Container/Container.css";
import "../MainScreen/MainScreen.css";

import  Product  from "../../components/Product/Product";

import {getProducts as listProducts} from "../../redux/actions/productActions";

const HomeScreen = () => {

    const dispatch = useDispatch();

    const getProducts = useSelector(state => state.getProducts);
    const { products, loading, error } = getProducts;

    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch]);

    return (
        <main className="main-screen">
            <div className="container">  
            <h2 className="screen-title">Останні надходження</h2>                                
                <div className="homescreen-products">
                    {/* <Product /> 
                    <Product />   
                    <Product /> 
                    <Product />     
                    <Product /> 
                    <Product />   
                    <Product /> 
                    <Product /> */}
                    {loading ? <h2>Loading...</h2> : error ? <h2>{error}</h2> : products.map(product => (
                        <Product/>
                    )) }
                </div>    
            </div>
        </main>
    );
};

export default HomeScreen;
