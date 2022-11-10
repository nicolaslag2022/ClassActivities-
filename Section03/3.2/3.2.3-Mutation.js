let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values

x = 0;
y = false;
z = null;
// print x, y, and z
console.log(x);
console.log(y);
console.log(z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = "Nick"
//
// using BRACKET NOTATION, assign a value to b

// using DOT NOTATION, assign a PROPERTY to c
c.age = 21;
// using DOT NOTATION, assign a METHOD to c
c.method = function(message) {console.log(message);};
// using BRACKET NOTATION, call the method in c
c['method']('hello');
// print a, b, and c
b = {};
c = [];
console.log(a);
console.log(b);
console.log(c);
