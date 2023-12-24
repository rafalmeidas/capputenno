export const formatPrice = (centsValue: number) => {
  const realValue = centsValue / 100;

  return realValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
};
