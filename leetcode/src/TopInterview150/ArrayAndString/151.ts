function prevReverseWords(s: string): string {
  let word = "";
  let answer = "";

  for (const c of s) {
    if (c === " ") {
      if (word.length > 0) {
        answer = answer.length === 0 ? word : word + " " + answer;
        word = "";
      }
    } else {
      word += c;
    }
    console.log(answer, word);
  }
  if (word.length > 0) {
    answer = word + " " + answer;
  }
  return answer;
}

export function reverseWords(s: string): string {
  const words: string[] = [];
  let word = "";

  for (const c of s) {
    if (c === " ") {
      if (word.length > 0) {
        words.unshift(word); // 앞에 삽입 (배열 활용)
        word = "";
      }
    } else {
      word += c;
    }
  }

  if (word.length > 0) {
    words.unshift(word);
  }

  return words.join(" ");
}
