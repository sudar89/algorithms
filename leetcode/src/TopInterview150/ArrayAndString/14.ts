export function longestCommonPrefix(strs: string[]): string {
  const lens = strs.map((str) => str.length);
  const len = lens.reduce((acc, cur) => Math.min(acc, cur), Infinity);

  for (let i = 0; i <= len; i++) {
    if (i === len) {
      return strs[0].slice(0, i);
    }

    const char = strs[0][i];
    for (let j = 1; j < strs.length; j++) {
      if (strs[j][i] !== char) {
        return strs[0].slice(0, i);
      }
    }
  }

  return "";
}
