import {
  TransactionsCategory,
  TransactionsPaymentMehthod,
  TransactionsType,
} from "@prisma/client";
import { z } from "zod";

export const addTransactionSchema = z.object({
  name: z.string().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionsType),
  categort: z.nativeEnum(TransactionsCategory),
  paymentMethod: z.nativeEnum(TransactionsPaymentMehthod),
  date: z.date(),
});
