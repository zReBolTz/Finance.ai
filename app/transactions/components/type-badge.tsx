import { Badge } from "@/app/_components/ui/badge";
import { Transactions, TransactionsType } from "@prisma/client";
import { CircleIcon } from "lucide-react";

interface TransactionsTypeBadgeProps {
  transactions: Transactions;
}

const TransactionsTypeBadge = ({
  transactions,
}: TransactionsTypeBadgeProps) => {
  if (transactions.type == TransactionsType.DEPOSIT) {
    return (
      <Badge className="bg-muted font-bold text-primary hover:bg-muted">
        <CircleIcon className="mr-2 fill-primary" size={10}></CircleIcon>
        Depósito
      </Badge>
    );
  }
  if (transactions.type == TransactionsType.EXPENSE) {
    return (
      <Badge className="bg-danger bg-opacity-10 font-bold text-danger">
        <CircleIcon className="mr-2 fill-danger" size={10}></CircleIcon>
        Despesa
      </Badge>
    );
  } else {
    return (
      <Badge className="bg-white bg-opacity-10 font-bold text-white">
        <CircleIcon className="mr-2 fill-white" size={10}></CircleIcon>
        Investimento
      </Badge>
    );
  }
};

export default TransactionsTypeBadge;
