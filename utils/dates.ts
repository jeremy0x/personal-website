export function isSeasonalWindow(now: Date = new Date()): boolean {
  const month = now.getMonth();
  const date = now.getDate();
  return (month === 11 && date >= 1) || (month === 0 && date <= 5);
}

export function isBirthdayWindow(now: Date = new Date()): boolean {
  return now.getMonth() === 0 && now.getDate() === 15;
}
