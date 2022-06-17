export type BalanceItemType = "income" | "expense";
export type BalanceItemCategory =
  | "Transport"
  | "Financial"
  | "Food"
  | "Health"
  | "Home"
  | "Other"
  | "Work";

export type BalanceItem = {
  id: number;
  name: string;
  amount: number;
  type: BalanceItemType;
  category: BalanceItemCategory;
};
