"use client";

import { Transactions } from "@prisma/client";
import { ColumnDef } from "@tanstack/react-table";
import TransactionsTypeBadge from "../components/type-badge";
import {
  TRANSACTION_CATEGORY_LABEL,
  TRANSACTION_PAYMENT_METHOD_LABEL,
} from "@/app/_components/_contants/transaction";
import EditTransactionButton from "../components/edit-transaction-button";
import DeleteTransactionButtton from "../components/delete-transaction-button";

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
    cell: ({ row: { original: Transactions } }) => {
      return (
        <div className="space-x-1">
          <EditTransactionButton Transactions={Transactions} />
          <DeleteTransactionButtton transactionId={Transactions.id} />
        </div>
      );
    },
  },
];
