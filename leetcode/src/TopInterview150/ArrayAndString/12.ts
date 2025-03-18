export function intToRoman(num: number): string {
  // 1️⃣ 큰 값부터 매칭할 수 있도록 배열을 생성
  const romanMap: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
  ];

  let result = "";

  // 2️⃣ 큰 값부터 순회하면서 숫자를 변환
  for (const [value, symbol] of romanMap) {
    while (num >= value) {
      result += symbol; // 3️⃣ 해당 로마 숫자를 추가
      num -= value; // 4️⃣ 숫자를 감소
    }
  }

  return result;
}
