import { PrismaClient, BudgetCategory } from "@prisma/client";

const prisma = new PrismaClient();

const budgetController = {
      // Create Budget
      createBudget: async (req, res) => {
            const { user_id } = req.params;
            const {
                  budget_name,
                  total_amount,
                  start_date,
                  end_date,
                  category,
            } = req.body;

            try {
                  const budget = await prisma.budget.create({
                        data: {
                              user_id,
                              budget_name,
                              total_amount,
                              start_date: new Date(start_date),
                              end_date: new Date(end_date),
                              category,
                        },
                  });
                  res.status(201).json(budget);
            } catch (error) {
                  res.status(400).json({ error: error.message });
            }
      },

      // Update Budget
      updateBudget: async (req, res) => {
            const { user_id, budget_id } = req.params;
            const {
                  budget_name,
                  total_amount,
                  start_date,
                  end_date,
                  category,
            } = req.body;

            try {
                  const budget = await prisma.budget.update({
                        where: {
                              budget_id,
                              user_id,
                        },
                        data: {
                              budget_name,
                              total_amount,
                              start_date: new Date(start_date),
                              end_date: new Date(end_date),
                              category,
                        },
                  });
                  res.status(200).json(budget);
            } catch (error) {
                  res.status(400).json({ error: error.message });
            }
      },

      // Delete Budget
      deleteBudget: async (req, res) => {
            const { user_id, budget_id } = req.params;

            try {
                  await prisma.budget.delete({
                        where: {
                              budget_id,
                              user_id,
                        },
                  });
                  res.status(200).json({
                        message: "Budget deleted successfully",
                  });
            } catch (error) {
                  res.status(400).json({ error: error.message });
            }
      },

      // Get All Budgets by User ID
      getAllBudgets: async (req, res) => {
            const { user_id } = req.params;

            try {
                  const budgets = await prisma.budget.findMany({
                        where: { user_id },
                  });
                  console.log(budgets)
                  res.status(200).json(budgets);
            } catch (error) {
                  res.status(400).json({ error: error.message });
            }
      },

      // Get Budget Categories
      getBudgetCategories: async (req, res) => {
            try {
                  const categories = Object.values(BudgetCategory);
                  res.status(200).json(categories);
            } catch (error) {
                  res.status(400).json({ error: error.message });
            }
      },
};

export default budgetController;
