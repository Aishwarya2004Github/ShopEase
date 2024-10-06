import { Outlet } from "react-router-dom";
import Navigation from "./pages/Auth/Navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'; // Ensure you create this CSS file for styles

const App = () => {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <header>
        <nav className="navbar">
          <img src="../uploads/Logo.png" alt="ShopEase Logo" className="logo" />
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      <main className="py-3">
        <Outlet />
      </main>
     
    </>
  );
};

export default App;
