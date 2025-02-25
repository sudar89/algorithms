export function hasSameDigits(s: string): boolean {
  if (s.length === 2) return s[0] === s[1];

  const zero = "0".charCodeAt(0);
  let result = "";

  for (let index = 1; index < s.length; index++) {
    const num1 = s[index - 1].charCodeAt(0) - zero;
    const num2 = s[index].charCodeAt(0) - zero;

    const c = ((num1 + num2) % 10).toString();
    result += c;
  }

  return hasSameDigits(result);
}
