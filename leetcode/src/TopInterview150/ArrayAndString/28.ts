export function strStr(haystack: string, needle: string): number {
  const len = needle.length;

  for (let i = 0; i <= haystack.length - len; i++) {
    if (haystack.slice(i, i + len) === needle) {
      return i;
    }
  }

  return -1;
}
