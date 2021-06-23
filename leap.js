// this solution ahs not been approved by an exorcism mentor

export const isLeap = year => {
  return (
    year % 4 === 0 
    && (year % 400 === 0 
        || year % 100 !== 0)
  );
};
