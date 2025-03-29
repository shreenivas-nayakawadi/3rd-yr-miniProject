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
      FaTimes,
      FaBars,
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
            <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                              {/* Logo */}
                              <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
                                    <Link to="/" onClick={closeMenu}>
                                          BudgetManager
                                    </Link>
                              </div>

                              {/* Desktop Navigation - Now properly included */}
                              <div className="hidden md:flex items-center space-x-6">
                                    {location.pathname === "/" && (
                                          <>
                                                <a
                                                      href="#about"
                                                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                                >
                                                      About
                                                </a>
                                                <a
                                                      href="#contact"
                                                      className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                                >
                                                      Contact
                                                </a>
                                          </>
                                    )}

                                    {!isAuthenticated ? (
                                          <>
                                                {location.pathname !==
                                                      "/login" &&
                                                      location.pathname !==
                                                            "/signup" && (
                                                            <>
                                                                  <Link
                                                                        to="/login"
                                                                        className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                                                        onClick={
                                                                              closeMenu
                                                                        }
                                                                  >
                                                                        Login
                                                                  </Link>
                                                                  <Link
                                                                        to="/signup"
                                                                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                                                        onClick={
                                                                              closeMenu
                                                                        }
                                                                  >
                                                                        Sign Up
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
                                                            className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                                            onClick={closeMenu}
                                                      >
                                                            Dashboard
                                                      </Link>
                                                )}
                                                {location.pathname !==
                                                      "/user" && (
                                                      <>
                                                            <Link
                                                                  to="/user"
                                                                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                                                  onClick={
                                                                        closeMenu
                                                                  }
                                                            >
                                                                  Profile
                                                            </Link>
                                                            <button
                                                                  onClick={
                                                                        handleLogout
                                                                  }
                                                                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                                                            >
                                                                  Logout
                                                            </button>
                                                      </>
                                                )}
                                          </>
                                    )}
                              </div>

                              {/* Mobile menu button */}
                              {!(
                                    location.pathname === "/login" ||
                                    location.pathname === "/signup"
                              ) && (
                                    <div className="md:hidden flex items-center">
                                          <button
                                                onClick={() =>
                                                      setIsMenuOpen(!isMenuOpen)
                                                }
                                                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none transition duration-150 ease-in-out"
                                                aria-label="Main menu"
                                          >
                                                {isMenuOpen ? (
                                                      <FaTimes className="h-6 w-6" />
                                                ) : (
                                                      <FaBars className="h-6 w-6" />
                                                )}
                                          </button>
                                    </div>
                              )}
                        </div>
                  </div>

                  {/* Mobile Navigation - Popup Style */}
                  {!(
                        location.pathname === "/login" ||
                        location.pathname === "/signup"
                  ) && (
                        <div
                              className={`fixed inset-0 z-50 transform ${
                                    isMenuOpen
                                          ? "translate-x-0"
                                          : "translate-x-full"
                              } transition-transform duration-300 ease-in-out md:hidden`}
                        >
                              <div
                                    className="absolute inset-0 bg-transparent backdrop-blur bg-opacity-50"
                                    onClick={closeMenu}
                              ></div>
                              <div className="absolute right-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-xl">
                                    <div className="flex flex-col h-full">
                                          {/* Header */}
                                          <div className="flex items-center justify-between p-4 border-b">
                                                <h3 className="text-lg font-medium text-gray-900">
                                                      Menu
                                                </h3>
                                                <button
                                                      onClick={closeMenu}
                                                      className="p-1 rounded-md text-gray-400 hover:text-gray-500"
                                                >
                                                      <FaTimes className="h-6 w-6" />
                                                </button>
                                          </div>

                                          {/* Menu Items */}
                                          <div className="flex-1 overflow-y-auto p-4 space-y-2">
                                                {location.pathname === "/" && (
                                                      <>
                                                            <a
                                                                  href="#about"
                                                                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-base font-medium"
                                                                  onClick={
                                                                        closeMenu
                                                                  }
                                                            >
                                                                  <div className="flex items-center">
                                                                        <FaInfoCircle className="mr-3 text-gray-500" />
                                                                        About
                                                                  </div>
                                                            </a>
                                                            <a
                                                                  href="#contact"
                                                                  className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-base font-medium"
                                                                  onClick={
                                                                        closeMenu
                                                                  }
                                                            >
                                                                  <div className="flex items-center">
                                                                        <FaEnvelope className="mr-3 text-gray-500" />
                                                                        Contact
                                                                  </div>
                                                            </a>
                                                      </>
                                                )}

                                                {!isAuthenticated ? (
                                                      <>
                                                            {location.pathname !==
                                                                  "/login" &&
                                                                  location.pathname !==
                                                                        "/signup" && (
                                                                        <>
                                                                              <Link
                                                                                    to="/login"
                                                                                    className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-base font-medium"
                                                                                    onClick={
                                                                                          closeMenu
                                                                                    }
                                                                              >
                                                                                    <div className="flex items-center">
                                                                                          <FaSignInAlt className="mr-3 text-gray-500" />
                                                                                          Login
                                                                                    </div>
                                                                              </Link>
                                                                              <Link
                                                                                    to="/signup"
                                                                                    className="block px-4 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200 text-base font-medium"
                                                                                    onClick={
                                                                                          closeMenu
                                                                                    }
                                                                              >
                                                                                    <div className="flex items-center justify-center">
                                                                                          <FaUser className="mr-3" />
                                                                                          Sign
                                                                                          Up
                                                                                    </div>
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
                                                                        className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-base font-medium"
                                                                        onClick={
                                                                              closeMenu
                                                                        }
                                                                  >
                                                                        <div className="flex items-center">
                                                                              <RiDashboardFill className="mr-3 text-gray-500" />
                                                                              Dashboard
                                                                        </div>
                                                                  </Link>
                                                            )}
                                                            {location.pathname !==
                                                                  "/user" && (
                                                                  <>
                                                                        <Link
                                                                              to="/user"
                                                                              className="block px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-base font-medium"
                                                                              onClick={
                                                                                    closeMenu
                                                                              }
                                                                        >
                                                                              <div className="flex items-center">
                                                                                    <FaUser className="mr-3 text-gray-500" />
                                                                                    Profile
                                                                              </div>
                                                                        </Link>
                                                                        <button
                                                                              onClick={
                                                                                    handleLogout
                                                                              }
                                                                              className="block w-full text-left px-4 py-3 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors duration-200 text-base font-medium"
                                                                        >
                                                                              <div className="flex items-center">
                                                                                    <FaSignOutAlt className="mr-3 text-gray-500" />
                                                                                    Logout
                                                                              </div>
                                                                        </button>
                                                                  </>
                                                            )}
                                                      </>
                                                )}
                                          </div>

                                          {/* Footer (optional) */}
                                          <div className="p-4 border-t text-sm text-gray-500">
                                                BudgetManager ©{" "}
                                                {new Date().getFullYear()}
                                          </div>
                                    </div>
                              </div>
                        </div>
                  )}
            </nav>
      );
};

export default Navbar;
