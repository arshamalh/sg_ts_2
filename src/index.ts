import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";
// LinkedList

const numbers = new NumbersCollection([10, 0, -5, 3, 7, -2]);
numbers.sort();
const characters = new CharactersCollection("Xaayb");
characters.sort();
console.log(numbers);
console.log(characters);

const liked_list = new LinkedList();
liked_list.add(3);
liked_list.add(7);
liked_list.add(2);
liked_list.add(-2);

liked_list.sort();
liked_list.print();
