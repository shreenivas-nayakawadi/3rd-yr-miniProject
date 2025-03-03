import { useAuthStore } from "../store/authStore";
import { motion } from "framer-motion";
import { useBudgetStore } from "../store/budgetStore";
import { useEffect } from "react";
import BudgetGrid from "../components/BudgetGrid";

const DashboardPage = () => {
      const { logout, user } = useAuthStore();
      const { fetchBudgets, budgets } = useBudgetStore();

      useEffect(() => {
            fetchBudgets(user.user_id);

            console.log(budgets);
      }, []);

      const handleLogout = () => {
            logout();
      };

      return (
            <div>
                  <BudgetGrid budgets={budgets}/>

                  <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLogout}
                        className="w-full py-3 px-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white 
				font-bold rounded-lg shadow-lg hover:from-green-600 hover:to-emerald-700
				 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                        Logout
                  </motion.button>
            </div>
      );
};

export default DashboardPage;
