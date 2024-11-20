import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { Transactionscolumns } from "./columns";
import AddTransactionButton from "../_components/add-transaction-button";
import NavBar from "../_components/navBar";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { ScrollArea } from "../_components/ui/scroll-area";
import { canUserAddTransaction } from "../_data/can-user-transaction";

const TransactionsPage = async () => {
  const { userId } = await auth();
  if (!userId) {
    redirect("/login");
  }

  const transactions = await db.transactions.findMany({
    where: {
      userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const userCanAddTransaction = await canUserAddTransaction();
  return (
    <>
      <NavBar />
      <div className="flex flex-col space-y-6 overflow-hidden p-6">
        <div className="flex w-full items-center justify-between">
          <h1 className="text-2xl font-bold">Transações</h1>
          <AddTransactionButton userCanAddTransaction={userCanAddTransaction} />
        </div>
        <ScrollArea className="h-full">
          <DataTable
            columns={Transactionscolumns}
            data={JSON.parse(JSON.stringify(transactions))}
          />
        </ScrollArea>
      </div>
    </>
  );
};

export default TransactionsPage;
