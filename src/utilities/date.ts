export const getTimeCount = (date: Date) => {
  const interval = new Date().getTime() - date.getTime();
  const years = Math.floor(interval / (365 * 24 * 60 * 60 * 1000));
  const days = Math.floor(
    (interval % (365 * 24 * 60 * 60 * 1000)) / (24 * 60 * 60 * 1000)
  );
  const hours = Math.floor(
    (interval % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000)
  );
  const minutes = Math.floor((interval % (60 * 60 * 1000)) / (60 * 1000));
  const seconds = Math.floor((interval % (60 * 1000)) / 1000);

  const parseNumber = (time: number) => {
    let parsedTime = time.toString();
    return parsedTime.length > 1 ? parsedTime : "0" + parsedTime;
  };

  return {
    years: parseNumber(years),
    days: parseNumber(days),
    hours: parseNumber(hours),
    minutes: parseNumber(minutes),
    seconds: parseNumber(seconds),
  };
};
