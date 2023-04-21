import { SideDrawerWrapper } from "../SideDrawer/SideDrawer.styled";
import { Link } from "react-router-dom";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { CartLogoBadge } from "../Header/Header.styled";

const SideDrawer = ({show, click}) => {

    const sideDrawerClass = {SideDrawerWrapper};

      if(show) {
        sideDrawerClass.push("show");
      }

    return (
        <div classname={sideDrawerClass.join(" ")}>
            <ul onClick={click}>
              <li>
                <Link to="/cart">
                    <HiOutlineShoppingCart /><span><CartLogoBadge>0</CartLogoBadge></span>
                </Link>
              </li>
              <li>
                <Link to="/">Головна
                </Link>
              </li>
            </ul>
        </div>
    )      
};


export default SideDrawer;