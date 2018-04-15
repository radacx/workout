export const dateUtils = Object.freeze({
  getDifference: (date1: Date, date2: Date) =>
    date1 > date2
      ? new Date(+date1 - +date2)
      : new Date(+date2 - +date1),

  toString: (date: Date) =>
    [
      date.getDate(),
      date.getMonth() + 1,
      date.getFullYear(),
    ].join('.'),

  toStringFromNumber: (dateNum: number) =>
    dateUtils.toString(new Date(dateNum)),

  fromText: (text: string) => {
    const temp = text.split('.');

    return new Date(
      Date.UTC(
        +temp[ 2 ],
        +temp[ 1 ] - 1,
        +temp[ 0 ]),
    );
  },

  toNumber: (date: Date) => date.getTime(),

  fromTextToNumber: (text: string) =>
    dateUtils.fromText(text).getTime(),

  secondsToTimeString: (seconds: number) => {
    if (seconds < 60) {
      return `${seconds} sec`;
    }

    const minutes = Math.floor(seconds / 60) % 60;
    const leftoverSeconds = seconds % 60;

    return `${minutes}:${('0' + leftoverSeconds).slice(-2)}`;
  },
});
