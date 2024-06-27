
/**
 * Apply the Fisher–Yates shuffle algorithm to the given array using a PRNG.
 * The array is shuffled in place.
 * @param array Array to be shuffled
 * @param prng PRNG function to be used (uses Math.random by default)
 * @returns Shuffled array
 */
export const shuffleArray = <E>(
  array: E[],
  prng: () => number = Math.random
): E[] => {
  let m = array.length
  let t
  let i
  while (m > 0) {
    i = Math.floor(prng() * m--)
    t = array[m]
    array[m] = array[i]
    array[i] = t
  }
  return array
}
