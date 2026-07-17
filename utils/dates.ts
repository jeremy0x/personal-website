export function isSeasonalWindow(now: Date = new Date()): boolean {
  const month = now.getMonth();
  const date = now.getDate();
  return (month === 11 && date >= 1) || (month === 0 && date <= 5);
}

