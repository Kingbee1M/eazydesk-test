export const getTicketDate = (timestamp: string) => {
  // Splits '2026-05-03 10:22' into ['2026-05-03', '10:22']
  return timestamp.split(' ')[0]; 
};

export const getTicketTime = (timestamp: string) => {
  return timestamp.split(' ')[1];
};

export const formatShortDate = (dateString: string): string => {
  if (!dateString) return "N/A";

  const date = new Date(dateString);

  // Check if the date is valid to prevent "Invalid Date" showing in UI
  if (isNaN(date.getTime())) return dateString;

  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
};