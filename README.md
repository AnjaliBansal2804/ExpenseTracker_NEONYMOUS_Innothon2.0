# Finance Tracker

A comprehensive personal finance management application that helps users track their income and expenses effectively.

## Features

- **Dashboard**
  - Overview of financial data
  - Visual representation of income and expenses

- **Income Management**
  - Add new income entries
  - View all income records
  - Delete income entries
  - Download income data in Excel format

- **Expense Management**
  - Add new expense entries
  - View all expense records
  - Delete expense entries
  - Download expense data in Excel format

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js and Express
- **API**: PostMan API
- **Database**: mongoDb

## Project Structure

```

## API Endpoints

### Authentication
- POST `/api/v1/auth/login` - User login
- POST `/api/v1/auth/register` - User registration
- GET `/api/v1/auth/getuser` - Get user information
- POST `/api/v1/auth/upload-image` - Upload profile image

### Dashboard
- GET `/api/v1/dashbord` - Get dashboard data

### Income
- POST `/api/v1/income/add` - Add new income
- GET `/api/v1/income/get` - Get all income records
- DELETE `/api/v1/income/:incomeId` - Delete specific income
- GET `/api/v1/income/downloadexcel` - Download income data

### Expense
- POST `/api/v1/expense/add` - Add new expense
- GET `/api/v1/expense/get` - Get all expense records
- DELETE `/api/v1/expense/:expenseId` - Delete specific expense
- GET `/api/v1/expense/downloadexcel` - Download expense data

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

