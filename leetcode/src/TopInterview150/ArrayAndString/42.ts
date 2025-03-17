export function prevTrap(height: number[]): number {
  let water = 0;

  for (let i = 1; i < height.length; i++) {
    const leftMax = Math.max(...height.slice(0, i + 1));
    const rightMax = Math.max(...height.slice(i));

    water += Math.max(0, Math.min(leftMax, rightMax) - height[i]);
  }
  return water;
}

export function trap(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;

  while (left < right) {
    if (height[left] < height[right]) {
      leftMax = Math.max(leftMax, height[left]);
      water += leftMax - height[left];
      left++;
    } else {
      rightMax = Math.max(rightMax, height[right]);
      water += rightMax - height[right];
      right--;
    }
  }

  return water;
}
