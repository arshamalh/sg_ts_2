import { NumbersCollection } from "./NumbersCollection";
import { Sorter } from "./Sorter";

const sorter = new Sorter(new NumbersCollection([10, 0, -5, 3, 7, -2]));
sorter.sort();
console.log(sorter.collection);
