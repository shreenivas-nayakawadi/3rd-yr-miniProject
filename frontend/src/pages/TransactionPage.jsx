import React, { useEffect } from "react";
import TransactionTable from "../components/TransactionComponents/TransactionTable";
import TransactionSummary from "../components/TransactionComponents/TransactionSummary";
import { useTransactionStore } from "../store/transactionStore";
import { useParams } from "react-router-dom";

const TransactionPage = () => {
      const { budgetId } = useParams();

      const { budgetTransactions, fetchBudgetTransactions } =
            useTransactionStore();
      useEffect(() => {
            fetchBudgetTransactions(budgetId);
      }, [budgetId, fetchBudgetTransactions]);

      return (
            <div className="p-6 w-full mx-auto">
                  <TransactionSummary transactions={budgetTransactions} />
                  <TransactionTable
                        transactions={budgetTransactions}
                        budgetId={budgetId}
                  />
            </div>
      );
};

export default TransactionPage;
