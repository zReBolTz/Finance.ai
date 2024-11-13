import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { Transactionscolumns } from "./columns";
import AddTransactionButton from "../_components/add-transaction-button";
import NavBar from "../_components/navBar";

const TransactionsPage = async () => {
  const transactions = await db.transactions.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <>
      <NavBar />
      <div className="space-y-6 p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton />
        </div>
        <DataTable columns={Transactionscolumns} data={transactions} />
      </div>
    </>
  );
};

export default TransactionsPage;
