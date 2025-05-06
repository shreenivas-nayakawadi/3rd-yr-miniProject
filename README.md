# Budget Tracker Application - README

## Overview

This Budget Tracker is a full-stack application that helps users manage their finances by tracking budgets, transactions, and providing AI-powered insights. The application features receipt scanning, financial analysis, and personalized budgeting tools.

## Features

### User Authentication
- Secure signup and login with password hashing
- JWT-based session management
- Protected routes for authenticated users only

### Budget Management
- Create, update, and delete budgets
- Set budget categories (Personal, Business, Emergency, etc.)
- Track total amount vs. spent amount
- View all budgets for a user

### Transaction Tracking
- Record income and expenses
- Categorize transactions
- Associate transactions with specific budgets
- View transactions by user or by budget

### AI-Powered Features
- **Receipt Scanning**: Upload receipt images to automatically extract transaction details
- **Financial Insights**: Get personalized spending analysis and recommendations

## Tech Stack

### Frontend (Not included in this repository)
- React with Vite
- Zustand for state management
- Axios for API calls
- Tailwind CSS for styling

### Backend
- **Node.js** with **Express** server
- **Prisma** ORM for database operations
- **MySQL** database
- **Google Gemini AI** for receipt scanning and financial insights
- **Multer** for file upload handling
- **Bcrypt** for password hashing
- **JWT** for authentication

## Database Schema

![Database Schema Diagram]

Key Models:
- **User**: Stores user credentials and profile information
- **Budget**: Tracks budget details with start/end dates and categories
- **Transaction**: Records financial transactions linked to budgets

## API Endpoints

### Authentication (`/api/auth`)
- `POST /signup` - Register a new user
- `POST /login` - Authenticate user
- `POST /logout` - End user session

### Budget Management (`/api/budget`)
- `POST /create/:user_id` - Create new budget
- `PUT /update/:user_id/:budget_id` - Update existing budget
- `DELETE /delete/:user_id/:budget_id` - Delete budget
- `GET /all/:user_id` - Get all budgets for user
- `GET /categories` - Get available budget categories

### Transaction Management (`/api/transaction`)
- `POST /create/:user_id/:budget_id` - Create new transaction
- `PUT /update/:user_id/:transaction_id` - Update transaction
- `DELETE /delete/:user_id/:transaction_id` - Delete transaction
- `GET /all/:user_id` - Get all transactions for user
- `GET /budget/:budget_id` - Get transactions for specific budget
- `POST /scan-receipt` - Process receipt image and extract transaction data
- `GET /insights/:user_id` - Get financial insights and recommendations

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MySQL database
- Google Gemini API key

### Installation
1. Clone the repository
2. Install dependencies: `npm install`
3. Create a `.env` file with the following variables:
   ```
   DATABASE_URL="mysql://user:password@localhost:3306/db_name"
   GEMINI_API_KEY="your_google_gemini_api_key"
   JWT_SECRET="your_jwt_secret_key"
   PORT=5000
   ```
4. Run database migrations with Prisma
5. Start the server: `npm start`

## Environment Variables

| Variable         | Description                          | Required |
|------------------|--------------------------------------|----------|
| DATABASE_URL     | MySQL database connection string     | Yes      |
| GEMINI_API_KEY   | Google Gemini API key                | Yes      |
| JWT_SECRET       | Secret key for JWT tokens            | Yes      |
| PORT             | Server port (default: 5000)          | No       |

## Error Handling

The API returns standardized error responses with appropriate HTTP status codes:
- 400 Bad Request for validation errors
- 401 Unauthorized for authentication failures
- 404 Not Found for missing resources
- 500 Internal Server Error for unexpected issues

## Future Enhancements
- Implement budget progress tracking
- Add notifications for overspending
- Support for recurring transactions
- Enhanced reporting and visualization
- Multi-user budget sharing

