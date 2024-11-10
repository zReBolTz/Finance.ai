"use client";

import { Transactions } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionsTypeBadge from "../components/type-badge";
import { Button } from "@/app/_components/ui/button";
import { PencilIcon, TrashIcon } from "lucide-react";

export const TRANSACTION_CATEGORY_LABEL = {
  EDUCATION: "Educação",
  HOUSING: "Moradia",
  TRANSPORTATION: "Transporte",
  FOOD: "Alimentação",
  ENTERTAINMENT: "Entreterimento",
  HEALTH: "Saúde",
  UTILITY: "Utilidades",
  SALARY: "Salário",
  OTHER: "Outros",
};

export const TRANSACTION_PAYMENT_METHOD_LABEL = {
  CREDIT_CARD: "Cartão de Crédito",
  DEBIT_CARD: "Cartão de Débito",
  BANK_TRANSFER: "Transferência Bancária",
  BANK_SLIP: "Boleto Bancário",
  CASH: "Dinheiro",
  PIX: "Pix",
  OTHER: "Outros",
};

export const Transactionscolumns: ColumnDef<Transactions>[] = [
  {
    accessorKey: "name",
    header: "Nome",
  },
  {
    accessorKey: "type",
    header: "Tipo",
    cell: ({ row: { original: transaction } }) => (
      <TransactionsTypeBadge transactions={transaction} />
    ),
  },
  {
    accessorKey: "categort",
    header: "Categoria",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_CATEGORY_LABEL[transaction.categort],
  },
  {
    accessorKey: "paymentMethod",
    header: "Método de Pagamento",
    cell: ({ row: { original: transaction } }) =>
      TRANSACTION_PAYMENT_METHOD_LABEL[transaction.paymentMethod],
  },
  {
    accessorKey: "date",
    header: "Data",
    cell: ({ row: { original: transaction } }) =>
      new Date(transaction.date).toLocaleDateString("PT-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
  },
  {
    accessorKey: "amount",
    header: "Valor",
    cell: ({ row: { original: transanction } }) =>
      new Intl.NumberFormat("PT-BR", {
        style: "currency",
        currency: "BRL",
      }).format(Number(transanction.amount)),
  },
  {
    accessorKey: "actions",
    header: "",
    cell: () => {
      return (
        <div className="space-x-1">
          <Button variant="ghost" className="text-muted-foreground">
            <PencilIcon />
          </Button>

          <Button variant="ghost" className="text-muted-foreground">
            <TrashIcon />
          </Button>
        </div>
      );
    },
  },
];
