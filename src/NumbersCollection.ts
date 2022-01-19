import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }

  // Like parameter
  get length() {
    return this.data.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  swap(leftIndex: number, rightIndex: number): void {
    let temp = this.data[leftIndex];
    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = temp;
  }
}
