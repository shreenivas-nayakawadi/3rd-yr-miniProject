// import About from "../components/About";
// import Contact from "../components/Contact";

// const teamMembers = [
//       {
//             name: "Shreenivas Nayakawadi",
//             roll: "1DS22IS143",
//             college: "Dayananda Sagar College of Engineering",
//             department: "Information Science and Engineering",
//       },
//       {
//             name: "Shreesha A",
//             roll: "1DS22IS144",
//             college: "Dayananda Sagar College of Engineering",
//             department: "Information Science and Engineering",
//       },
//       {
//             name: "Siddeshwar M",
//             roll: "1DS22IS155",
//             college: "Dayananda Sagar College of Engineering",
//             department: "Information Science and Engineering",
//       },
//       {
//             name: "Prashant S N",
//             roll: "1DS23IS415",
//             college: "Dayananda Sagar College of Engineering",
//             department: "Information Science and Engineering",
//       },
// ];

// const Home = () => {
//       return (
//             <div className="min-h-screen bg-white text-gray-800 flex flex-col items-center justify-center p-4">
//                   {/* <Navbar /> */}
//                   <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center mt-3">
//                         Personal Budget Management System
//                   </h1>
//                   <p className="text-lg mb-6 text-center">
//                         Track your income, manage expenses, and visualize your
//                         budget seamlessly.
//                   </p>
//                   <div className="w-full flex justify-center mt-8">
//                         <img
//                               src="/Banner.webp"
//                               alt="Budget Management Banner"
//                               className="w-3/4 h-64 object-fit rounded-2xl shadow-lg"
//                         />
//                   </div>
//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
//                         <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
//                               <h2 className="text-2xl font-semibold mb-4">
//                                     Visualize Budget
//                               </h2>
//                               <p>
//                                     Get clear insights on your income and
//                                     expenses through interactive charts.
//                               </p>
//                         </div>
//                         <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
//                               <h2 className="text-2xl font-semibold mb-4">
//                                     Manage Income & Expenses
//                               </h2>
//                               <p>
//                                     Easily add, edit, and delete your income and
//                                     expense records.
//                               </p>
//                         </div>
//                   </div>
//                   <About teamMembers={teamMembers} />
//                   <Contact />
//                   <footer className="w-full text-center py-4 mt-16 bg-gray-100 rounded-t-2xl">
//                         <p>
//                               &copy; 2025 Personal Budget Management System. All
//                               rights reserved.
//                         </p>
//                   </footer>
//             </div>
//       );
// };

// export default Home;

import About from "../components/About";
import Contact from "../components/Contact";

const teamMembers = [
  {
    name: "Shreenivas N",
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
    <div className="min-h-screen bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="text-center mb-20">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Personal Budget Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track your income and expenses with our intuitive platform
          </p>
          
          <div className="mt-12 flex justify-center">
            <img
              src="/Banner.webp"
              alt="Budget Management Banner"
              className="w-full max-w-4xl rounded-xl shadow-xl object-cover h-96"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-indigo-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 text-indigo-600">
                  <path fill="currentColor" d="M13.66 7C13.1 5.82 11.9 5 10.5 5H6V3h12v2h-3.26c.48.58.84 1.26 1.05 2H18v2h-2.02c-.25 2.8-2.61 5-5.48 5h-.73l6.73 7h-2.77L7 14v-2h3.5c1.76 0 3.22-1.3 3.46-3H6V7h7.66z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Track your expenses</h3>
              <p className="text-gray-600">
                Monitor all your transactions in Indian Rupees with detailed categorization
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="bg-green-50 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">Visual Analytics</h3>
              <p className="text-gray-600">
                Understand your spending patterns with beautiful charts and reports
              </p>
            </div>
          </div>
        </section>

        {/* About Section */}
        <About teamMembers={teamMembers} />

        {/* Contact Section */}
        <Contact />
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 py-6 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Personal Budget Management System. Made in India 🇮🇳
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;