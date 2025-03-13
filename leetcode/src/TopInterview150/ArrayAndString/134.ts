function prevCanCompleteCircuit(gas: number[], cost: number[]): number {
  let total = 0;
  const len = gas.length;

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      const current = (i + j) % len;
      total += gas[current] - cost[current];
      if (total < 0) {
        total = -1;
        break;
      }
    }
    if (total >= 0) {
      return i;
    }
  }

  return -1;
}

export function canCompleteCircuit(gas: number[], cost: number[]): number {
  let totalGas = 0;
  let totalCost = 0;
  let startIndex = 0;
  let currentGas = 0;

  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];
    currentGas += gas[i] - cost[i];

    // 현재 가스량이 음수가 되면, 이 출발점에서는 불가능!
    if (currentGas < 0) {
      startIndex = i + 1; // 다음 주유소에서 다시 시작
      currentGas = 0; // 새로운 출발점이므로 가스 초기화
    }
  }

  return totalGas >= totalCost ? startIndex : -1;
}
