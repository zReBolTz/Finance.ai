"use server";

import { db } from "@/app/_lib/prisma";
import { auth } from "@clerk/nextjs/server";
import {
  TransactionsCategory,
  TransactionsPaymentMehthod,
  TransactionsType,
} from "@prisma/client";
import { addTransactionSchema } from "./schema";
import { revalidatePath } from "next/cache";

interface addTransactionParams {
  name: string;
  amount: number;
  type: TransactionsType;
  categort: TransactionsCategory;
  paymentMethod: TransactionsPaymentMehthod;
  date: Date;
}

export const addTransaction = async (params: addTransactionParams) => {
  addTransactionSchema.parse(params);
  const { userId } = await auth();
  if (!userId) {
    throw new Error("Unauthorized");
  }
  await db.transactions.create({
    data: { ...params, userId },
  });
  revalidatePath("/transactions");
};
