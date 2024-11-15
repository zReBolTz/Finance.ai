import { TransactionsCategory, TransactionsType } from "@prisma/client";

export type TransactionsPercentagePerType = {
  [key in TransactionsType]: number;
};

export interface TotalExpensePerCategory {
  category: TransactionsCategory;
  totalAmount: number;
  percentageOfTotal: number;
}
