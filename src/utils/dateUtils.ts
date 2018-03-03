export const dateUtils = Object.freeze({
  getDifference: (date1: Date, date2: Date) =>
    date1 > date2 ?
      new Date(+date1 - +date2) :
      new Date(+date2 - +date1),

  toString: (date: Date) =>
    [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ].join('.'),

  fromText: (text: string) => {
    const temp = text.split('.');

    return new Date(Date.UTC(+temp[2], +temp[1] - 1, +temp[0]));
  }
});
