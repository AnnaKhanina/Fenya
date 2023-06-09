import React from "react";

import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as TbIcons from "react-icons/tb";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text"
  },
  
  {
    title: "Profile",
    path: "/profile",
    icon: <FaIcons.FaUser />,
    cName: "nav-text"
  },
  
  {
    title: "Favorite",
    path: "/favorite",
    icon: <FaIcons.FaHeart />,
    cName: "nav-text"
  },

  {
    title: "Cart",
    path: "/cart",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text"
  },
 
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaRegListAlt />,
    cName: "nav-text"
  },

  {
    title: "Size",
    path: "/size",
    icon: <BsIcons.BsFillFileEarmarkSpreadsheetFill />,
    cName: "nav-text"
  },

  {
    title: "PaymentDelivery",
    path: "/payment_delivery",
    icon: <TbIcons.TbTruckDelivery />,
    cName: "nav-text"
  },

  {
    title: "Contacts",
    path: "/contacts",
    icon: <AiIcons.AiOutlineContacts />,
    cName: "nav-text"
  }
];