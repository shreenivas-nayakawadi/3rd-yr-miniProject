import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
      const [isMenuOpen, setIsMenuOpen] = useState(false);
      const teamMembers = [
            {
                  name: "Shreenivas Nayakawadi",
                  roll: "1DS22IS143",
                  college: "Dayananda Sagar College of Engineering",
                  department: "Information Science and Engineering",
            },
            {
                  name: "Shreesha A",
                  roll: "1DS22IS144",
                  college: "Dayananda Sagar College of Engineering",
                  department: "Information Science and Engineering",
            },
            {
                  name: "Siddeshwar M",
                  roll: "1DS22IS155",
                  college: "Dayananda Sagar College of Engineering",
                  department: "Information Science and Engineering",
            },
            {
                  name: "Prashant S N",
                  roll: "1DS23IS415",
                  college: "Dayananda Sagar College of Engineering",
                  department: "Information Science and Engineering",
            },
      ];

      return (
            <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-4">
                  <nav className="w-full flex justify-between items-center py-4 px-8 bg-gray-100 shadow-md rounded-b-2xl">
                        <div className="text-2xl font-bold">BudgetManager</div>
                        <div className="hidden md:flex space-x-8">
                              <a
                                    href="#about"
                                    className="text-lg px-4 py-2 rounded-lg hover:text-blue-500"
                              >
                                    About
                              </a>
                              <a
                                    href="#contact"
                                    className="text-lg px-4 py-2 rounded-lg hover:text-blue-500"
                              >
                                    Contact
                              </a>
                              <Link
                                    to="/login"
                                    className="text-lg px-4 py-2 rounded-lg hover:text-blue-600"
                              >
                                    Login
                              </Link>
                              <Link
                                    to="/signup"
                                    className="text-lg bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                              >
                                    Sign Up
                              </Link>
                        </div>

                        <button
                              className="md:hidden text-2xl"
                              onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                              ☰
                        </button>
                  </nav>

                  {isMenuOpen && (
                        <div className="md:hidden flex flex-col items-center space-y-4 bg-gray-100 py-4 w-full">
                              <a
                                    href="#about"
                                    className="text-lg hover:text-blue-500"
                              >
                                    About
                              </a>
                              <a
                                    href="#contact"
                                    className="text-lg hover:text-blue-500"
                              >
                                    Contact
                              </a>
                              <a
                                    href="#login"
                                    className="text-lg hover:text-blue-500"
                              >
                                    Login
                              </a>
                              <a
                                    href="#signup"
                                    className="text-lg bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                              >
                                    Sign Up
                              </a>
                        </div>
                  )}
                  <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                  >
                        <h1 className="text-5xl font-bold mb-4">
                              Personal Budget Management System
                        </h1>
                        <p className="text-lg mb-6">
                              Track your income, manage expenses, and visualize
                              your budget seamlessly.
                        </p>
                  </motion.div>

                  <div className="w-full flex justify-center mt-8">
                        <img
                              src="/Banner.webp"
                              alt="Budget Management Banner"
                              className="w-3/4 h-64 object-cover rounded-2xl shadow-lg"
                        />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                        <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
                              <h2 className="text-2xl font-semibold mb-4">
                                    Visualize Budget
                              </h2>
                              <p>
                                    Get clear insights on your income and
                                    expenses through interactive charts.
                              </p>
                        </div>
                        <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
                              <h2 className="text-2xl font-semibold mb-4">
                                    Manage Income & Expenses
                              </h2>
                              <p>
                                    Easily add, edit, and delete your income and
                                    expense records.
                              </p>
                        </div>
                  </div>

                  <div className="mt-20 text-center">
                        <h3 className="text-3xl font-bold">
                              Your Financial Billboard
                        </h3>
                        <p className="text-lg mt-2">
                              Stay informed and in control with real-time budget
                              updates.
                        </p>
                  </div>

                  <div
                        id="about"
                        className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center"
                  >
                        <h2 className="text-3xl font-bold mb-4 col-span-full">
                              About Us
                        </h2>
                        {teamMembers.map((member) => (
                              <div
                                    key={member.roll}
                                    className="bg-gray-100 p-8 rounded-2xl shadow-md"
                              >
                                    <h3 className="text-2xl font-semibold mb-2">
                                          {member.name}
                                    </h3>
                                    <p>Roll No: {member.roll}</p>
                                    <p>{member.college}</p>
                                    <p>{member.department}</p>
                              </div>
                        ))}
                  </div>

                  <div id="contact" className="mt-20 text-center">
                        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                        <p className="text-lg">
                              Have any questions or feedback? Reach out to us at{" "}
                              <a
                                    href="mailto:shreenivas@gmail.com"
                                    className="text-blue-500 hover:underline"
                              >
                                    shreenivas@gmail.com
                              </a>
                              .
                        </p>
                  </div>

                  <footer className="w-full text-center py-4 mt-16 bg-gray-100 rounded-t-2xl">
                        <p>
                              &copy; 2025 Personal Budget Management System. All
                              rights reserved.
                        </p>
                  </footer>
            </div>
      );
};

export default Home;
