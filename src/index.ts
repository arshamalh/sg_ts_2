import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

const sorter = new Sorter(new NumbersCollection([10, 0, -5, 3, 7, -2]));
sorter.sort();
const sorter2 = new Sorter(new CharactersCollection("Xaayb"));
sorter2.sort();
console.log(sorter.collection);
console.log(sorter2.collection);
