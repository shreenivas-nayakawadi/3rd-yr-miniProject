// import React, { useState, useEffect, useRef } from "react";
// import { FaEdit, FaTrash, FaSearch, FaFilter } from "react-icons/fa";
// import FilterModal from "../Modals/TransactionModals/FilterModal";

// const TransactionTable = ({ transactions }) => {
//       const [searchTerm, setSearchTerm] = useState("");
//       const [filter, setFilter] = useState("All");
//       const [menuOpen, setMenuOpen] = useState(null);
//       const [showFilterModal, setShowFilterModal] = useState(false);
//       const [startDate, setStartDate] = useState("");
//       const [endDate, setEndDate] = useState("");
//       const actionMenuRefs = useRef({});

//       // Close menu when clicking outside
//       useEffect(() => {
//             const handleClickOutside = (event) => {
//                   if (menuOpen) {
//                         const menuElement = actionMenuRefs.current[menuOpen];
//                         if (
//                               menuElement &&
//                               !menuElement.contains(event.target)
//                         ) {
//                               const actionButton = document.querySelector(
//                                     `button[data-transaction="${menuOpen}"]`
//                               );
//                               if (
//                                     !actionButton ||
//                                     !actionButton.contains(event.target)
//                               ) {
//                                     setMenuOpen(null);
//                               }
//                         }
//                   }
//             };

//             document.addEventListener("mousedown", handleClickOutside);
//             return () =>
//                   document.removeEventListener("mousedown", handleClickOutside);
//       }, [menuOpen]);

//       const handleEdit = (transaction) => {
//             console.log("Edit transaction:", transaction);
//             setMenuOpen(null);
//       };

//       const handleDelete = (transactionId) => {
//             console.log("Delete transaction with ID:", transactionId);
//             setMenuOpen(null);
//       };

//       const getCategoryColor = (category) => {
//             const colors = {
//                   Health: "bg-blue-100 text-blue-800",
//                   Personal: "bg-indigo-100 text-indigo-800",
//                   Business: "bg-purple-100 text-purple-800",
//                   Emergency: "bg-red-100 text-red-800",
//                   Travel: "bg-cyan-100 text-cyan-800",
//                   Savings: "bg-green-100 text-green-800",
//                   Education: "bg-amber-100 text-amber-800",
//                   Shopping: "bg-pink-100 text-pink-800",
//                   Food: "bg-amber-100 text-amber-800",
//                   Salary: "bg-green-100 text-green-800",
//                   Entertainment: "bg-purple-100 text-purple-800",
//                   Transportation: "bg-gray-100 text-gray-800",
//                   default: "bg-gray-100 text-gray-800",
//             };
//             return colors[category] || colors.default;
//       };

//       const filteredTransactions = transactions.filter(
//             (transaction) =>
//                   (filter === "All" ||
//                         transaction.transaction_type === filter) &&
//                   transaction.description
//                         .toLowerCase()
//                         .includes(searchTerm.toLowerCase()) &&
//                   (startDate === "" ||
//                         new Date(transaction.transaction_date) >=
//                               new Date(startDate)) &&
//                   (endDate === "" ||
//                         new Date(transaction.transaction_date) <=
//                               new Date(endDate))
//       );

//       return (
//             <div className="p-4 sm:p-6 w-full mx-auto bg-white rounded-lg shadow-sm">
//                   <FilterModal
//                         showFilterModal={showFilterModal}
//                         setShowFilterModal={setShowFilterModal}
//                         filter={filter}
//                         setFilter={setFilter}
//                         startDate={startDate}
//                         setStartDate={setStartDate}
//                         endDate={endDate}
//                         setEndDate={setEndDate}
//                   />

//                   {/* Search and Filter Bar - Mobile Optimized */}
//                   <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-6 gap-3">
//                         <div className="relative flex-grow">
//                               <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                                     <FaSearch className="text-gray-400 text-sm sm:text-base" />
//                               </div>
//                               <input
//                                     type="text"
//                                     placeholder="Search transactions..."
//                                     value={searchTerm}
//                                     onChange={(e) =>
//                                           setSearchTerm(e.target.value)
//                                     }
//                                     className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
//                               />
//                         </div>

