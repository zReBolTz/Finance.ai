"use client";

import { Button } from "@/app/_components/ui/button";
import UpsertTransactionDialog from "@/app/_components/upsert-transaction-dialog";
import { Transactions } from "@prisma/client";
import { PencilIcon } from "lucide-react";
import { useState } from "react";

interface EditTransactionButtonProps {
  Transactions: Transactions;
}

const EditTransactionButton = ({
  Transactions,
}: EditTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="text-muted-foreground"
        onClick={() => setDialogIsOpen(true)}
      >
        <PencilIcon />
      </Button>
      <UpsertTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
        defaultValues={{
          ...Transactions,
          amount: Number(Transactions.amount),
        }}
        transactionId={Transactions.id}
      />
    </>
  );
};

export default EditTransactionButton;
