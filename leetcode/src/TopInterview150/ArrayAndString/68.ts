export function fullJustify(words: string[], maxWidth: number): string[] {
  const answer: string[] = [];
  let line: string[] = [];
  let width = 0;

  for (const word of words) {
    if (width + word.length + line.length > maxWidth) {
      const totalSpaces = maxWidth - width;
      const gaps = line.length - 1;

      if (gaps === 0) {
        answer.push(line[0] + " ".repeat(totalSpaces));
      } else {
        const space = Math.floor(totalSpaces / gaps);
        const extra = totalSpaces % gaps;
        let row = "";
        for (let i = 0; i < line.length; i++) {
          row += line[i];
          if (i < gaps) {
            row += " ".repeat(space + (i < extra ? 1 : 0));
          }
        }
        answer.push(row);
      }

      line = [];
      width = 0;
    }

    line.push(word);
    width += word.length;
  }

  // 마지막 줄은 왼쪽 정렬
  const lastLine = line.join(" ");
  answer.push(lastLine + " ".repeat(maxWidth - lastLine.length));

  return answer;
}
