// Capitalize first letter
export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);

// Format recurrence summary
export const getSummary = (type, interval, days) => {
  switch (type) {
    case 'daily':
      return `Repeats every ${interval} day(s)`;
    case 'weekly':
      return `Repeats every ${interval} week(s) on ${days.map(capitalize).join(', ')}`;
    case 'yearly':
      return `Repeats every ${interval} year(s)`;
    default:
      return '';
  }
};
