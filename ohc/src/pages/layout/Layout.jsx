import React, { Suspense, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoMdMenu } from "react-icons/io";
import Header from "./Header";
import Logo from "../../assets/images/img.png"
import Logo_L from "../../assets/images/Logo(light).png";
import Logo_D from "../../assets/images/Logo(dark).png";


const Layout = () => {
  const [open, setOpen] = useState(false);

  const Menus = [
    {
      title: "Dashboard",
      icon: <LuLayoutDashboard size={23} />,
      to: "/dashboard",
    },
    { title: "GMD", icon: <LuLayoutDashboard size={23} />, to: "#" },
    { title: "Leads", icon: <LuLayoutDashboard size={23} />, to: "#" },
    { title: "CMS", icon: <LuLayoutDashboard size={23} />, to: "#" },
    { title: "Appoinment", icon: <LuLayoutDashboard size={23} />, to: "#" },
    { title: "Finance", icon: <LuLayoutDashboard size={23} />, to: "#" },
    { title: "Reports", icon: <LuLayoutDashboard size={23} />, to: "#" },
    { title: "Subscription", icon: <LuLayoutDashboard size={23} />, to: "#" },
    { title: "Settings", icon: <LuLayoutDashboard size={23} />, to: "#" },
  ];

  return (
    <>
      <div className="w-screen h-screen flex relative sm:static  bg-overall_bg-light dark:bg-overall_bg-dark">
        <div
          className={`${
            !open ? `sm:static absolute sm:w-[320px] w-4/5 z-10` : `sm:w-28 hidden `
          }  h-screen  sm:block dark:bg-layout-dark bg-layout-light`}
        >
          <div className={`${!open?`pl-3 pt-3`:` pt-6 `}`}
          onClick={() => setOpen(!open)}>
            <IoMdMenu
            size={28}
              className={`${!open?`text-2xl text-layout_text-light dark:text-layout_text-dark`:`hidden`}`}
            />
          
          <div className="flex justify-center w-full  items-center pb-3  "
          >
          {!open?(
              <>
              <img src={Logo_L} alt="logo" className="w-40 dark:hidden -ml-6"/>
              <img src={Logo_D} alt="logo" className="hidden w-40 dark:block -ml-6" />
              </>
         ):(
          <img src={Logo} alt="logo" className="w-20"/>

         )}
          </div>
          </div>
          <ul>
            {Menus.map((menu, index) => (
              <React.Fragment key={index}>
                <NavLink to={menu.to}>
                  <li className="flex justify-start w-full pl-8 gap-2  items-center hover:bg-select_layout-light dark:hover:bg-select_layout-dark py-3 text-layout_text-light dark:text-layout_text-dark  hover:font-semibold hover:text-hover-text-light dark:hover:text-hover-text-dark ">
                    <span className="text-layout_text-light bg-overall_bg-light dark:bg-overall_bg-dark dark:text-layout_text-dark p-2 rounded-md ">
                      {menu.icon}
                    </span>
                    <p className={`${open && `hidden`} font-layout-font text-xl`}>{menu.title}</p>
                  </li>
                </NavLink>
              </React.Fragment>
            ))}
          </ul>
        </div>
        <div className={`${!open ?`sm:p-4`: `sm:p-8 px-1.5`} w-screen`}>
          <Header open={open} setOpen={setOpen} />
          <Suspense>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </>
  );
};

export default Layout;
