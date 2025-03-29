import express from "express";
import transactionController from "../controllers/transactionControllers.js";
const router = express.Router();

router.post(
      "/create/:user_id/:budget_id",
      transactionController.createTransaction
);
router.put(
      "/update/:user_id/:transaction_id",
      transactionController.updateTransaction
);
router.delete(
      "/delete/:user_id/:transaction_id",
      transactionController.deleteTransaction
);
router.get("/all/:user_id", transactionController.getAllTransactionsForUser);
router.get(
      "/budget/:budget_id",
      transactionController.getAllTransactionsForBudget
);

export default router;
