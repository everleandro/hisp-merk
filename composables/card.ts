export function useCardFormatter(cardNumber: string | number) {
  const formatCard = (number: string | number) => {
    const numStr = String(number).replace(/\D/g, "").padEnd(16, "*");
    return numStr.replace(/(.{4})/g, "$1 ").trim();
  };

  return { formattedCard: formatCard(cardNumber) };
}
