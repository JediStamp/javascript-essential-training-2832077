/**
 * Challenge: Create a new object type
 *
 * - Create a new object type "Book" using a class or an object constructor function.
 * - Add at least 5 book objects.
 */

import Backpack from "./Backpack.js";
import Book from "./Book.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  30,
  "grey",
  15,
  26,
  26,
  false,
  "December 5, 2018 15:00:00 PST"
);

console.log("The everydayPack object:", everydayPack);
console.log("The pocketNum value:", everydayPack.pocketNum);
console.log("Days since aquired:", everydayPack.backpackAge());

const book1 = new Book("Where's Waldo", "An author", 14, true);

const book2 = new Book("An Apple A Day", "P. Penguin", 28, false);

const book3 = new Book("Baby Banana", "Betty Banana", 12, false);

const book4 = new Book("Charlie Brown", "J.M. Schulz", 34, false);

const book5 = new Book("Odd Thomas", "Stephen King", 243, true);

console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
console.log("Book 4:", book4);
console.log("Book 5:", book5);

console.log("Book 4 is read:", book4.readStatus);
book4.setReadStatus(true);
console.log("Book 4 is read:", book4.readStatus);
