import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {FaInfoCircle} from "react-icons/fa";
import { RiMoneyRupeeCircleFill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { HiSupport } from "react-icons/hi";
import { GiArchiveRegister } from "react-icons/gi";
import { SiSimplelogin } from "react-icons/si";
import { LuLogOut } from "react-icons/lu";
import { FaChartLine } from "react-icons/fa";
import { FaPhoneVolume } from "react-icons/fa6";




function Navbar() {
  const [token,settoken]=useState(localStorage.getItem("token"));
  const nav = useNavigate();
  const location = useLocation();

  useEffect(()=>{
   const syncAuth=()=>{
    settoken(localStorage.getItem("token"))
   };

   window.addEventListener("authChange",syncAuth);
   return ()=>{
    window.removeEventListener("authChange",syncAuth);
   };
  },[])

  const handlelogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("authChange"));
    nav("/");
  };
  return (
    //<div className="container p-2">
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container P-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media\image\images\logo.svg"
            style={{ width: "60%" }}
            alt="Logo"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active d-flex align-items-center gap-2" to="/about">
               <FaInfoCircle/>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active d-flex align-items-center gap-2" to="/product">
                <AiFillProduct/>
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active d-flex align-items-center gap-2" to="/pricing">
                <RiMoneyRupeeCircleFill/>
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active d-flex align-items-center gap-2" to="/support">
                <HiSupport/>
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active d-flex align-items-center gap-2" to="/contact">
                <FaPhoneVolume/>
                  ContactUs
                </Link>
              </li>

              {!token ? (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active d-flex align-items-center gap-2"
                      aria-current="page"
                      to="/Signup"
                    >
                      <GiArchiveRegister/>
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active d-flex align-items-center gap-2" to="/signin">
                    <SiSimplelogin/>
                      Signin
                    </Link>
                  </li>
                </>
              ) : (
                <>
                <li className="nav-item">
                  <a className="nav-link d-flex align-items-center gap-2" href="http://localhost:5173">
                  <FaChartLine/>
                  Dashboard
                  </a>
                </li>
                  <li className="nav-item">
                    <button
                      className="nav-link active d-flex align-items-center gap-2"
                      aria-current="page"
                      onClick={handlelogout}
                    >
                      <LuLogOut/>
                      Logout
                    </button>
                  </li>
                </>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
    //</div>
  );
}

export default Navbar;
