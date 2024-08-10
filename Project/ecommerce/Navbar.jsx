import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";
import Cookie from "js-cookie";
import { jwtDecode } from "jwt-decode";

const Navbar = ({ user, setUser }) => {
  const [nav, setNav] = useState(false);
  const [login, setLogin] = useState(true);

  useEffect(() => {
    const token = Cookie.get("token");
    if (token) {
      try {
        const tokenObj = jwtDecode(token);

        if (tokenObj && tokenObj._id) {
          console.log(tokenObj._id);
          setUser(tokenObj);
          (user && user._id) ||
          (Cookie.get("token") && jwtDecode(Cookie.get("token"))._id)
            ? setLogin(false)
            : setLogin(true);
        }
      } catch (error) {
        console.error("Failed to parse token:", error);
      }
    }
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    if(window.confirm("Are you sure ?"))
    {Cookie.remove("token");
    setUser({});
    setLogin(true);}
  };

  //max-w-[1200px]
  return (
    <div className=" text-gray-400 bg-white h-[60px] max-w-[1300px] mx-auto flex justify-between items-center sticky top-0 z-10 ">
      <h1 className="text-3xl font-bold primary-color">GROCERY STORE</h1>
      <ul className="hidden md:flex">
        <li className="p-5  ">
          <Link to="/" className="hover:text-red-500">
            Home
          </Link>
        </li>
        <li className="p-5">
          <Link to="cart" className="hover:text-red-500">
            Carts
          </Link>
        </li>
        <li className="p-5">
          {login ? (
            <Link to="/login" className="hover:text-red-500">
              Login
            </Link>
          ) : (
            <span
              onClick={handleLogout}
              className="hover:text-red-500 cursor-pointer"
            >
              {" "}
              Logout
            </span>
          )}
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        className={
          nav
            ? "z-10 fixed h-full left-0 top-0 w-[60%] bg-[#ffffff] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="p-5 text-3xl font-bold primary-color ml-4">
        GROCERY STORE
        </h1>
        <ul className="p-8 text-xl grid grid-cols-1 gap-5">
          <li className="p-2 ">
            <a href="#home" className="hover:text-red-500">
              Home
            </a>
          </li>

          <li className="p-2">
          <Link to="cart" className="hover:text-red-500">
            Carts
          </Link>
          </li>
          <li className="p-2">
          {login ? (
            <Link to="/login" className="hover:text-red-500">
              Login
            </Link>
          ) : (
            <span
              onClick={handleLogout}
              className="hover:text-red-500 cursor-pointer"
            >
              {" "}
              Logout
            </span>
          )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
