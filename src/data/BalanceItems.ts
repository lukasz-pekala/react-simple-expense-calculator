import { BalanceItem } from "../models/BalanceItem";

export const BalanceItems: BalanceItem[] = [
  {
    id: 1,
    name: "Rent",
    amount: -1000,
    type: "expense",
    category: "Home",
  },
  {
    id: 2,
    name: "Coffee",
    amount: -5,
    type: "expense",
    category: "Food",
  },
  {
    id: 3,
    name: "Gas",
    amount: -100,
    type: "expense",
    category: "Transport",
  },
  {
    id: 4,
    name: "Burrito",
    amount: -15,
    type: "expense",
    category: "Food",
  },
  {
    id: 5,
    name: "Salary",
    amount: 10000,
    type: "income",
    category: "Work",
  },
];
