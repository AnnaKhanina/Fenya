import "./Product.css";
import {Link} from "react-router-dom";

const Product = () => {
    return (
        <div className="product">
            <img src="https://images.prom.ua/433953593_w640_h640_trusy-zhenskie-azhurnye.jpg" alt ="Трусики жіночі сліпери Anna"/>
            <div className="product-info">
                <p className="info-name">Трусики жіночі сліпери Anna</p>
                <p className="info-description">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                    laboriosam placeat incidunt rem illum animi nemo quibusdam quia
                    voluptatum voluptate.
                </p>

                <p className="info-price">259грн</p>

                <Link to={`/product/${1111}`} className="info-button">Перегляд</Link>
            </div>
        </div>
    )
}

export default Product;