//                         <button
//                               onClick={() => setShowFilterModal(true)}
//                               className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors text-sm sm:text-base"
//                         >
//                               <FaFilter className="text-gray-500" />
//                               <span>Filters</span>
//                               {(filter !== "All" || startDate || endDate) && (
//                                     <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
//                                           {[
//                                                 filter !== "All" ? 1 : 0,
//                                                 startDate ? 1 : 0,
//                                                 endDate ? 1 : 0,
//                                           ].reduce((a, b) => a + b, 0)}
//                                     </span>
//                               )}
//                         </button>
//                   </div>

//                   {/* Transactions Table - Mobile Responsive */}
//                   <div className="overflow-x-auto">
//                         {filteredTransactions.length > 0 ? (
//                               <>
//                                     {/* Mobile Cards View */}
//                                     <div className="sm:hidden space-y-3">
//                                           {filteredTransactions.map(
//                                                 (transaction) => (
//                                                       <div
//                                                             key={
//                                                                   transaction.transaction_id
//                                                             }
//                                                             className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
//                                                       >
//                                                             <div className="flex justify-between items-start">
//                                                                   <div>
//                                                                         <p className="text-sm font-medium text-gray-700">
//                                                                               {
//                                                                                     transaction.description
//                                                                               }
//                                                                         </p>
//                                                                         <p className="text-xs text-gray-500 mt-1">
//                                                                               {new Date(
//                                                                                     transaction.transaction_date
//                                                                               ).toLocaleDateString(
//                                                                                     "en-IN",
//                                                                                     {
//                                                                                           day: "numeric",
//                                                                                           month: "short",
//                                                                                           year: "numeric",
//                                                                                     }
//                                                                               )}
//                                                                         </p>
//                                                                   </div>
//                                                                   <p
//                                                                         className={`text-sm font-medium ${
//                                                                               transaction.transaction_type ===
//                                                                               "Income"
//                                                                                     ? "text-green-600"
//                                                                                     : "text-red-600"
//                                                                         }`}
//                                                                   >
//                                                                         {transaction.transaction_type ===
//                                                                         "Income"
//                                                                               ? "+"
//                                                                               : "-"}
//                                                                         ₹
//                                                                         {transaction.amount.toLocaleString(
//                                                                               "en-IN"
//                                                                         )}
//                                                                   </p>
//                                                             </div>
//                                                             <div className="flex justify-between items-center mt-2">
//                                                                   <span
//                                                                         className={`${getCategoryColor(
//                                                                               transaction.category
//                                                                         )} px-2 py-1 rounded-full text-xs font-medium`}
//                                                                   >
//                                                                         {
//                                                                               transaction.category
//                                                                         }
//                                                                   </span>
//                                                                   <div className="relative">
//                                                                         <button
//                                                                               data-transaction={
//                                                                                     transaction.transaction_id
//                                                                               }
//                                                                               onClick={() =>
//                                                                                     setMenuOpen(
//                                                                                           menuOpen ===
//                                                                                                 transaction.transaction_id
//                                                                                                 ? null
//                                                                                                 : transaction.transaction_id
//                                                                                     )
//                                                                               }
//                                                                               className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
//                                                                         >
//                                                                               <svg
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     className="h-5 w-5"
//                                                                                     viewBox="0 0 20 20"
//                                                                                     fill="currentColor"
//                                                                               >
//                                                                                     <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
//                                                                               </svg>
//                                                                         </button>
//                                                                         {menuOpen ===
//                                                                               transaction.transaction_id && (
//                                                                               <div
//                                                                                     ref={(
//                                                                                           el
//                                                                                     ) =>
//                                                                                           (actionMenuRefs.current[
//                                                                                                 transaction.transaction_id
//                                                                                           ] =
//                                                                                                 el)
//                                                                                     }
//                                                                                     className="absolute right-0 top-8 mt-1 w-32 bg-white rounded-md shadow-lg z-20 border border-gray-200 py-1"
//                                                                               >
//                                                                                     <button
//                                                                                           onClick={() =>
//                                                                                                 handleEdit(
//                                                                                                       transaction
//                                                                                                 )
//                                                                                           }
//                                                                                           className="flex items-center gap-2 w-full px-3 py-1.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                                                                                     >
//                                                                                           <FaEdit className="text-blue-500 text-sm" />
//                                                                                           Edit
//                                                                                     </button>
//                                                                                     <button
//                                                                                           onClick={() =>
//                                                                                                 handleDelete(
//                                                                                                       transaction.transaction_id
//                                                                                                 )
//                                                                                           }
//                                                                                           className="flex items-center gap-2 w-full px-3 py-1.5 text-xs text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
//                                                                                     >
//                                                                                           <FaTrash className="text-red-500 text-sm" />
//                                                                                           Delete
//                                                                                     </button>
//                                                                               </div>
//                                                                         )}
//                                                                   </div>
//                                                             </div>
//                                                       </div>
//                                                 )
//                                           )}
//                                     </div>

