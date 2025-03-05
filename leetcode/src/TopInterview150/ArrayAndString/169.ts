function prevMajorityElement(nums: number[]): number {
  const counts: Record<number, number> = {};

  for (const n of nums) {
    counts[n] = (counts[n] || 0) + 1;
  }
  console.log(counts);

  return Object.keys(counts)
    .map(Number)
    .reduce((a, b) => (counts[a] > counts[b] ? a : b));
}

// Boyer Moore Voting Algorithm
export function majorityElement(nums: number[]): number {
  let candidate = 0;
  let count = 0;

  for (const n of nums) {
    if (count === 0) {
      candidate = n;
    }

    count += n === candidate ? 1 : -1;
  }

  return candidate;
}
