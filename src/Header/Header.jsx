import { IoClose, IoMenu } from "react-icons/io5";
import { NavLink, useNavigate } from "react-router-dom";
import Image from "../Images/725cbe0ca5da8536fc99c51e00d4d13628bd9745.png";
import { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import "../App.css";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const closeMenuOnMobile = () => {
    setShowMenu(false);
  };

  const openMenuOnMobile = () => {
    setShowMenu(true);
  };

  const handleNavClick = (event) => {
    // Check if the clicked element is a link
    if (!event.target.closest(".navlink")) {
      // If not a link, toggle off the nav
      setShowMenu(false);
    } else {
      const closestLink = event.target.closest(".navlink");
      const closestLinkHref = closestLink.getAttribute("href");
      navigate(closestLinkHref);
      setShowMenu(false);
    }
  };

  return (
    <div>
      <header>
        <div>
          <IoMenu
            className=" nav__toggle hamburger"
            onClick={openMenuOnMobile}
          />
        </div>
        <NavLink to="/" className="header-logo">
          <img src={Image} alt="Little Lemon restaurant Logo" />
        </NavLink>

        <nav
          className={showMenu ? "display-flex" : "display-none"}
          onClick={handleNavClick}
        >
          <div>
            <IoClose
              className="nav__close hamburger"
              onClick={closeMenuOnMobile}
            />
          </div>
          <ul>
            <NavLink
              to="/"
              style={({ isActive }) => {
                return isActive ? { color: "#10b978" } : {};
              }}
              className="navlink"
              onClick={closeMenuOnMobile}
            >
              <li>Home</li>
            </NavLink>

            <NavLink
              to="/about"
              style={({ isActive }) => {
                return isActive ? { color: "#10b978" } : {};
              }}
              className="navlink"
            >
              <li>About</li>
            </NavLink>

            <NavLink
              to="/menu"
              style={({ isActive }) => {
                return isActive ? { color: "#10b978" } : {};
              }}
              className="navlink"
            >
              <li>Menu</li>
            </NavLink>

            <NavLink
              to="/bookingPage"
              style={({ isActive }) => {
                return isActive ? { color: "#10b978" } : {};
              }}
              className="navlink"
            >
              <li>Reservations</li>
            </NavLink>

            <NavLink
              to="/orderonline"
              style={({ isActive }) => {
                return isActive ? { color: "#10b978" } : {};
              }}
              className="navlink"
            >
              <li>Order Online</li>
            </NavLink>

            <NavLink
              to="/Login"
              style={({ isActive }) => {
                return isActive ? { color: "#10b978" } : {};
              }}
              className="navlink"
            >
              <button className="login-button">Login </button>
            </NavLink>
          </ul>
        </nav>
        <FaCartShopping className="cart" />
      </header>
    </div>
  );
}

export default Header;
