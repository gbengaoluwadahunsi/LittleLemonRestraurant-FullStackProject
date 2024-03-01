import { Routes, Route } from "react-router-dom";
import Home from "./Homepage";
import About from "./AboutLittleLemon";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import BookingPage from "./BookingPage";
import Footer from "./Footer";
import Header from "./Header";
import "./App.css";

const App = () => {
  return (
    <>
      <Header />
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