//                                     {/* Desktop Table View */}
//                                     <table className="hidden sm:table w-full border-collapse rounded-lg overflow-hidden shadow-sm">
//                                           <thead>
//                                                 <tr className="bg-gray-50 border-b border-gray-200">
//                                                       <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
//                                                             Date
//                                                       </th>
//                                                       <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
//                                                             Description
//                                                       </th>
//                                                       <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
//                                                             Category
//                                                       </th>
//                                                       <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
//                                                             Amount
//                                                       </th>
//                                                       <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
//                                                             Actions
//                                                       </th>
//                                                 </tr>
//                                           </thead>
//                                           <tbody>
//                                                 {filteredTransactions.map(
//                                                       (transaction) => (
//                                                             <tr
//                                                                   key={
//                                                                         transaction.transaction_id
//                                                                   }
//                                                                   className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
//                                                             >
//                                                                   <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
//                                                                         {new Date(
//                                                                               transaction.transaction_date
//                                                                         ).toLocaleDateString(
//                                                                               "en-IN",
//                                                                               {
//                                                                                     day: "numeric",
//                                                                                     month: "short",
//                                                                                     year: "numeric",
//                                                                               }
//                                                                         )}
//                                                                   </td>
//                                                                   <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
//                                                                         {
//                                                                               transaction.description
//                                                                         }
//                                                                   </td>
//                                                                   <td className="p-3 sm:p-4">
//                                                                         <span
//                                                                               className={`${getCategoryColor(
//                                                                                     transaction.category
//                                                                               )} px-2 sm:px-3 py-1 rounded-full text-xs font-medium`}
//                                                                         >
//                                                                               {
//                                                                                     transaction.category
//                                                                               }
//                                                                         </span>
//                                                                   </td>
//                                                                   <td
//                                                                         className={`p-3 sm:p-4 font-medium text-sm sm:text-base ${
//                                                                               transaction.transaction_type ===
//                                                                               "Income"
//                                                                                     ? "text-green-600"
//                                                                                     : "text-red-600"
//                                                                         }`}
//                                                                   >
//                                                                         {transaction.transaction_type ===
//                                                                         "Income"
//                                                                               ? "+"
//                                                                               : "-"}
//                                                                         ₹
//                                                                         {transaction.amount.toLocaleString(
//                                                                               "en-IN"
//                                                                         )}
//                                                                   </td>
//                                                                   <td className="p-3 sm:p-4 relative">
//                                                                         <button
//                                                                               data-transaction={
//                                                                                     transaction.transaction_id
//                                                                               }
//                                                                               onClick={() =>
//                                                                                     setMenuOpen(
//                                                                                           menuOpen ===
//                                                                                                 transaction.transaction_id
//                                                                                                 ? null
//                                                                                                 : transaction.transaction_id
//                                                                                     )
//                                                                               }
//                                                                               className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
//                                                                         >
//                                                                               <svg
//                                                                                     xmlns="http://www.w3.org/2000/svg"
//                                                                                     className="h-5 w-5"
//                                                                                     viewBox="0 0 20 20"
//                                                                                     fill="currentColor"
//                                                                               >
//                                                                                     <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
//                                                                               </svg>
//                                                                         </button>
//                                                                         {menuOpen ===
//                                                                               transaction.transaction_id && (
//                                                                               <div
//                                                                                     ref={(
//                                                                                           el
//                                                                                     ) =>
//                                                                                           (actionMenuRefs.current[
//                                                                                                 transaction.transaction_id
//                                                                                           ] =
//                                                                                                 el)
//                                                                                     }
//                                                                                     className="absolute right-0 sm:left-[-150px] top-8 sm:top-[-30px] mt-1 w-32 sm:w-40 bg-white rounded-md shadow-lg z-20 border border-gray-200 py-1"
//                                                                               >
//                                                                                     <button
//                                                                                           onClick={() =>
//                                                                                                 handleEdit(
//                                                                                                       transaction
//                                                                                                 )
//                                                                                           }
//                                                                                           className="flex items-center gap-2 w-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
//                                                                                     >
//                                                                                           <FaEdit className="text-blue-500" />
//                                                                                           Edit
//                                                                                     </button>
//                                                                                     <button
//                                                                                           onClick={() =>
//                                                                                                 handleDelete(
//                                                                                                       transaction.transaction_id
//                                                                                                 )
//                                                                                           }
//                                                                                           className="flex items-center gap-2 w-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
//                                                                                     >
//                                                                                           <FaTrash className="text-red-500" />
//                                                                                           Delete
//                                                                                     </button>
//                                                                               </div>
//                                                                         )}
//                                                                   </td>
//                                                             </tr>
//                                                       )
//                                                 )}
//                                           </tbody>
//                                     </table>
//                               </>
//                         ) : (
//                               <div className="p-4 text-center text-gray-500 text-sm sm:text-base">
//                                     No transactions found matching your criteria
//                               </div>
//                         )}
//                   </div>
//             </div>
//       );
// };

