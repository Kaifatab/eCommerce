import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import toast, { Toaster } from "react-hot-toast";
import "react-toastify/dist/ReactToastify.css";

const Layout = ({ children }) => {
  return (
    <div>
     
      <main style={{ minHeight: "82vh" }}>
        <Toaster />
        {children}
      </main>
     
    </div>
  );
};

export default Layout;
