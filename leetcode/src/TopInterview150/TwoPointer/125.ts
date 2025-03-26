export function isPalindrome(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  const makeLower = (char: string) => {
    if (char >= "A" && char <= "Z") {
      return String.fromCharCode(char.charCodeAt(0) + 32);
    } else if (char >= "a" && char <= "z") {
      return char;
    } else if (char >= "0" && char <= "9") {
      return char;
    } else {
      return "";
    }
  };

  while (left < right) {
    const l = makeLower(s[left]);
    const r = makeLower(s[right]);

    if (l === "") {
      left++;
      continue;
    }

    if (r === "") {
      right--;
      continue;
    }

    if (l !== r) {
      return false;
    }

    left++;
    right--;
  }
  return true;
}
