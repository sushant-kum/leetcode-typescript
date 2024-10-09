/**
 * BRUTE FORCE
 * Finds two indices of elements in the given array `nums` that add up to the specified `target`.
 * @param {number[]} nums - Array of numbers to search within.
 * @param {number} target - The target sum for two numbers in the array.
 * @returns {number[]} An array containing the indices of the two numbers that add up to the target.
 *                     Returns `[-1, -1]` if no such pair exists.
 */
// function twoSum(nums: number[], target: number): number[] {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i !== j && nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }

//   return [-1, -1];
// }

/**
 * OPTIMIZED
 * Finds two indices of elements in the given array `nums` that add up to the specified `target`.
 * @param {number[]} nums - Array of numbers to search within.
 * @param {number} target - The target sum for two numbers in the array.
 * @returns {number[]} An array containing the indices of the two numbers that add up to the target.
 *                     Returns `[-1, -1]` if no such pair exists.
 */
function twoSum(nums: number[], target: number): number[] {
  const numToIndexMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    // Check for complimentary number in the array.
    if (nums[i] !== undefined && numToIndexMap.has(target - nums[i])) {
      const complimentaryIndex: number = numToIndexMap.get(target - nums[i]) ?? -1;

      // Something went wrong here, return [-1, -1].
      if (complimentaryIndex === -1) {
        return [-1, -1];
      }

      // Return result if complimentary number found.
      return [complimentaryIndex, i];
    } else {
      // Add to numToIndexMap if complimentary number not found.
      numToIndexMap.set(nums[i], i);
    }
  }

  return [-1, -1];
}

/**
 * Main function to run test cases.
 */
function main(): void {
  console.log(`🚀 ~ twoSum([2, 7, 11, 15], 9):`, twoSum([2, 7, 11, 15], 9));
  console.log(`🚀 ~ twoSum([3, 2, 4], 6):`, twoSum([3, 2, 4], 6));
  console.log(`🚀 ~ twoSum([3, 3], 6):`, twoSum([3, 3], 6));
}

main();
