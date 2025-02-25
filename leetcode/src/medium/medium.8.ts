function rounding(n: number): number {
  const INT32_MAX = Math.pow(2, 31) - 1;
  const INT32_MIN = -Math.pow(2, 31);

  if (n > INT32_MAX) {
    return INT32_MAX;
  }

  if (n < INT32_MIN) {
    return INT32_MIN;
  }
  return n;
}

function prevMyAtoi(s: string): number {
  let answer = 0;
  let sign = true;
  let started = false;

  for (const c of s) {
    switch (c) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        answer *= 10;
        answer += parseInt(c);
        started = true;
        break;
      case " ":
        if (started) {
          return rounding(sign ? answer : -answer);
        }
        break;
      case "-":
        if (started) {
          return rounding(sign ? answer : -answer);
        }
        started = true;
        sign = false;
        break;
      case "+":
        if (started) {
          return rounding(sign ? answer : -answer);
        }
        started = true;
        sign = true;
        break;
      default:
        return rounding(sign ? answer : -answer);
    }
  }
  return rounding(sign ? answer : -answer);
}

export function myAtoi(s: string): number {
  const INT32_MAX = Math.pow(2, 31) - 1;
  const INT32_MIN = -Math.pow(2, 31);

  let index = 0;
  let sign = true;
  let answer = 0;

  // remove white spaces
  while (index < s.length && s[index] === " ") index++;

  if (s[index] === "-" || s[index] === "+") {
    sign = s[index] === "+";
    index++;
  }

  while (index < s.length && s[index] >= "0" && s[index] <= "9") {
    const digit = s[index].charCodeAt(0) - "0".charCodeAt(0);

    answer = answer * 10 + digit;
    index++;
  }
  if (answer === 0) return 0;

  answer = sign ? answer : -1 * answer;
  if (answer >= INT32_MAX) return INT32_MAX;
  if (answer <= INT32_MIN) return INT32_MIN;
  return answer;
}
