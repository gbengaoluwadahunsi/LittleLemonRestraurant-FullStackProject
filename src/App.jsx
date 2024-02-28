// import React from 'react'
// import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import { IoClose, IoMenu } from "react-icons/io5";
import Home from "./Homepage";
import About from "./AboutLittleLemon";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import BookingPage from "./BookingPage";
import Footer from "./Footer";
import "./App.css";

import Image from "./Images/725cbe0ca5da8536fc99c51e00d4d13628bd9745.png";

const App = () => {
  return (
    <>
      <header>
        <Link to="/">
          <img src={Image} alt="Little Lemon restaurant Logo" />
        </Link>

        <nav>
           <div>
            <IoClose className="nav__close hamburger" />
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/bookingPage">Reservations</Link>
            </li>
            <li>
              <Link to="/orderonline">Order Online</Link>
            </li>

           <li>
           <Link to="/Login">
              <button className="login-button">Login </button>
            </Link>
           </li>
          </ul>

         
        </nav>

        <div>
          <IoMenu className=" nav__toggle hamburger" />
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="BookingPage" element={<BookingPage />} />
        <Route path="OrderOnline" element={<OrderOnline />} />
        <Route path="Login" element={<Login />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
