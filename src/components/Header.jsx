// import Cookies from "js-cookie";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import { BiLogOutCircle } from "react-icons/bi";
// import { FaRegUserCircle } from "react-icons/fa";
// import { useDispatch } from "react-redux";

// export default function Header() {
//   const [userData, setUserData] = useState([]);
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     const { LogOut, logoutAll } = require("@/services/auth/authSlice");
//     Cookies.set("userData", []);
//     router.push("/signin", { scroll: true });
//     dispatch(LogOut());
//     dispatch(logoutAll());
//   };

//   useEffect(() => {
//     const userDataFromCookie = Cookies?.get("userData");
//     if (userDataFromCookie) {
//       const userObject = JSON?.parse(userDataFromCookie);
//       setUserData(userObject);
//     }
//   }, []);

//   return (
//     <header>
//       <div className="container">
//         <nav className="navbar navbar-expand-lg">
//           <a className="navbar-brand" href="/">
//             <img src="/images/logo.png" alt="Logo" />
//           </a>
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-toggle="collapse"
//             data-target="#navbarSupportedContent"
//             aria-controls="navbarSupportedContent"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon">
//               <span className="toggle-wrap">
//                 <span className="toggle-bar"></span>
//               </span>
//             </span>
//           </button>

//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav ml-auto">
//               {userData.length === 0 ? (
//                 <>
//                   <li className="nav-item">
//                     <div className="btn_block">
//                       <Link className="nav-link dark_btn" href="/signup">
//                         Get Started
//                       </Link>
//                       <div className="btn_bottom"></div>
//                     </div>
//                   </li>
//                   <li className="nav-item">
//                     <div className="btn_block">
//                       <Link className="nav-link light_btn" href="/signin">
//                         Sign in
//                       </Link>
//                       <div className="light_btn_bottom"></div>
//                     </div>
//                   </li>
//                 </>
//               ) : (
//                 <>
//                   <p className="m-0">
//                     <FaRegUserCircle size={18} className="me-1" />{" "}
//                     {userData.email}
//                   </p>
//                   <li className="nav-item">
//                     <div className="btn_block">
//                       <Link className="nav-link dark_btn" href="/account">
//                         My Account
//                       </Link>
//                       <div className="btn_bottom"></div>
//                     </div>
//                   </li>
//                   <BiLogOutCircle
//                     className="logout_button"
//                     onClick={() => handleLogout()}
//                   />
//                 </>
//               )}
//             </ul>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// }



import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import { FaRegUserCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";

export default function Header() {
  const [userData, setUserData] = useState([]);
  const [isCollapsed, setIsCollapsed] = useState(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    const { LogOut, logoutAll } = require("@/services/auth/authSlice");
    Cookies.set("userData", []);
    router.push("/signin", { scroll: true });
    dispatch(LogOut());
    dispatch(logoutAll());
  };

  useEffect(() => {
    const userDataFromCookie = Cookies?.get("userData");
    if (userDataFromCookie) {
      const userObject = JSON?.parse(userDataFromCookie);
      setUserData(userObject);
    }
  }, []);

  const toggleNavbar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleNavbar}
            aria-controls="navbarSupportedContent"
            aria-expanded={!isCollapsed}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon">
              <span className="toggle-wrap">
                <span className="toggle-bar"></span>
              </span>
            </span>
          </button>

          <div className={`collapse navbar-collapse ${isCollapsed ? 'collapse' : 'show'}`} id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {userData.length === 0 ? (
                <>
                  <li className="nav-item">
                    <div className="btn_block">
                      <Link className="nav-link dark_btn" href="/signup">
                        Get Started
                      </Link>
                      <div className="btn_bottom"></div>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="btn_block">
                      <Link className="nav-link light_btn" href="/signin">
                        Sign in
                      </Link>
                      <div className="light_btn_bottom"></div>
                    </div>
                  </li>
                </>
              ) : (
                <>
                  <p className="m-0">
                    <FaRegUserCircle size={18} className="me-1" />{" "}
                    {userData.email}
                  </p>
                  <li className="nav-item">
                    <div className="btn_block">
                      <Link className="nav-link dark_btn" href="/account">
                        My Account
                      </Link>
                      <div className="btn_bottom"></div>
                    </div>
                  </li>
                  <BiLogOutCircle
                    className="logout_button"
                    onClick={() => handleLogout()}
                  />
                </>
              )}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
