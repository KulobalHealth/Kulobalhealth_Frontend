export type StatusColor =
  | "green"
  | "blue"
  | "yellow"
  | "red"
  | "success"
  | "primary";

export const getStatusBadgeClass = (color: string | undefined): string => {
  switch (color) {
    case "green":
      return "bg-success-50 text-success-700 hover:bg-success-50 border-success-200";
    case "blue":
      return "bg-primary-50 text-primary-700 hover:bg-primary-50 border-primary-200";
    case "yellow":
      return "bg-warning-50 text-warning-700 hover:bg-warning-50 border-warning-200";
    case "red":
      return "bg-red-50 text-red-700 hover:bg-red-50 border-red-200";
    case "success":
      return "bg-success-100 text-success-700";
    case "primary":
      return "bg-primary-100 text-primary-700";
    default:
      return "bg-neutral-100 text-neutral-700 hover:bg-neutral-100 border-neutral-300";
  }
};

export const getOrderStatusDisplayName = (status: string): string => {
  switch (status) {
    case "PENDING":
      return "New Order";
    case "PROCESSING":
      return "In Transit";
    case "COMPLETED":
      return "Delivered";
    case "CANCELLED":
      return "Cancelled";
    default:
      return "Select Status";
  }
};

export const getPaymentTypeDisplayName = (paymentType: string): string => {
  switch (paymentType) {
    case "PAYMENT_ON_ONLINE":
      return "Online Payment";
    case "PAYMENT_ON_DELIVERY":
      return "Payment on Delivery";
    default:
      return paymentType;
  }
};

export const getPerformanceBadgeClass = (color: string): string => {
  switch (color) {
    case "success":
      return "bg-success-100 text-success-700";
    case "primary":
      return "bg-primary-100 text-primary-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
};

export const getPerformanceValue = (performance: string): number => {
  switch (performance) {
    case "Excellent":
      return 90;
    case "Best":
      return 85;
    case "Good":
      return 70;
    case "Poor":
      return 40;
    default:
      return 0;
  }
};
