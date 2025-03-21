export function lengthOfLastWord(s: string): number {
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      let j = i;
      while (j >= 0 && s[j] !== " ") {
        j--;
      }
      return i - j;
    }
  }
  return 0;
}
