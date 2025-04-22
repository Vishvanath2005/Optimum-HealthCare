import React from 'react'
import { CiSearch } from "react-icons/ci";
import { GoBell } from "react-icons/go";
import ThemeToggle from '../../component/ThemeToggle';

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
         <div className="flex flex-col ">
            <p className="text-sm text-header_icons-light dark:text-header_icons-dark font-layout-font">Dashboard / Main Dashboard</p>
            <p className="text-2xl text-header_icons-light dark:text-header_icons-dark font-layout-font font-semibold">Main Dashboard</p>
          </div>
          <div className=" ">
          <div className="bg-layout-light dark:bg-layout-dark flex rounded-4xl px-4 py-2 justify-between ">
            <span className="flex justify-center gap-2 items-center p-1 rounded-full outline-none bg-overall_bg-light dark:bg-overall_bg-dark">
              <CiSearch size={20} className='text-header_icons-light dark:text-header_icons-dark ' />
              <input
                type="text"
                name="search"
                placeholder="search"
                id="search"
                className="placeholder:text-header_icons-light dark:placeholder:text-header_icons-dark text-header_icons-light dark:text-header_icons-dark w-36 bg-transparent outline-none"
              />
            </span>
            <span className="relative md:flex justify-center hidden items-center bg-overall_bg-light dark:bg-overall_bg-dark rounded-full mx-2 p-2 cursor-pointer">
              
                <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border border-black"></span>
           
              <GoBell className="size-5  text-header_icons-light dark:text-header_icons-dark" />
            </span>
            <span className="md:flex hidden  text-header_icons-light dark:text-header_icons-dark font-layout-font justify-center items-center gap-2">
              <p>Profile name</p>
              <p className="bg-overall_bg-light dark:text-header_icons-dark text-header_icons-light dark:bg-overall_bg-dark rounded-full p-2">KA</p>
            </span>
            <span className='pl-2'>
            <ThemeToggle />
            </span>
          </div>
        </div>
    </div>
  )
}

export default Header