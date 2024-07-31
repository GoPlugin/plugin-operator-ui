import { BigNumber } from 'bignumber.js'

export const JUELS_PER_TOKEN = 1e18

// fromJuels converts a string value in juels to PLUGIN
export const fromJuels = (val: string): string => {
  const juels = new BigNumber(val)

  return juels.dividedBy(JUELS_PER_TOKEN).toFixed(8)
}
