import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import CreateBudgetModal from "./Modals/CreateBudgetModal";
import BudgetCard from "./BudgetCard";

const BudgetGrid = ({ budgets }) => {
      const [isCreateBudgetModalOpen, setisCreateBudgetModalOpen] =
            useState(false);
      const [openMenuId, setOpenMenuId] = useState(null);

      const handleMenuToggle = (budgetId) => {
            setOpenMenuId(openMenuId === budgetId ? null : budgetId);
      };

      return (
            <div className="w-full p-4">
                  <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold mb-4">Budgets</h2>
                        <button
                              onClick={() => setisCreateBudgetModalOpen(true)}
                              className="flex items-center gap-2 text-lg bg-black text-white hover:bg-gray-800 px-2 py-1 rounded-md"
                        >
                              <FaPlus /> Create
                        </button>
                  </div>
                  <div className="min-h-[200px] flex items-center justify-center">
                        {budgets.length === 0 ? (
                              <p className="text-center text-gray-500">
                                    No budgets available. Start by creating one!
                              </p>
                        ) : (
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                                    {budgets.map((budget) => (
                                          <BudgetCard
                                                key={budget.budget_id}
                                                budget={budget}
                                                isMenuOpen={
                                                      openMenuId ===
                                                      budget.budget_id
                                                }
                                                onMenuToggle={() =>
                                                      handleMenuToggle(
                                                            budget.budget_id
                                                      )
                                                }
                                          />
                                    ))}
                              </div>
                        )}
                  </div>
                  <CreateBudgetModal
                        isOpen={isCreateBudgetModalOpen}
                        onClose={() => setisCreateBudgetModalOpen(false)}
                  />
            </div>
      );
};

export default BudgetGrid;
