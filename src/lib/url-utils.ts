export const updateURLParams = (
  router: any,
  searchParams: URLSearchParams,
  params: Record<string, string | number>
): void => {
  const newSearchParams = new URLSearchParams(searchParams.toString());

  for (const [key, value] of Object.entries(params)) {
    if (value) {
      newSearchParams.set(key, value.toString());
    } else {
      newSearchParams.delete(key);
    }
  }

  router.push(`?${newSearchParams.toString()}`);
};

export const createURLUpdateHandler = (
  router: any,
  searchParams: URLSearchParams
) => {
  return (params: Record<string, string | number>) =>
    updateURLParams(router, searchParams, params);
};
