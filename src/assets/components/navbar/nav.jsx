import React from "react";
import BandageLogo from "../icons/bandagelogo";
import Cart from "../cart";
import Login from "../login";

function Nav() {
  return (
    <header className="flex justify-around">
      <div className="">
        <BandageLogo />
      </div>
      <div className="">
        <div>
          <ul className="flex gap-5 ml-20">
            <li>Home</li>
            <li>About</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>Pages</li>
          </ul>
        </div>
      </div>
   <div className="userdiv flex justify-between items-center">
   <Login />
   <Cart />
   </div>
    </header>
  );
}

export default Nav;
