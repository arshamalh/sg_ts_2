import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { Sorter } from "./Sorter";

const numbers = new NumbersCollection([10, 0, -5, 3, 7, -2]);
numbers.sort();
const characters = new CharactersCollection("Xaayb");
characters.sort();
console.log(numbers);
console.log(characters);
