import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { ReactComponent as YourSvg } from '../../assets/logo-light.svg';
import './Menu.css';

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => setSize([window.innerHeight, window.innerWidth]);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function Menu() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [height, width] = useWindowSize();
  if(width > 800 && mobileMenu === false) {
    setMobileMenu(true);
  }
  return (
    <>        
    {/*--==================== HEADER ====================--> */}
    <div className="border-b border-slate-100/25">
      <div className="nav bg-slate-900">
        <div className="left">
        <Link to="/home"><YourSvg/></Link>
        </div>
        <div className="middle">
           <Link to="/home" className="item">Home</Link>
           <Link to="/markets" className="item">Markets</Link>
           <Link to="/capitalization" className="item">Capitalization</Link>
           <Link to="/about" className="item">About</Link>
        </div>
        <div className="right">
          <button className="material-symbols-outlined notification pr-5" >notifications</button>
          <button className="material-symbols-outlined account pr-5">account_circle</button> 
          {mobileMenu ? (
          <button className="material-symbols-outlined hamburger float-right pr-10" onClick={() => setMobileMenu(!mobileMenu)}>menu</button>):
          (<button className="material-symbols-outlined hamburger float-right pr-10" onClick={() => setMobileMenu(!mobileMenu)}>close</button>)}
        </div>
       </div>

        {!mobileMenu ? (
          <div className="w-screen bg-slate-900 grid grid-cols-1 gap-6 ... text-white pl-10 pt-5 ">
            <div><Link to="/home" className="item-mobile">Home</Link></div>
            <div><Link to="/markets" className="item-mobile">Markets</Link></div>
            <div><Link to="/capitalization" className="item-mobile">Capitalization</Link></div>
            <div><Link to="/about" className="item-mobile">About</Link></div>
            <div><button className="material-symbols-outlined notification-mobile" >notifications</button></div>
            <div><button className="material-symbols-outlined account-mobile">account_circle</button> </div>
            </div>
        ): (null)}
    </div>
    </>
  )
}

export default Menu