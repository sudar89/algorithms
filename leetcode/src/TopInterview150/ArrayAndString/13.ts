function prevRomanToInt(s: string): number {
  const symbol: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let answer = 0;
  let prev = "";
  for (const c of s) {
    if (prev === "I" && (c === "V" || c === "X")) {
      answer += symbol[c];
      answer -= 2 * symbol.I;
    } else if (prev === "X" && (c === "L" || c === "C")) {
      answer += symbol[c];
      answer -= 2 * symbol.X;
    } else if (prev === "C" && (c === "D" || c === "M")) {
      answer += symbol[c];
      answer -= 2 * symbol.C;
    } else answer += symbol[c];

    prev = c;
  }

  return answer;
}

export function romanToInt(s: string): number {
  const symbol: Record<string, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let answer = 0;
  let prevValue = 0;
  for (const c of s) {
    const value = symbol[c];

    if (prevValue < value) {
      answer -= 2 * prevValue;
    }
    answer += value;
    prevValue = value;
  }

  return answer;
}
