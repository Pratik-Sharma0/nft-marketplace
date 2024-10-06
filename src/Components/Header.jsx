import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { LuBellDot } from 'react-icons/lu';
import { FiShoppingCart } from 'react-icons/fi';
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
    <nav
      className={`flex items-center px-[5%] py-5 gap-8 border shadow-md md:border-0 md:shadow-none lg:w-[100%] w-[200%] md:w-[full] ${
        showMenu ? 'fixed bg-white top-0 left-0 right-0 z-50 w-[100%]' : ''
      }`}
    >
      <img src="/images/logo.png" alt="logo" className="lg:w-[60px] w-[100px]" />
      <ul className="lg:flex gap-10 hidden md:flex">
        <li>
          <a href="/shops">Shops</a>
        </li>
        <li>
          <a href="/communities">Communities</a>
        </li>
        <li>
          <a href="/drops">Drops</a>
        </li>
        <li>
          <a href="/stats">Stats</a>
        </li>
      </ul>
      <IoIosSearch
        className={`absolute ${showMenu ? 'left-[22%]' : 'left-[38%]'} lg:left-[38.5%] md:text-xl md:left-[7%]`}
      />
      <input
        style={{ borderColor: "#E36414" }}
        className="md:w-[478px] w-[300px] px-[4%] py-2 rounded-md border-2"
        type="text"
        placeholder="Find digital products to own..."
      />
      <a href="/beta" className="underline hidden md:block">
        Beta
      </a>
      <div className="flex gap-2 items-center lg:w-auto w-[5%]">
        <img className="lg:w-[30px] w-[60px]" src="/images/Avatar.png" alt="logo" />
        <select className="">
          <option value="Edric Jaye">Edric Jaye</option>
        </select>
      </div>
      <div className="flex gap-4 items-center text-3xl lg:text-2xl lg:ml-0 ml-[10%]">
        <a className="" href="/bell">
          <LuBellDot />
        </a>
        <a className="" href="/cart">
          <FiShoppingCart />
        </a>
      </div>
      <div className=" lg:hidden md:hidden">
        {showMenu ? (
          <RxCross2
            style={{ color: "#d95e12", fontWeight: "bold" }}
            onClick={handleMenu}
            className="text-4xl mr-[10%]"
          />
        ) : (
          <RxHamburgerMenu
            style={{ color: "#d95e12", fontWeight: "bold" }}
            onClick={handleMenu}
            className="text-4xl "
          />
        )}
      </div>
    </nav>
    {
      showMenu &&
      <div style={{backgroundColor:'#d95e12'}} className=" fixed bg-white top-[4%] h-[100%] left-0 right-0 z-50 ">
        <div className='text-white flex flex-col items-center gap-10 mt-[20%] text-3xl font-medium'>
        <a href="/shops">Shops</a>
        <hr className='w-[80%]'/>
        <a href="/communities">Communities</a>
        <hr className='w-[80%]'/>
        <a href="/drops">Drops</a>
        <hr className='w-[80%]'/>
        <a href="/stats">Stats</a>
        <hr className='w-[80%]'/>
        </div>
       
      </div>
      
    }

    </>
 
  );
};

export default Header;