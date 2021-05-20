const gigasec = 1_000_000_000;
const milisecond = 1000;

const gigaToMiliSecond = () => gigasec * milisecond;

export const gigasecond = (moment) => {
  const time = moment.getTime() + gigaToMiliSecond();
  return new Date(time);
};
