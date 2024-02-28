// import React from "react";
import Image from "./Images/725cbe0ca5da8536fc99c51e00d4d13628bd9745.png";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <Link to="/" className="logo">
          <img src={Image} alt="" />
        </Link>
        <section>
          <h5 className="">INFORMATION</h5>
          <div className="">
            <Link to="/" passHref>
              <li>Home</li>
            </Link>
            <Link href="../blog" passHref>
              <li>Blog</li>
            </Link>
            {/* <li>About us</li> */}
            <Link href="../products" passHref>
              <li>Menu</li>
            </Link>
            <Link href="../contact">
              <li>Contact Us</li>
            </Link>
          </div>
        </section>

        <section>
          <h5 className="">TOP ITEMS</h5>
          <div className="">
            <Link>
              <li>Pepperoni</li>
            </Link>
            <Link>
              <li>Swiss Mushroom</li>
            </Link>
            <Link>
              {" "}
              <li>Berbeque Chicken</li>
            </Link>
            <Link>
              {" "}
              <li>Vegetarian</li>
            </Link>
            <Link>
              {" "}
              <li>Ham & Cheese</li>
            </Link>
          </div>
        </section>

        <section className="">
          <h5 className="">OTHERS</h5>
          <div className="">
            <Link href="../cart" passHref>
              <li>Checkout</li>
            </Link>
            <Link href="../cart" passHref>
              <li>Cart</li>
            </Link>
            <Link href="../products" passHref>
              <li>Menu</li>
            </Link>
            <Link href="#" passHref>
              <li>Locations</li>
            </Link>
            <Link href="/adminLogin" passHref>
              <button className="booking-button">Admin Login</button>
            </Link>
          </div>
        </section>

        <section>
          <h5 className="">SOCIAL MEDIA</h5>
          <div >
            <div className="socials">
              <a href="https://www.facebook.com/kaliceagbabiaka1">
                <FaFacebookF className="" />
              </a>
              <a href="https://www.pinterest.com/oluwadahunsioluwakemi">
                <FaPinterestP className="" />
              </a>
              <a href="https://twitter.com/km_oluwadahunsi">
                <FaTwitter className="" />
              </a>
              <a href="https://gbengaoluwadahunsi.vercel.app">
                <FaInstagram className="" />
              </a>
            </div>

            <button className="booking-button">Sign Up</button>
          </div>
        </section>
      </footer>
    </>
  );
}

export default Footer;
