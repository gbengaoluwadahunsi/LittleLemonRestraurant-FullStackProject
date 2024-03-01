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
          <section>
            <h5 className="">INFORMATION</h5>
            <div className="">
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link href="../blog">
                <li>Blog</li>
              </Link>
              <Link href="/About">
                <li>About us</li>{" "}
              </Link>
              <Link href="/products">
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

          <section id="others">
            <h5 className="">OTHERS</h5>
            <div className="">
              <Link href="../cart">
                <li>Checkout</li>
              </Link>
              <Link href="../cart">
                <li>Cart</li>
              </Link>
              <Link href="../products">
                <li>Menu</li>
              </Link>
              <Link href="#">
                <li>Locations</li>
              </Link>
              <Link href="/adminLogin">
                <button className="booking-button">Admin Login</button>
              </Link>
            </div>
          </section>

          <section>
            <h5 className="">SOCIAL MEDIA</h5>
            <div>
              <div className="socials">
                <Link
                  to="https://www.facebook.com/kaliceagbabiaka1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="" />
                </Link>
                <Link
                  to="https://www.pinterest.com/oluwadahunsioluwakemi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaPinterestP className="" />
                </Link>
                <Link to="https://twitter.com/km_oluwadahunsi">
                  <FaTwitter className="" />
                </Link>

                <Link
                  to="https://gbengaoluwadahunsi.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="" />
                </Link>
              </div>

              <button className="booking-button">Sign Up</button>
            </div>
          </section>
        </section>
      </footer>
    </>
  );
}

export default Footer;
