import React from "react";
import Link from "next/link";
const Header = () => {
  return (
    <div className="sticky top-1 z-50 navbar bg-[#FE6F69] text-white font-bold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          
          </div>
          <ul
            tabIndex={0}
            className=" dropdown-content bg-base-100 text-[#FE6F69] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/" >Home</Link>
            </li>
            <li>
              <Link href="/all-products" >Shop</Link>
            </li>
            <li>
              <Link href="/contact-us" >Contact Us</Link>
            </li>
          </ul>
        </div>
        <a style={{ "fontFamily": "Dancing Script"}} className="btn btn-ghost text-xl font-bold">FrozoLand</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" menu-horizontal px-1">
          <li className="mx-4" >
          <Link href="/" >Home</Link>
          </li>
          <li className="mx-4" >
          <Link href="/all-products" >Shop</Link>
          </li>
          <li className="mx-4" >
          <Link href="/contact-us" >Contact Us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* <a className="btn">Button</a> */}
      </div>
    </div>
  );
};

export default Header;
