import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
  constructor(public data: string) {}

  get length(): number {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    );
  }

  swap(leftIndex: number, rightIndex: number): void {
    const chars = this.data.split("");
    const temp = chars[leftIndex];
    chars[leftIndex] = chars[rightIndex];
    chars[rightIndex] = temp;
    this.data = chars.join("");
  }
}
