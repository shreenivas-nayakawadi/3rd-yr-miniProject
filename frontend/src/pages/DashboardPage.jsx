import { useAuthStore } from "../store/authStore";
import { useBudgetStore } from "../store/budgetStore";
import { useEffect } from "react";
import BudgetGrid from "../components/BudgetComponents/BudgetGrid";
import TotalBudget from "../components/TotalBudget";
import BarGraph from "../components/ui/BarGraph";
import SpendingPieChart from "../components/ui/SpendingPieChart";
import RecentTransactions from "../components/ui/RecentTransactions";
import { useTransactionStore } from "../store/transactionStore";

const DashboardPage = () => {
      const { user } = useAuthStore();
      const { fetchBudgets, budgets } = useBudgetStore();
      const { userTransactions } = useTransactionStore();

      useEffect(() => {
            fetchBudgets(user.user_id);
      }, []);

      return (
            <div className="w-full space-y-6 p-4">
            {/* Top Section - Total Budget (No background) */}
            <TotalBudget budgets={budgets} />
          
            {/* Middle Section - Graph and Chart (Side by Side) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 h-80 flex flex-col">
                <div className="flex-1">
                  <BarGraph />
                </div>
              </div>
              <div className="bg-white rounded-2xl shadow-lg p-6 h-80 flex flex-col">
                <div className="flex-1">
                  <SpendingPieChart />
                </div>
              </div>
            </div>
          
            {/* Recent Transactions (Full Width) */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="h-96 overflow-y-auto">
                <RecentTransactions transactions={userTransactions} />
              </div>
            </div>
          
            {/* Budget Grid (Full Width) */}
            
          </div>
      );
};

export default DashboardPage;
