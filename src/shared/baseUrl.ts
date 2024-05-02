export const baseUrl: any = "http://localhost:5000";
// export const baseUrl: any = "https://2f44-41-76-198-41.ngrok-free.app";

export const buildDynamicURL = (
  id: any,
  fromDate: any,
  endDate: any,
  limit: any,
  page: any,
  base: any,
  ticketType: any,
  ticketId: any,
  status: any
) => {
  let baseURL = `${base}`;
  const queryParams = [];

  // Add 'status' to the query parameters if it's not null or undefined
  if (status !== null && status !== undefined) {
    queryParams.push(`status=${status}`);
  }
  // Add 'id' to the query parameters if it's not null or undefined
  if (id !== null && id !== undefined) {
    queryParams.push(`id=${id}`);
  }

  // Add 'ticketId' to the query parameters if it's not null or undefined
  if (ticketId !== null && ticketId !== undefined && !Array.isArray(ticketId)) {
    queryParams.push(`ticketId=${ticketId}`);
  }

  // Add 'fromDate' to the query parameters if it's not null or undefined
  if (
    ticketType !== null &&
    ticketType !== undefined &&
    !Array.isArray(ticketType)
  ) {
    queryParams.push(`ticketType=${ticketType}`);
  }
  // Add 'fromDate' to the query parameters if it's not null or undefined
  if (fromDate !== null && fromDate !== undefined && !Array.isArray(fromDate)) {
    queryParams.push(`fromDate=${fromDate}`);
  }

  // Add 'endDate' to the query parameters if it's not null or undefined
  if (endDate !== null && endDate !== undefined && !Array.isArray(endDate)) {
    queryParams.push(`endDate=${endDate}`);
  }

  // Add 'limit' to the query parameters if it's not null or undefined
  if (limit !== null && limit !== undefined) {
    queryParams.push(`limit=${limit}`);
  }

  // Add 'page' to the query parameters if it's not null or undefined
  if (page !== null && page !== undefined) {
    queryParams.push(`page=${page}`);
  }

  // Combine the base URL and query parameters
  if (queryParams.length > 0) {
    baseURL += "?" + queryParams.join("&");
  }

  return baseURL;
};
