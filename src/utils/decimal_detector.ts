export  function decimalDetector(
  value: string,
  maximumDecimalPlaces?: number
): number {
  let cost = value.replaceAll(',', '');
  const newCost = cost.split('.');
  const integerPart = newCost[0];
  const decimalPart = newCost[1];
  if (!decimalPart) {
    cost.replace('.', '');
  } else {
    const truncatedDecimalPart = decimalPart.slice(
      0,
      maximumDecimalPlaces || 2
    );
    const formattedDecimalPart = truncatedDecimalPart.padEnd(0, '0');
    cost = `${integerPart}.${formattedDecimalPart}`;
  }
  return +cost;
}
