import { useAuthStore } from "../store/authStore";
import { useBudgetStore } from "../store/budgetStore";
import { useEffect } from "react";
import BudgetGrid from "../components/BudgetGrid";

const DashboardPage = () => {
      const { user } = useAuthStore();
      const { fetchBudgets, budgets } = useBudgetStore();

      useEffect(() => {
            fetchBudgets(user.user_id);
      }, []);

      return (
            <div className="w-full">
                  <BudgetGrid budgets={budgets} />
            </div>
      );
};

export default DashboardPage;
