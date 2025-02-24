export function lengthOfLastWord(s: string): number {
  // before: Used trimEnd() and split(), which creates an extra array (O(n) space)
  // const list = s.trimEnd().split(" ");
  // const lastWord = list[list.length - 1];
  //
  // return lastWord.length;
  //
  // after: Optimized approach with O(1) space complexity
  let i = s.length - 1;

  // Remove trailing spaces(avoids using trimEnd())
  while (i >= 0 && s[i] === " ") {
    i--;
  }

  // Count the length of the last word
  // This avoids creating an extra array(O(n) -> O(1) space)
  let count = 0;
  while (i >= 0 && s[i] !== " ") {
    i--;
    count++;
  }

  return count;
}
