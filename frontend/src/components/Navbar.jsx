// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { useAuthStore } from "../store/authStore";
// import { useLocation } from "react-router-dom";

// const Navbar = () => {
//       const [isMenuOpen, setIsMenuOpen] = useState(false);
//       const { isAuthenticated, logout } = useAuthStore();
//       const location = useLocation();

//       const handleLogout = () => {
//             logout();
//       };

//       return (
//             <nav className="w-full flex justify-between items-center py-4 px-8 bg-gray-100 shadow-md rounded-b-2xl">
//                   <div className="text-2xl font-bold">
//                         <Link to="/">BudgetManager</Link>
//                   </div>
//                   <div className="hidden md:flex space-x-8">
//                         {location.pathname === "/" && (
//                               <>
//                                     <a
//                                           href="#about"
//                                           className="text-lg px-4 py-2 rounded-lg hover:text-blue-500"
//                                     >
//                                           About
//                                     </a>
//                                     <a
//                                           href="#contact"
//                                           className="text-lg px-4 py-2 rounded-lg hover:text-blue-500"
//                                     >
//                                           Contact
//                                     </a>
//                               </>
//                         )}

//                         {!isAuthenticated ? (
//                               <>
//                                     <Link
//                                           to="/login"
//                                           className="text-lg px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
//                                     >
//                                           Login
//                                     </Link>
//                                     <Link
//                                           to="/signup"
//                                           className="text-lg bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                                     >
//                                           Sign Up
//                                     </Link>
//                               </>
//                         ) : (
//                               <>
//                                     {location.pathname !== "/dashboard" && (
//                                           <>
//                                                 <Link
//                                                       to="/dashboard"
//                                                       className="text-lg bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                                                 >
//                                                       Dashboard
//                                                 </Link>
//                                           </>
//                                     )}

//                                     {isAuthenticated &&
//                                           location.pathname !== "/user" && (
//                                                 <>
//                                                       <button
//                                                             onClick={
//                                                                   handleLogout
//                                                             }
//                                                             className="text-lg px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800"
//                                                       >
//                                                             Logout
//                                                       </button>
//                                                       <Link
//                                                             to="/user"
//                                                             className="text-lg rounded-lg bg-black text-white hover:bg-gray-800 px-4 py-2"
//                                                       >
//                                                             User
//                                                       </Link>
//                                                 </>
//                                           )}
//                               </>
//                         )}
//                           {isMenuOpen && (
//                         <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-100 py-4 w-full">
//                               <a
//                                     href="#about"
//                                     className="text-lg hover:text-blue-500"
//                               >
//                                     About
//                               </a>
//                               <a
//                                     href="#contact"
//                                     className="text-lg hover:text-blue-500"
//                               >
//                                     Contact
//                               </a>
//                               <a
//                                     href="#login"
//                                     className="text-lg hover:text-blue-500"
//                               >
//                                     Login
//                               </a>
//                               <a
//                                     href="#signup"
//                                     className="text-lg bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
//                               >
//                                     Sign Up
//                               </a>
//                         </div>
//                   )}
//                   </div>
//                   <button
//                         className="md:hidden text-2xl"
//                         onClick={() => setIsMenuOpen(!isMenuOpen)}
//                   >
//                         ☰
//                   </button>
//             </nav>
//       );
// };

// export default Navbar;
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import { useLocation } from "react-router-dom";
import {
      FaUser,
      FaSignInAlt,
      FaSignOutAlt,
      FaInfoCircle,
      FaEnvelope,
} from "react-icons/fa";
import { RiDashboardFill } from "react-icons/ri";

