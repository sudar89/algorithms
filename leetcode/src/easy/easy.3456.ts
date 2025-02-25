export function hasSpecialSubstring(s: string, k: number): boolean {
  for (let index = 0; index < s.length - k + 1; index++) {
    const sub = s.substring(index, index + k);

    let pass = false;
    for (const c of sub) {
      if (c !== sub[0]) {
        pass = true;
        break;
      }
    }

    if (pass) continue;

    if (index > 0 && sub[0] === s[index - 1]) continue;
    if (index < s.length - k && sub[0] === s[index + k]) continue;

    return true;
  }

  return false;
}
