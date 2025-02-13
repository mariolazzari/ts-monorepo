export function calculateElevation(feet: number): number {
  const meters: number = feet * 0.3048;

  return Math.round(meters);
}
