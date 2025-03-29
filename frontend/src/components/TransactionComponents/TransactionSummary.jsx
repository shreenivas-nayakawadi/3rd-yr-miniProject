import React, { useState } from "react";
import { useBudgetStore } from "../../store/budgetStore";

const TransactionSummary = ({
      transactions,
      budgetId,
      onAddIncome,
      onAddExpense,
      onEditBudget,
}) => {
      const { budgets } = useBudgetStore();
      const budget = budgets.find((budget) => budget._id === budgetId);
      const [isEditing, setIsEditing] = useState(false);
      const [newBudgetAmount, setNewBudgetAmount] = useState(
            budget?.total_amount || 0
      );

      // Calculate totals
      const totals = transactions.reduce(
            (acc, transaction) => {
                  if (transaction.transaction_type === "Income") {
                        acc.income += transaction.amount;
                  } else {
                        acc.expense += transaction.amount;
                  }
                  return acc;
            },
            { income: 0, expense: 0 }
      );

      const balance = (budget?.total_amount || 0) - totals.expense;

      return (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {/* Income Card */}
                  <div className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-100">
                        <div className="flex justify-between items-center">
                              <div>
                                    <p className="text-sm font-medium text-green-500">
                                          Total Income
                                    </p>
                                    <p className="text-2xl font-bold text-green-700">
                                          ₹
                                          {totals.income.toLocaleString(
                                                "en-IN"
                                          )}
                                    </p>
                              </div>
                              <div className="flex items-center gap-2">
                                    <button
                                          onClick={onAddIncome}
                                          className="bg-green-100  hover:bg-green-600 hover:text-white text-green-600 px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors"
                                    >
                                          <span className="text-lg">+</span>
                                          Add
                                    </button>
                                    <div className="bg-green-100 p-3 rounded-full text-green-600 text-lg">
                                          ₹
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Expense Card */}
                  <div className="bg-red-50 p-4 rounded-lg shadow-sm border border-red-100">
                        <div className="flex justify-between items-center">
                              <div>
                                    <p className="text-sm font-medium text-red-500">
                                          Total Expense
                                    </p>
                                    <p className="text-2xl font-bold text-red-700">
                                          ₹
                                          {totals.expense.toLocaleString(
                                                "en-IN"
                                          )}
                                    </p>
                              </div>
                              <div className="flex items-center gap-2">
                                    <button
                                          onClick={onAddExpense}
                                          className="bg-red-100 hover:bg-red-600 hover:text-white text-red-600 px-3 py-1 rounded-md text-sm flex items-center gap-1 transition-colors"
                                    >
                                          <span className="text-lg">+</span>
                                          Add
                                    </button>
                                    <div className="bg-red-100 p-3 rounded-full text-red-600 text-lg">
                                          ₹
                                    </div>
                              </div>
                        </div>
                  </div>

                  {/* Balance Card */}
                  <div
                        className={`p-4 rounded-lg shadow-sm border ${
                              balance >= 0
                                    ? "bg-blue-50 border-blue-100"
                                    : "bg-orange-50 border-orange-100"
                        }`}
                  >
                        <div className="flex justify-between items-center">
                              <div>
                                    <p className="text-sm font-medium">
                                          Budget Balance{" "}
                                          <span className="text-sm text-gray-400">
                                                (Budget - spent)
                                          </span>
                                    </p>
                                    {isEditing ? (
                                          <div className="flex items-center gap-2 mt-1">
                                                <span className="text-gray-500">
                                                      ₹
                                                </span>
                                                <input
                                                      type="number"
                                                      value={newBudgetAmount}
                                                      onChange={(e) =>
                                                            setNewBudgetAmount(
                                                                  e.target.value
                                                            )
                                                      }
                                                      className="w-32 p-1 border rounded"
                                                />
                                                <button
                                                      onClick={() => {
                                                            onEditBudget(
                                                                  newBudgetAmount
                                                            );
                                                            setIsEditing(false);
                                                      }}
                                                      className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
                                                >
                                                      Save
                                                </button>
                                                <button
                                                      onClick={() => {
                                                            setIsEditing(false);
                                                            setNewBudgetAmount(
                                                                  budget?.total_amount ||
                                                                        0
                                                            );
                                                      }}
                                                      className="text-gray-500 px-2 py-1 rounded text-sm"
                                                >
                                                      Cancel
                                                </button>
                                          </div>
                                    ) : (
                                          <div className="flex items-center gap-2">
                                                <p
                                                      className={`text-2xl font-bold ${
                                                            balance >= 0
                                                                  ? "text-blue-700"
                                                                  : "text-orange-700"
                                                      }`}
                                                >
                                                      ₹
                                                      {Math.abs(
                                                            balance
                                                      ).toLocaleString("en-IN")}
                                                </p>
                                                <button
                                                      onClick={() =>
                                                            setIsEditing(true)
                                                      }
                                                      className="text-gray-500 hover:text-gray-700"
                                                      title="Edit budget"
                                                >
                                                      <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            className="h-5 w-5"
                                                            viewBox="0 0 20 20"
                                                            fill="currentColor"
                                                      >
                                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                                                      </svg>
                                                </button>
                                          </div>
                                    )}
                              </div>
                              <div
                                    className={`p-3 rounded-full text-lg ${
                                          balance >= 0
                                                ? "bg-blue-100 text-blue-600"
                                                : "bg-orange-100 text-orange-600"
                                    }`}
                              >
                                    ₹
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default TransactionSummary;
