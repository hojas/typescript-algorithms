/**
 * Generate a random array of numbers
 * @param length
 * @param min
 * @param max
 */
export function generateRandomArray(length: number, min: number, max: number) {
  const arr = []

  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (max - min + 1)) + min)
  }

  return arr
}
