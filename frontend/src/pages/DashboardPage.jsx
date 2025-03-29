import { useAuthStore } from "../store/authStore";
import { useBudgetStore } from "../store/budgetStore";
import { useEffect } from "react";
import BudgetGrid from "../components/BudgetComponents/BudgetGrid";
import TotalBudget from "../components/TotalBudget";
import BarGraph from "../components/ui/BarGraph";
import SpendingPieChart from "../components/ui/SpendingPieChart";

const DashboardPage = () => {
      const { user } = useAuthStore();
      const { fetchBudgets, budgets } = useBudgetStore();

      useEffect(() => {
            fetchBudgets(user.user_id);
      }, []);

      return (
            <div className="w-full">
                  <TotalBudget budgets={budgets} />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                        <div className="bg-white rounded-2xl shadow-lg p-4 h-64">
                              <BarGraph />
                        </div>
                        <div className="bg-white rounded-2xl shadow-lg pt-0 pb-2 h-64">
                              <SpendingPieChart />
                        </div>
                  </div>
                  <BudgetGrid budgets={budgets} />
            </div>
      );
};

export default DashboardPage;
