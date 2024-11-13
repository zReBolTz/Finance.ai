import {
  TransactionsCategory,
  TransactionsPaymentMehthod,
  TransactionsType,
} from "@prisma/client";
import { z } from "zod";

export const upsertTransactionSchema = z.object({
  name: z.string().min(1),
  amount: z.number().positive(),
  type: z.nativeEnum(TransactionsType),
  categort: z.nativeEnum(TransactionsCategory),
  paymentMethod: z.nativeEnum(TransactionsPaymentMehthod),
  date: z.date(),
});
