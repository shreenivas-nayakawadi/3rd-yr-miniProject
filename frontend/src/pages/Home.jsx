import About from "../components/About";
import Contact from "../components/Contact";

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

const Home = () => {
      return (
            <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-4">
                  {/* <Navbar /> */}
                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center mt-3">
                        Personal Budget Management System
                  </h1>
                  <p className="text-lg mb-6 text-center">
                        Track your income, manage expenses, and visualize your
                        budget seamlessly.
                  </p>
                  <div className="w-full flex justify-center mt-8">
                        <img
                              src="/Banner.webp"
                              alt="Budget Management Banner"
                              className="w-3/4 h-64 object-fit rounded-2xl shadow-lg"
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
                  <About teamMembers={teamMembers} />
                  <Contact />
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
