import React from "react";
import Logo from "../img/R-modified.png";
import { MdPersonPin, MdShoppingCart } from "react-icons/md";

import {motion} from "framer-motion";
import Avatar from "../img/avatar.png";
import { Link } from "react-router-dom";

import { getAuth, GoogleAuthProvider, signInWithPopup }
 from "firebase/auth";
import {app} from "../firebase.config";
import { useStateValue } from "./context/StateProvider";
import { actionType } from "./context/reducer";


 const Header = () => {
  
  const firebaseAuth=getAuth(app);

  const provider=new GoogleAuthProvider();

  const [{user}, dispatch] = useStateValue();

  const login=async ()=> {
    // const response= await signInWithPopup(firebaseAuth, provider);

    // destructuring the response
    const {user : {refreshToken, providerData}}=await signInWithPopup(firebaseAuth, provider);

    dispatch({
      type: actionType.SET_USER,
      user: providerData[0]
    });

    // user data gets set to null when the page is refreshed, to avoid that user data has to be stored in localstorage

    localStorage.setItem('user', JSON.stringify(providerData[0]));

    // console.log(response);
  }


  return (
    <header className="fixed z-50 w-screen p-6 px-16 bg-headerBg">
      {/* desktop and tablet */}
      <div className="hidden md:flex w-full h-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} className="w-12 object-cover" alt="logo" />
          <p className="text-headingColor text-xl font-bold hover:text-stone-500">
            {" "}
            Veg Store{" "}
          </p>
        </Link>

        <div className="flex items-center">
          <ul className="flex items-center gap-8">
            <li className="text-base text-textColor hover:text-neutral-500 duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-neutral-500 duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-neutral-500 duration-100 transition-all ease-in-out cursor-pointer">
              About us
            </li>
            <li className="text-base text-textColor hover:text-neutral-500 duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </ul>

          <div className="relative flex items-center justify-center">
            <MdShoppingCart className="text-textColor text-2xl ml-8 cursor-pointer hover:text-lime-100" />
            <div className="absolute -top-2 -right-2  w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center">
              <p className="text-xs  text-white font-semibold">2</p>
            </div>
          </div>
{/* 
          <motion.MdPersonPin whileTap={{scale:0.6}} className="text-textColor text-2xl ml-8 cursor-pointer hover:text-lime-100 w-10 min-w-[30px] h-10 min-h-[30px] drop-shadow-xl" /> */}

          <div className="relative">
          <motion.img
            src={user? user.photoURL : Avatar} whileTap={{scale: 0.6}} referrerPolicy="no-referrer" 
            className="ml-8 w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer drop-shadow-2xl rounded-full"
            alt="userprofile"
            onClick={login}
          />
          </div>
      
        </div>
      </div>

      {/* mobile */}
      <div className="flex md:hidden w-full h-full bg-blue-500"></div>
    </header>
  );
};

export default Header;