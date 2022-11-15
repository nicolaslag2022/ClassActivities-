// TODO: using the function expressions below, refactor them into function declarations
const greet = function() {
  console.log("Hello!");
};

function greet() {
  console.log("Hello!");
}

const threeModTwo = function() {
  console.log(3 % 2);
};

function threeModTwo() {
  console.log(3 % 2);
}

let age = 18;
const checkDrivingAge = function() {
  if (age >= 16) {
    console.log(true);
  } else {
    console.log(false);
  }
};

function checkDrivingAge() {
  if (age >= 16)
  console.log(true);
} else {
  console.log(false);
};

function helloWorld(){
  console.log("hello world!")

helloWorld();

function weatherGreeting() {
  let outfit;
  if (weather==("hot and sunny") {
    outfit = "light and cool";
  }
}

let weather = "hot and sunny";
let greeting;

function weatherGreeting() {
  let outfit;
  if (weather == "hot and sunny") {
    outfit = "light and cool";
  }
}


function weatherWithParams(weather) {
  let outfit;
  if (weather == "hot and sunny") {
    outfit = "light and cool";
  }
  if (weather == "cold") {
      outfit = "warm";
  }
  if (weather == "rainy") {
      outfit = "wet resistant";
  }
}

greeting = 'Today it is ${weather}. You should probably wear a ${outfit} outfit.';
return greeting;
}

console.log(weatherWithParams("cold"));

//Rest parameters

let nums;
function printParams(...params) {
  for (let taco of params) {
    console.log(taco);
  }
  nums = params;
  return params;
}
printParams("First", "second", "third", "apple");

// Using Returned Value as Paramt

function printOtherFunctionReturn (otherFunction) {
  console.log("This is the param:", otherFunction);
}
printOtherFunctionReturn(28);

//call back function

printOtherFunctionReturn(printParams(1,2,3));

const sumNums = (...nums) => {
  let sum = 0;
  for(let num of nums) {
    sum += num;
  }
  return sum;
};

console.log(sumNums(1, 2, 3, 4, 5, 6, 7,8,));

//arrow syntax

