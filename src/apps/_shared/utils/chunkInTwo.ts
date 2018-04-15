export const chunkInTwo = <T>(items: T[]): T[][] => {
  const chunks = [];

  for (let i = 0; i < items.length;) {
    chunks.push(items.slice(i, i += 2));
  }

  return chunks;
};