const Navbar = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const { isAuthenticated, logout } = useAuthStore();
      const location = useLocation();

      const handleLogout = () => {
            logout();
            setIsMenuOpen(false);
      };

      const closeMenu = () => setIsMenuOpen(false);

      return (
            <nav className="w-full flex justify-between items-center   py-4 px-8 bg-gray-100 shadow-md rounded-b-2xl">
                  <div className="text-2xl font-bold">
                        <Link to="/" onClick={closeMenu}>
                              BudgetManager
                        </Link>
                  </div>
                  <div className="hidden md:flex space-x-8">
                        {location.pathname === "/" && (
                              <>
                                    <a
                                          href="#about"
                                          className="text-lg px-4 py-2 relative hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:font-bold"
                                    >
                                          About
                                    </a>
                                    <a
                                          href="#contact"
                                          className="text-lg px-4 py-2 relative hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:font-bold"
                                    >
                                          Contact
                                    </a>
                              </>
                        )}

                        {!isAuthenticated ? (
                              <>
                                    {location.pathname !== "/login" &&
                                          location.pathname !== "/signup" && (
                                                <>
                                                      <Link
                                                            to="/login"
                                                            className="text-lg px-4 py-2 relative hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:font-bold"
                                                            onClick={closeMenu}
                                                      >
                                                            Login
                                                      </Link>
                                                      <Link
                                                            to="/signup"
                                                            className="text-lg px-4 py-2 relative hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:font-bold"
                                                            onClick={closeMenu}
                                                      >
                                                            Sign Up
                                                      </Link>
                                                </>
                                          )}
                              </>
                        ) : (
                              <>
                                    {location.pathname !== "/dashboard" && (
                                          <Link
                                                to="/dashboard"
                                                className="text-lg px-4 py-2 relative hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:font-bold"
                                                onClick={closeMenu}
                                          >
                                                Dashboard
                                          </Link>
                                    )}
                                    {location.pathname !== "/user" && (
                                          <>
                                                <button
                                                      onClick={handleLogout}
                                                      className="text-lg px-4 py-2 relative hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:font-bold"
                                                >
                                                      Logout
                                                </button>
                                                <Link
                                                      to="/user"
                                                      className="text-lg px-4 py-2 relative hover:text-gray-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-gray-900 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 hover:font-bold"
                                                      onClick={closeMenu}
                                                >
                                                      User
                                                </Link>
                                          </>
                                    )}
                              </>
                        )}
                  </div>

                  <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                  >
                        {isMenuOpen ? "✕" : "☰"}
                  </button>

                  {/* {isMenuOpen && (
                        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-200 flex flex-col items-center space-y-4 py-4">
                              {location.pathname === "/" && (
                                    <>
                                          <a href="#about" className="text-lg hover:text-blue-500" onClick={closeMenu}>
                                                About
                                          </a>
                                          <a href="#contact" className="text-lg hover:text-blue-500" onClick={closeMenu}>
                                                Contact
                                          </a>
                                    </>
                              )}
                              {!isAuthenticated ? (
                                    <>
                                          <Link to="/login" className="text-lg hover:text-blue-500" onClick={closeMenu}>
                                                Login
                                          </Link>
                                          <Link to="/signup" className="text-lg bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={closeMenu}>
                                                Sign Up
                                          </Link>
                                    </>
                              ) : (
                                    <>
                                          {location.pathname !== "/dashboard" && (
                                                <Link to="/dashboard" className="text-lg bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600" onClick={closeMenu}>
                                                      Dashboard
                                                </Link>
                                          )}
                                          {location.pathname !== "/user" && (
                                                <>
                                                      <button onClick={handleLogout} className="text-lg bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                                                            Logout
                                                      </button>
                                                      <Link to="/user" className="text-lg bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800" onClick={closeMenu}>
                                                            User
                                                      </Link>
                                                </>
                                          )}
                                    </>
                              )}
                        </div>
                  )} */}

                  {isMenuOpen && (
                        <div className="md:hidden absolute top-16 left-0 w-full bg-gray-200 flex items-center justify-around gap-4 py-4">
                              {location.pathname === "/" && (
                                    <>
                                          <a
                                                href="#about"
                                                className="text-lg hover:text-blue-500"
                                                onClick={closeMenu}
                                          >
                                                <FaInfoCircle />
                                          </a>
                                          <a
                                                href="#contact"
                                                className="text-lg hover:text-blue-500"
                                                onClick={closeMenu}
                                          >
                                                <FaEnvelope />
                                          </a>
                                    </>
                              )}
                              {!isAuthenticated ? (
                                    <>
                                          {location.pathname !== "/signup" &&
                                                location.pathname !==
                                                      "/login" && (
                                                      <>
                                                            <Link
                                                                  to="/login"
                                                                  className="text-lg hover:text-blue-500"
                                                                  onClick={
                                                                        closeMenu
                                                                  }
                                                            >
                                                                  <FaSignInAlt />
                                                            </Link>
                                                            <Link
                                                                  to="/signup"
                                                                  className="text-lg hover:text-blue-500"
                                                                  onClick={
                                                                        closeMenu
                                                                  }
                                                            >
                                                                  <FaUser />
                                                            </Link>
                                                      </>
                                                )}
                                    </>
                              ) : (
                                    <>
                                          {location.pathname !==
                                                "/dashboard" && (
                                                <Link
                                                      to="/dashboard"
                                                      className="text-lg hover:text-blue-500"
                                                      onClick={closeMenu}
                                                >
                                                      <RiDashboardFill />
                                                </Link>
                                          )}
                                          {location.pathname !== "/user" && (
                                                <>
                                                      <button
                                                            onClick={
                                                                  handleLogout
                                                            }
                                                            className="text-lg hover:text-blue-500"
                                                      >
                                                            <FaSignOutAlt />
                                                      </button>
                                                      <Link
                                                            to="/user"
                                                            className="text-lg hover:text-blue-500"
                                                            onClick={closeMenu}
                                                      >
                                                            <FaUser />
                                                      </Link>
                                                </>
                                          )}
                                    </>
                              )}
                        </div>
                  )}
            </nav>
      );
};

export default Navbar;
