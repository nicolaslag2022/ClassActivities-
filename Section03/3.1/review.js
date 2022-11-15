const names = ["Tracy", "Jenna", "Kenneth", "Liz", "Jack"];
for (let name of names) {
  console.log(name);
}

const arr = [
  "dog",
  "cat",
  true,
  ["This is an array inside of an array", 5, true],
  { object: "I am a value to a key named object" },
  "just kidding, i'm last"
];
console.log("This is the first iteration", arr[1]);
console.log("This is the 4th iteration,", arr[3]);
console.log(arr[4].length);

for (let item of arr) {
  console.log(item);
}
let lastItem = arr.length - 1;
console.log("this is the last item:", arr[lastItem]);

const books = {
  title: "The last Iteration",
  author: "unknown",
  year: 2022,
  genre: ["comedy", "drama", "romance"],
  award: {
    awardName: "Amazing book",
    nominated: "2022",
    worthless: true,
  },

  promote: function() {
    return `${this.title'} is a book written by ${this.author} in ${this.year}. It has won an award called ${this.award.awardName}
    called ${this.award.name} in ${this.award.won} and it is ${this.award.worthless} that is worthless`;
  }
};

console.log(books.promote());
