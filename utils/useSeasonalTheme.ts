export function useSeasonalTheme(): boolean {
  const now = new Date();
  const month = now.getMonth();
  const date = now.getDate();
  return (month === 11 && date >= 1) || (month === 0 && date <= 5);
}
