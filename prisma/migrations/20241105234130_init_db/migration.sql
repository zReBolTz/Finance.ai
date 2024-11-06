-- CreateEnum
CREATE TYPE "TransactionsType" AS ENUM ('DEPOSIT', 'EXPENSE', 'INVESTIMENT');

-- CreateEnum
CREATE TYPE "TransactionsCategory" AS ENUM ('HOUSING', 'TRANSPORTATION', 'FOOD', 'ENTERTAINMENT', 'HEALTH', 'UTILITY', 'SALARY', 'EDUCATION', 'OTHER');

-- CreateEnum
CREATE TYPE "TransactionsPaymentMehthod" AS ENUM ('CREDIT_CARD', 'DEBIT_CARD', 'BANK_TRANSFER', 'BANK_SLIP', 'CASH', 'PIX', 'OTHER');

-- CreateTable
CREATE TABLE "Transactions" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" "TransactionsType" NOT NULL,
    "amount" DECIMAL(10,2) NOT NULL,
    "categort" "TransactionsCategory" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,
    "paymentMethod" "TransactionsPaymentMehthod" NOT NULL,

    CONSTRAINT "Transactions_pkey" PRIMARY KEY ("id")
);
