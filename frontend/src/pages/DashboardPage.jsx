import { useAuthStore } from "../store/authStore";
import {motion  } from "framer-motion"

const DashboardPage = () => {
      const { logout } = useAuthStore();

      const handleLogout = () => {
            logout();
      };

      return (
            <div>
              <h1>Dashboard</h1>
              <motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={handleLogout}
					className='w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
				font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
				 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900'
				>
					Logout
				</motion.button>
            </div>
      );
};

export default DashboardPage;
