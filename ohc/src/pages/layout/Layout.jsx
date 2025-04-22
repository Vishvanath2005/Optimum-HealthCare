import React from "react";
import Logo from "../../assets/images/Main_logo(light).png";
import { NavLink } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import Header from "./Header";


const Layout = () => {
  const Menus = [
    { title: "Dashboard", icon: <LuLayoutDashboard size={23}/>, to: "#" },
    { title: "GMD", icon: <LuLayoutDashboard size={23}/>, to: "#" },
  ];

  return (
    <>
      <div className="w-screen h-screen flex  bg-overall_bg-light dark:bg-overall_bg-dark">
        <div className="w-[350px] h-screen dark:bg-layout-dark bg-layout-light">
          <div className="flex justify-center items-center py-6 pr-6">
            <img src={Logo} alt="logo" />
          </div>
          <ul>
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <NavLink>
                    <li className="flex justify-start w-full pl-8 gap-4  items-center hover:bg-select_layout-light dark:hover:bg-select_layout-dark py-3 text-layout_text-light dark:text-layout_text-dark  hover:font-semibold hover:text-hover-text-light dark:hover:text-hover-text-dark ">
                        <span className="text-layout_text-light bg-overall_bg-light dark:bg-overall_bg-dark dark:text-layout_text-dark p-2 rounded-md ">{menu.icon}</span>
                        <p className="font-layout-font text-xl  ">{menu.title}</p>
                    </li>
                </NavLink>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className=" p-8  w-screen">
            <Header />
        </div>
      </div>
    </>
  );
};

export default Layout;
