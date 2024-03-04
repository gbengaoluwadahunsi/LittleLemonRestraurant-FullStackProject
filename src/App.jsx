import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";

import { lazy } from "react";
import Homepage from "./Homepage/Homepage";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import "./App.css";


// Dynamically import components using lazy
const About = lazy(() => import('./AboutUs/AboutLittleLemon'));
const Menu = lazy(() => import('./MenuPage/Menu'));
const BookingPage = lazy(() => import('./Booking/BookingPage'));
const OrderOnline = lazy(() => import('./OrderOnline/OrderOnline'));
const Login = lazy(() => import('./Login/Login'));

const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="About" element={<About />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="BookingPage" element={<BookingPage />} />
          <Route path="OrderOnline" element={<OrderOnline />} />
          <Route path="Login" element={<Login />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
