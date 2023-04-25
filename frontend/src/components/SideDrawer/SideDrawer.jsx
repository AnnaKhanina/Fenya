// import { SideDrawerWrapper, SideDrawerList, SideDrawerItem } from "../SideDrawer/SideDrawer.styled";
// import { Link } from "react-router-dom";
// import { HiOutlineShoppingCart } from "react-icons/hi";
// import { CartLogoBadge } from "../Header/Header.styled";
// //import { useSelector } from "react-redux";

// const SideDrawer = ({show, click}) => {

//     //const sideDrawerClass = ["sidedrawer"];

//     const SideDrawerClass = [SideDrawerWrapper];

//     // const cart = useSelector((state) => state.cart);
//     // const { cartItems } = cart;

//     // const getCartCount = () => {
//     //   return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
//     // };

//     if(show) {
//         SideDrawerClass.push("show");
//       }

//     return (
//         <>
//         {SideDrawerClass.join(" ")}       
//             <SideDrawerList onClick={click}>
//               <SideDrawerItem>
//                 <Link to="/cart">
//                     <HiOutlineShoppingCart /><span><CartLogoBadge>0</CartLogoBadge></span>
//                 </Link>
//               </SideDrawerItem>
//               <SideDrawerItem>
//                 <Link to="/">Головна
//                 </Link>
//               </SideDrawerItem>
//             </SideDrawerList>
//             </>
      
//     )      
// };


// export default SideDrawer;