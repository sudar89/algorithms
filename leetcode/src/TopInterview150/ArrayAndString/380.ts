export class prevRandomizedSet {
  elements: Set<number>;

  constructor() {
    this.elements = new Set<number>();
  }

  insert(val: number): boolean {
    if (this.elements.has(val)) {
      return false;
    }

    this.elements.add(val);
    return true;
  }

  remove(val: number): boolean {
    return this.elements.delete(val);
  }

  getRandom(): number {
    const val = this.elements.values().next().value;

    return val ? val : 0;
  }
}

export class RandomizedSet {
  private list: number[];
  private map: Map<number, number>;

  constructor() {
    this.list = [];
    this.map = new Map<number, number>();
  }

  insert(val: number): boolean {
    if (this.map.has(val)) {
      return false;
    }

    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
  }

  remove(val: number): boolean {
    if (!this.map.has(val)) {
      return false;
    }

    const index = this.map.get(val)!;
    const lastElement = this.list[this.list.length - 1];

    // 마지막 요소와 삭제할 요소 위치 변경 후 pop
    this.list[index] = lastElement;
    this.map.set(lastElement, index);

    this.list.pop();
    this.map.delete(val);

    return true;
  }

  getRandom(): number {
    const randomIndex = Math.floor(Math.random() * this.list.length);
    return this.list[randomIndex];
  }
}
