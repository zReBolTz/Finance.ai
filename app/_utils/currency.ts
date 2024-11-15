export const formatCurrency = (value: number) => {
  return new Intl.NumberFormat("PT-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
};
