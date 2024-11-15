import { TransactionsType } from "@prisma/client";

export type TransactionsPercentagePerType = {
  [key in TransactionsType]: number;
};
