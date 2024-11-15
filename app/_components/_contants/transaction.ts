import {
  TransactionsCategory,
  TransactionsPaymentMehthod,
  TransactionsType,
} from "@prisma/client";

export const TRANSACTION_PAYMENT_METHOD_ICONS = {
  [TransactionsPaymentMehthod.CREDIT_CARD]: "credit-card.svg",
  [TransactionsPaymentMehthod.DEBIT_CARD]: "debit-card.svg",
  [TransactionsPaymentMehthod.BANK_TRANSFER]: "bank-transfer.svg",
  [TransactionsPaymentMehthod.BANK_SLIP]: "bank-slip.svg",
  [TransactionsPaymentMehthod.CASH]: "money.svg",
  [TransactionsPaymentMehthod.PIX]: "pix.svg",
  [TransactionsPaymentMehthod.OTHER]: "other.svg",
};

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

export const TRANSACTION_TYPE_OPTIONS = [
  {
    value: TransactionsType.DEPOSIT,
    label: "Depósito",
  },
  {
    value: TransactionsType.EXPENSE,
    label: "Despesas",
  },
  {
    value: TransactionsType.INVESTIMENT,
    label: "Investimento",
  },
];

export const TRANSACTION_PAYMENT_METHOD_OPTIONS = [
  {
    value: TransactionsPaymentMehthod.BANK_SLIP,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMehthod.BANK_SLIP],
  },
  {
    value: TransactionsPaymentMehthod.BANK_TRANSFER,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[
        TransactionsPaymentMehthod.BANK_TRANSFER
      ],
  },
  {
    value: TransactionsPaymentMehthod.CASH,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMehthod.CASH],
  },
  {
    value: TransactionsPaymentMehthod.CREDIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMehthod.CREDIT_CARD],
  },
  {
    value: TransactionsPaymentMehthod.DEBIT_CARD,
    label:
      TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMehthod.DEBIT_CARD],
  },
  {
    value: TransactionsPaymentMehthod.PIX,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMehthod.PIX],
  },
  {
    value: TransactionsPaymentMehthod.OTHER,
    label: TRANSACTION_PAYMENT_METHOD_LABEL[TransactionsPaymentMehthod.OTHER],
  },
];

export const TRANSACTION_CATEGORY_OPTIONS = [
  {
    value: TransactionsCategory.EDUCATION,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.EDUCATION],
  },
  {
    value: TransactionsCategory.ENTERTAINMENT,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.ENTERTAINMENT],
  },
  {
    value: TransactionsCategory.FOOD,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.FOOD],
  },
  {
    value: TransactionsCategory.HEALTH,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.HEALTH],
  },
  {
    value: TransactionsCategory.HOUSING,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.HOUSING],
  },
  {
    value: TransactionsCategory.SALARY,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.SALARY],
  },
  {
    value: TransactionsCategory.TRANSPORTATION,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.TRANSPORTATION],
  },
  {
    value: TransactionsCategory.UTILITY,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.UTILITY],
  },
  {
    value: TransactionsCategory.OTHER,
    label: TRANSACTION_CATEGORY_LABEL[TransactionsCategory.OTHER],
  },
];
