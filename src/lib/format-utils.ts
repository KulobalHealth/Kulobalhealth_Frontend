export const formatCurrency = (amount: number): string => {
  return `GHS ${amount.toFixed(2)}`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    weekday: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export const formatOrderId = (orderId: string): string => {
  return `#${orderId.slice(-8)}`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

export const removeLeadingZeros = (value: string): string => {
  return value.replace(/^0+/, "") || "0";
};
