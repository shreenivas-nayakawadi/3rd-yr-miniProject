import EditBudgetModal from "./Modals/EditBudgetModal";
import DeleteBudgetModal from "./Modals/DeleteBudgetModal";
import { Card } from "../components/ui/card";
import { Progress } from "../components/ui/progress";
import {
      FaPiggyBank,
      FaPlane,
      FaHeartbeat,
      FaGraduationCap,
      FaBriefcase,
      FaHome,
      FaGift,
      FaDumbbell,
      FaEllipsisV,
      FaEdit,
      FaTrash,
} from "react-icons/fa";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const categoryIcons = {
      Savings: <FaPiggyBank className="text-blue-500" />,
      Travel: <FaPlane className="text-orange-500" />,
      Emergency: <FaHeartbeat className="text-red-500" />,
      Health: <FaDumbbell className="text-green-500" />,
      Education: <FaGraduationCap className="text-purple-500" />,
      Business: <FaBriefcase className="text-gray-500" />,
      Personal: <FaHome className="text-yellow-500" />,
};

const getProgressColor = (percentage) => {
      if (percentage < 25) return "bg-blue-500";
      if (percentage < 50) return "bg-green-500";
      if (percentage < 75) return "bg-orange-500";
      if (percentage < 100) return "bg-red-500";
      return "bg-red-900";
};

const getBudgetSuggestion = (percentage) => {
      if (percentage < 25) return "You're well within your budget!";
      if (percentage < 50) return "You're managing your budget efficiently.";
      if (percentage < 75) return "You're getting closer to your budget limit.";
      if (percentage < 100) return "Warning: You're nearing your budget cap.";
      if (percentage === 100) return "You've reached your budget limit.";
      return "Alert: You've exceeded your budget!";
};

const getSuggestionColor = (percentage) => {
      if (percentage < 25) return "text-green-500";
      if (percentage < 50) return "text-blue-500";
      if (percentage < 75) return "text-yellow-500";
      if (percentage < 100) return "text-orange-500";
      return "text-red-600";
};

const BudgetCard = ({ budget, isMenuOpen, onMenuToggle }) => {
      const usedAmount = budget.spent_amount;
      const percentage = Math.floor((usedAmount / budget.total_amount) * 100);
      const [isEditBudgetModalOpen, setIsEditBudgetModalOpen] = useState(false);
      const [isDeleteBudgetModalOpen, setIsDeleteBudgetModalOpen] =
            useState(false);
      const navigate = useNavigate();

      const handleCardClick = (e) => {
            if (e.target.closest(".menu-button")) return;
            navigate(`/transaction/${budget.budget_id}`);
      };

      return (
            <Card
                  className="p-4 rounded-2xl shadow-lg flex items-center gap-4 cursor-pointer"
                  onClick={handleCardClick}
            >
                  <div className="text-3xl">
                        {categoryIcons[budget.category] || (
                              <FaGift className="text-gray-400" />
                        )}
                  </div>
                  <div className="flex-1">
                        <div className="flex-1 flex items-center justify-between">
                              <h3 className="text-lg font-semibold">
                                    {budget.budget_name}
                              </h3>
                              <div className="relative">
                                    <button
                                          onClick={(e) => {
                                                e.stopPropagation();
                                                onMenuToggle();
                                          }}
                                          className="text-gray-500 hover:text-gray-700 z-10 cursor-pointer menu-button"
                                    >
                                          <FaEllipsisV />
                                    </button>
                                    {isMenuOpen && (
                                          <div className="absolute right-4 top-6 bg-gray-100 shadow-md rounded-md p-1 z-10">
                                                <button
                                                      className="flex items-center gap-2 text-sm hover:bg-gray-100 px-2 py-1 rounded"
                                                      onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsEditBudgetModalOpen(
                                                                  true
                                                            );
                                                      }}
                                                >
                                                      <FaEdit /> Edit
                                                </button>
                                                <button
                                                      className="flex items-center gap-2 text-sm hover:bg-gray-100 px-2 py-1 rounded"
                                                      onClick={(e) => {
                                                            e.stopPropagation();
                                                            setIsDeleteBudgetModalOpen(
                                                                  true
                                                            );
                                                      }}
                                                >
                                                      <FaTrash /> Delete
                                                </button>
                                          </div>
                                    )}
                                    <EditBudgetModal
                                          budget={budget}
                                          isOpen={isEditBudgetModalOpen}
                                          onClose={(e) => {
                                                e.stopPropagation();
                                                setIsEditBudgetModalOpen(false);
                                          }}
                                    />
                                    <DeleteBudgetModal
                                          isOpen={isDeleteBudgetModalOpen}
                                          onClose={(e) => {
                                                e.stopPropagation();
                                                setIsDeleteBudgetModalOpen(
                                                      false
                                                );
                                          }}
                                          budgetId={budget.budget_id}
                                    />
                              </div>
                        </div>
                        <div className="relative w-full mt-2">
                              <Progress
                                    value={percentage}
                                    className={`${getProgressColor(
                                          percentage
                                    )} h-2 rounded-full`}
                              />
                        </div>
                        <p className="text-sm text-gray-600">
                              {usedAmount}/{budget.total_amount} ({percentage}%)
                        </p>
                        <p
                              className={`text-sm font-medium mt-1 ${getSuggestionColor(
                                    percentage
                              )}`}
                        >
                              {getBudgetSuggestion(percentage)}
                        </p>
                  </div>
            </Card>
      );
};

export default BudgetCard;