// export default TransactionTable;
import React, { useState, useEffect, useRef } from "react";
import { FaEdit, FaTrash, FaSearch, FaFilter } from "react-icons/fa";
import FilterModal from "../Modals/TransactionModals/FilterModal";
import EditTransactionModal from "../Modals/TransactionModals/EditTransactionModal";
import DeleteTransactionModal from "../Modals/TransactionModals/DeleteTransactionModal";
import { useLocation } from "react-router-dom";

const TransactionTable = ({ transactions, userId, budgetId }) => {
      // ... existing state and functions ...
      const [searchTerm, setSearchTerm] = useState("");
      const [filter, setFilter] = useState("All");
      const [menuOpen, setMenuOpen] = useState(null);
      const [showFilterModal, setShowFilterModal] = useState(false);
      const [startDate, setStartDate] = useState("");
      const [endDate, setEndDate] = useState("");
      const actionMenuRefs = useRef({});
      const location = useLocation();

      // Close menu when clicking outside
      useEffect(() => {
            const handleClickOutside = (event) => {
                  if (menuOpen) {
                        const menuElement = actionMenuRefs.current[menuOpen];
                        if (
                              menuElement &&
                              !menuElement.contains(event.target)
                        ) {
                              const actionButton = document.querySelector(
                                    `button[data-transaction="${menuOpen}"]`
                              );
                              if (
                                    !actionButton ||
                                    !actionButton.contains(event.target)
                              ) {
                                    setMenuOpen(null);
                              }
                        }
                  }
            };

            document.addEventListener("mousedown", handleClickOutside);
            return () =>
                  document.removeEventListener("mousedown", handleClickOutside);
      }, [menuOpen]);

      const getCategoryColor = (category) => {
            const colors = {
                  Health: "bg-blue-100 text-blue-800",
                  Personal: "bg-indigo-100 text-indigo-800",
                  Business: "bg-purple-100 text-purple-800",
                  Emergency: "bg-red-100 text-red-800",
                  Travel: "bg-cyan-100 text-cyan-800",
                  Savings: "bg-green-100 text-green-800",
                  Education: "bg-amber-100 text-amber-800",
                  Shopping: "bg-pink-100 text-pink-800",
                  Food: "bg-amber-100 text-amber-800",
                  Salary: "bg-green-100 text-green-800",
                  Entertainment: "bg-purple-100 text-purple-800",
                  Transportation: "bg-gray-100 text-gray-800",
                  default: "bg-gray-100 text-gray-800",
            };
            return colors[category] || colors.default;
      };

      const filteredTransactions = transactions.filter(
            (transaction) =>
                  (filter === "All" ||
                        transaction.transaction_type === filter) &&
                  transaction.description
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) &&
                  (startDate === "" ||
                        new Date(transaction.transaction_date) >=
                              new Date(startDate)) &&
                  (endDate === "" ||
                        new Date(transaction.transaction_date) <=
                              new Date(endDate))
      );

      const [editingTransaction, setEditingTransaction] = useState(null);
      const [deletingTransactionId, setDeletingTransactionId] = useState(null);

      const handleEdit = (transaction) => {
            setEditingTransaction(transaction);
            setMenuOpen(null);
      };

      const handleDelete = (transactionId) => {
            setDeletingTransactionId(transactionId);
            setMenuOpen(null);
      };

      return (
            <div className="p-4 sm:p-6 w-full mx-auto bg-white rounded-lg shadow-sm">
                  <FilterModal
                        showFilterModal={showFilterModal}
                        setShowFilterModal={setShowFilterModal}
                        filter={filter}
                        setFilter={setFilter}
                        startDate={startDate}
                        setStartDate={setStartDate}
                        endDate={endDate}
                        setEndDate={setEndDate}
                  />

                  {/* Search and Filter Bar - Mobile Optimized */}
                  <div
                        className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-6 gap-3"
                        disabled={transactions.length === 0 ? true : false}
                  >
                        <div className="relative flex-grow">
                              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaSearch className="text-gray-400 text-sm sm:text-base" />
                              </div>
                              <input
                                    type="text"
                                    placeholder="Search transactions..."
                                    value={searchTerm}
                                    onChange={(e) =>
                                          setSearchTerm(e.target.value)
                                    }
                                    disabled={
                                          transactions.length === 0
                                                ? true
                                                : false
                                    }
                                    className="w-full pl-9 sm:pl-10 pr-3 sm:pr-4 py-2 text-sm sm:text-base border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                              />
                        </div>

                        <button
                              onClick={() => setShowFilterModal(true)}
                              disabled={
                                    transactions.length === 0 ? true : false
                              }
                              className="flex items-center justify-center gap-2 px-3 sm:px-4 py-2 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors text-sm sm:text-base"
                        >
                              <FaFilter className="text-gray-500" />
                              <span>Filters</span>
                              {(filter !== "All" || startDate || endDate) && (
                                    <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded-full">
                                          {[
                                                filter !== "All" ? 1 : 0,
                                                startDate ? 1 : 0,
                                                endDate ? 1 : 0,
                                          ].reduce((a, b) => a + b, 0)}
                                    </span>
                              )}
                        </button>
                  </div>

                  {/* Transactions Table - Mobile Responsive */}
                  <div className="overflow-x-auto">
                        {filteredTransactions.length > 0 ? (
                              <>
                                    {/* Mobile Cards View */}
                                    <div className="sm:hidden space-y-3">
                                          {filteredTransactions.map(
                                                (transaction) => (
                                                      <div
                                                            key={
                                                                  transaction.transaction_id
                                                            }
                                                            className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                                                      >
                                                            <div className="flex justify-between items-start">
                                                                  <div>
                                                                        <p className="text-sm font-medium text-gray-700">
                                                                              {
                                                                                    transaction.description
                                                                              }
                                                                        </p>
                                                                        <p className="text-xs text-gray-500 mt-1">
                                                                              {new Date(
                                                                                    transaction.transaction_date
                                                                              ).toLocaleDateString(
                                                                                    "en-IN",
                                                                                    {
                                                                                          day: "numeric",
                                                                                          month: "short",
                                                                                          year: "numeric",
                                                                                    }
                                                                              )}
                                                                        </p>
                                                                  </div>
                                                                  <p
                                                                        className={`text-sm font-medium ${
                                                                              transaction.transaction_type ===
                                                                              "Income"
                                                                                    ? "text-green-600"
                                                                                    : "text-red-600"
                                                                        }`}
                                                                  >
                                                                        {transaction.transaction_type ===
                                                                        "Income"
                                                                              ? "+"
                                                                              : "-"}
                                                                        ₹
                                                                        {transaction.amount.toLocaleString(
                                                                              "en-IN"
                                                                        )}
                                                                  </p>
                                                            </div>
                                                            <div className="flex justify-between items-center mt-2">
                                                                  <span
                                                                        className={`${getCategoryColor(
                                                                              transaction.category
                                                                        )} px-2 py-1 rounded-full text-xs font-medium`}
                                                                  >
                                                                        {
                                                                              transaction.category
                                                                        }
                                                                  </span>
                                                                  <div className="relative">
                                                                        <button
                                                                              data-transaction={
                                                                                    transaction.transaction_id
                                                                              }
                                                                              onClick={() =>
                                                                                    setMenuOpen(
                                                                                          menuOpen ===
                                                                                                transaction.transaction_id
                                                                                                ? null
                                                                                                : transaction.transaction_id
                                                                                    )
                                                                              }
                                                                              className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                                                                        >
                                                                              <svg
                                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                                    className="h-5 w-5"
                                                                                    viewBox="0 0 20 20"
                                                                                    fill="currentColor"
                                                                              >
                                                                                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                                              </svg>
                                                                        </button>
                                                                        {menuOpen ===
                                                                              transaction.transaction_id && (
                                                                              <div
                                                                                    ref={(
                                                                                          el
                                                                                    ) =>
                                                                                          (actionMenuRefs.current[
                                                                                                transaction.transaction_id
                                                                                          ] =
                                                                                                el)
                                                                                    }
                                                                                    className="absolute right-0 top-8 mt-1 w-32 bg-white rounded-md shadow-lg z-20 border border-gray-200 py-1"
                                                                              >
                                                                                    <button
                                                                                          onClick={() =>
                                                                                                handleEdit(
                                                                                                      transaction
                                                                                                )
                                                                                          }
                                                                                          className="flex items-center gap-2 w-full px-3 py-1.5 text-xs text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                                                    >
                                                                                          <FaEdit className="text-blue-500 text-sm" />
                                                                                          Edit
                                                                                    </button>
                                                                                    <button
                                                                                          onClick={() =>
                                                                                                handleDelete(
                                                                                                      transaction.transaction_id
                                                                                                )
                                                                                          }
                                                                                          className="flex items-center gap-2 w-full px-3 py-1.5 text-xs text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                                                    >
                                                                                          <FaTrash className="text-red-500 text-sm" />
                                                                                          Delete
                                                                                    </button>
                                                                              </div>
                                                                        )}
                                                                  </div>
                                                            </div>
                                                      </div>
                                                )
                                          )}
                                    </div>

                                    {/* Desktop Table View */}
                                    <table className="hidden sm:table w-full border-collapse rounded-lg overflow-hidden shadow-sm">
                                          <thead>
                                                <tr className="bg-gray-50 border-b border-gray-200">
                                                      <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
                                                            Date
                                                      </th>
                                                      <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
                                                            Description
                                                      </th>
                                                      <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
                                                            Category
                                                      </th>
                                                      <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
                                                            Amount
                                                      </th>
                                                      {location.pathname !==
                                                            "/allTransactions" && (
                                                            <th className="p-3 sm:p-4 text-left text-gray-600 font-medium text-sm sm:text-base">
                                                                  Actions
                                                            </th>
                                                      )}
                                                </tr>
                                          </thead>
                                          <tbody>
                                                {filteredTransactions.map(
                                                      (transaction) => (
                                                            <tr
                                                                  key={
                                                                        transaction.transaction_id
                                                                  }
                                                                  className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                                            >
                                                                  <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
                                                                        {new Date(
                                                                              transaction.transaction_date
                                                                        ).toLocaleDateString(
                                                                              "en-IN",
                                                                              {
                                                                                    day: "numeric",
                                                                                    month: "short",
                                                                                    year: "numeric",
                                                                              }
                                                                        )}
                                                                  </td>
                                                                  <td className="p-3 sm:p-4 text-gray-700 text-sm sm:text-base">
                                                                        {
                                                                              transaction.description
                                                                        }
                                                                  </td>
                                                                  <td className="p-3 sm:p-4">
                                                                        <span
                                                                              className={`${getCategoryColor(
                                                                                    transaction.category
                                                                              )} px-2 sm:px-3 py-1 rounded-full text-xs font-medium`}
                                                                        >
                                                                              {
                                                                                    transaction.category
                                                                              }
                                                                        </span>
                                                                  </td>
                                                                  <td
                                                                        className={`p-3 sm:p-4 font-medium text-sm sm:text-base ${
                                                                              transaction.transaction_type ===
                                                                              "Income"
                                                                                    ? "text-green-600"
                                                                                    : "text-red-600"
                                                                        }`}
                                                                  >
                                                                        {transaction.transaction_type ===
                                                                        "Income"
                                                                              ? "+"
                                                                              : "-"}
                                                                        ₹
                                                                        {transaction.amount.toLocaleString(
                                                                              "en-IN"
                                                                        )}
                                                                  </td>
                                                                  {location.pathname !==
                                                                        "/allTransactions" && (
                                                                        <td className="p-3 sm:p-4 relative">
                                                                              <button
                                                                                    data-transaction={
                                                                                          transaction.transaction_id
                                                                                    }
                                                                                    onClick={() =>
                                                                                          setMenuOpen(
                                                                                                menuOpen ===
                                                                                                      transaction.transaction_id
                                                                                                      ? null
                                                                                                      : transaction.transaction_id
                                                                                          )
                                                                                    }
                                                                                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-colors"
                                                                              >
                                                                                    <svg
                                                                                          xmlns="http://www.w3.org/2000/svg"
                                                                                          className="h-5 w-5"
                                                                                          viewBox="0 0 20 20"
                                                                                          fill="currentColor"
                                                                                    >
                                                                                          <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                                                                                    </svg>
                                                                              </button>
                                                                              {menuOpen ===
                                                                                    transaction.transaction_id && (
                                                                                    <div
                                                                                          ref={(
                                                                                                el
                                                                                          ) =>
                                                                                                (actionMenuRefs.current[
                                                                                                      transaction.transaction_id
                                                                                                ] =
                                                                                                      el)
                                                                                          }
                                                                                          className="absolute right-0 sm:left-[-150px] top-8 sm:top-[-30px] mt-1 w-32 sm:w-40 bg-white rounded-md shadow-lg z-20 border border-gray-200 py-1"
                                                                                    >
                                                                                          <button
                                                                                                onClick={() =>
                                                                                                      handleEdit(
                                                                                                            transaction
                                                                                                      )
                                                                                                }
                                                                                                className="flex items-center gap-2 w-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                                                                          >
                                                                                                <FaEdit className="text-blue-500" />
                                                                                                Edit
                                                                                          </button>
                                                                                          <button
                                                                                                onClick={() =>
                                                                                                      handleDelete(
                                                                                                            transaction.transaction_id
                                                                                                      )
                                                                                                }
                                                                                                className="flex items-center gap-2 w-full px-3 sm:px-4 py-2 text-xs sm:text-sm text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                                                          >
                                                                                                <FaTrash className="text-red-500" />
                                                                                                Delete
                                                                                          </button>
                                                                                    </div>
                                                                              )}
                                                                        </td>
                                                                  )}
                                                            </tr>
                                                      )
                                                )}
                                          </tbody>
                                    </table>
                              </>
                        ) : (
                              <div className="p-4 text-center text-gray-500 text-sm sm:text-base">
                                    {filteredTransactions.length === 0 &&
                                    transactions.length > 0
                                          ? "No transactions found matching your criteria."
                                          : "No transactions available."}
                              </div>
                        )}
                  </div>

                  {/* Modals */}
                  <EditTransactionModal
                        isOpen={!!editingTransaction}
                        onClose={() => setEditingTransaction(null)}
                        transaction={editingTransaction}
                        userId={userId}
                        budgetId={budgetId}
                  />
                  <DeleteTransactionModal
                        isOpen={!!deletingTransactionId}
                        onClose={() => setDeletingTransactionId(null)}
                        transactionId={deletingTransactionId}
                        userId={userId}
                        budgetId={budgetId}
                  />
            </div>
      );
};

export default TransactionTable;
