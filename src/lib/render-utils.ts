interface RenderState {
  showLoading: boolean;
  showError: boolean;
  showEmpty: boolean;
  showOrders: boolean;
  emptyStateType: "empty" | "no-results";
}

export const determineRenderState = (
  isLoading: boolean,
  error: any,
  hasOrders: boolean,
  searchTerm: string,
  statusFilter: string,
  dateFilter: string
): RenderState => {
  const showLoading = isLoading;
  const showError = error && !isLoading;
  const hasFiltersApplied =
    searchTerm || statusFilter !== "All" || dateFilter !== "All";
  const showEmpty = !(isLoading || error || hasOrders);
  const showOrders = !(isLoading || error) && hasOrders;
  const emptyStateType = hasFiltersApplied ? "no-results" : "empty";

  return {
    showLoading,
    showError,
    showEmpty,
    showOrders,
    emptyStateType,
  };
};
