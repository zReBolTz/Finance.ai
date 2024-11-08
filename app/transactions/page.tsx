import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "../_components/ui/button";
import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { Transactionscolumns } from "./columns";

const TransactionsPage = async () => {
  const transactions = await db.transactions.findMany({});
  return (
    <div className="space-y-6 p-6">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Transações</h1>
        <Button className="rounded-full">
          Acionar transação
          <ArrowDownUpIcon />
        </Button>
      </div>
      <DataTable columns={Transactionscolumns} data={transactions} />
    </div>
  );
};

export default TransactionsPage;
