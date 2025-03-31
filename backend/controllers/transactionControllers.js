import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const transactionController = {
      // Create Transaction
      createTransaction: async (req, res) => {
            const { user_id, budget_id } = req.params;
            const { transaction_type, amount, description, category } =
                  req.body;

            try {
                  const transaction = await prisma.transaction.create({
                        data: {
                              user_id,
                              budget_id,
                              transaction_type,
                              amount: parseFloat(amount),
                              description,
                              category,
                        },
                  });

                  res.status(201).json(transaction);
            } catch (error) {
                  console.error("Error creating transaction:", error);
                  res.status(500).json({
                        error: error.message || "Failed to create transaction",
                  });
            }
      },

      // Update Transaction
      updateTransaction: async (req, res) => {
            const { user_id, transaction_id } = req.params;
            const { transaction_type, amount, description } = req.body;

            try {
                  const transaction = await prisma.transaction.update({
                        where: {
                              transaction_id,
                              user_id,
                        },
                        data: {
                              transaction_type,
                              amount: parseFloat(amount),
                              description,
                        },
                  });
                  res.status(200).json(transaction);
            } catch (error) {
                  res.status(400).json({ error: error.message });
            }
      },

      // Delete Transaction
      deleteTransaction: async (req, res) => {
            const { user_id, transaction_id } = req.params;

            try {
                  await prisma.transaction.delete({
                        where: {
                              transaction_id,
                              user_id,
                        },
                  });
                  res.status(200).json({
                        message: "Transaction deleted successfully",
                  });
            } catch (error) {
                  res.status(400).json({ error: error.message });
            }
      },

      // Get All Transactions for a User
      getAllTransactionsForUser: async (req, res) => {
            const { user_id } = req.params;

            try {
                  const transactions = await prisma.transaction.findMany({
                        where: { user_id },
                  });
                  res.status(200).json(transactions);
            } catch (error) {
                  res.status(400).json({ error: error.message });
            }
      },

      // Get All Transactions for a Budget
      getAllTransactionsForBudget: async (req, res) => {
            const { budget_id } = req.params;

            try {
                  const transactions = await prisma.transaction.findMany({
                        where: { budget_id },
                  });
                  res.status(200).json(transactions);
            } catch (error) {
                  res.status(400).json({ error: error.message });
            }
      },
};

export default transactionController;
