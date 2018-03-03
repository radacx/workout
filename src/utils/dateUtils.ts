export const dateUtils = Object.freeze({
  getDifference: (date1: Date, date2: Date) =>
    date1 > date2 ?
      new Date(+date1 - +date2) :
      new Date(+date2 - +date1),
});
