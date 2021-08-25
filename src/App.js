import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import Footer from "./components/Footer/Footer";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Samsung Galaxy M31",
    amount: 16500.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Tennis Rackets",
    amount: 696.96,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Books",
    amount: 794.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 1450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    //  setExpenses([expense, ...expense]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expenses items={expenses}></Expenses>
      <Footer />
    </div>
  );
}

export default App;
