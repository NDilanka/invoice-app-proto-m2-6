export type Line = { amount: number };

/** ISO 4217 minor units (decimal places) for currencies that don't use 2 decimals. */
const MINOR_UNITS: Record<string, number> = {
  // 0 decimal places
  BYN: 0,
  CLP: 0,
  COP: 0,
  DJF: 0,
  GNF: 0,
  ISK: 0,
  JPY: 0,
  KMF: 0,
  KRW: 0,
  MGA: 0,
  PYG: 0,
  RWF: 0,
  UGX: 0,
  VND: 0,
  VUV: 0,
  XAF: 0,
  XOF: 0,
  XPF: 0,
  // 3 decimal places
  BHD: 3,
  IQD: 3,
  JOD: 3,
  KWD: 3,
  LYD: 3,
  MRO: 3,
  MRU: 3,
  OMR: 3,
  TND: 3,
  // 4 decimal places (rare)
  CLF: 4,
  UYI: 4,
};

function getMinorUnits(currency: string): number {
  return MINOR_UNITS[currency] ?? 2;
}

export function formatTotal(lines: Line[], currency: string): string {
  const sum = lines.reduce((total, line) => total + line.amount, 0);
  const decimals = getMinorUnits(currency);
  return sum.toFixed(decimals);
}
