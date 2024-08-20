"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "../assets/css/font-awesome.css";
import "../assets/css/responsive.css";
import "../assets/css/style.css";
import 'react-tooltip/dist/react-tooltip.css'
// import '../assets/css/aos.css';
// import '../assets/css/aos.js';
import Preloader from "@/components/Preloader";
import { store } from "@/store/store";
import Aos from "aos";
import "aos/dist/aos.css";
import "moment-timezone/data/packed/latest.json";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function RootLayout({ children }) {
  const [Loading, setLoading] = useState(true);




  let pathname = usePathname();
  useEffect(function () {
    Aos.init({ duration: 1000 });
    setLoading(false);
  }, []);
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        {Loading && (
          <div id="preloader">
            <div id="loader"></div>
          </div>
        )}
        <ToastContainer style={{ zIndex: 999999 }} />
        <Provider store={store}>
          <Preloader />
          {pathname !== "/signin" && pathname !== "/signup"  && pathname !== "/forget_password" && <Header />}
          {children}
          {pathname !== "/signin" && pathname !== "/signup" && pathname !== "/forget_password" && <Footer />}
        </Provider>
      </body>
    </html>
  );
}
