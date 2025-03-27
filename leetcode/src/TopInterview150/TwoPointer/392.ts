export function isSubsequence(s: string, t: string): boolean {
  if (s.length === 0) {
    return true;
  }

  for (let i = 0, j = 0; i < t.length && j < s.length; i++) {
    if (t[i] === s[j]) {
      j++;
    }
    if (j === s.length) {
      return true;
    }
  }
  return false;
}
