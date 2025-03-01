
function boolToWord( bool ){
    return bool ? "Yes" : "No";
  }

const value = true;
console.log(boolToWord(value), "Yes");

function removeSmallest(numbers) {
    if (numbers.length === 0) return [];

    let minValue = Math.min(...numbers);
    let location = numbers.findIndex(num => num === minValue);

    return numbers.slice(0, location).concat(numbers.slice(location + 1));
  }

const myArray1 = [1,2,3,4,5];
const myArray2 = [5,3,2,1,4];

console.log(removeSmallest(myArray1), "[2,3,4,5]");
console.log(removeSmallest(myArray2), "[5,3,2,4]");

function bouncingBall(h,  b,  w) {
    if(h <= 0 || (b <= 0 || b >= 1) || w >= h ){
        return -1;
    }
    let views = 1;
    h *= b;

    while(h > w) {
        views += 2;
        h *= b;
    }
    return views;
  }

const myHeight = 3;
const myBounce = 0.66;
const myWindow = 1.5;

console.log(bouncingBall(myHeight, myBounce, myWindow), "3");

function booleanToString(b){
  if(b === true){
    return "true";
  } else {
    return "false";
  }
}

const myBoolean = 2===3;
console.log(booleanToString(myBoolean), "false");

function solution(string) {
  if(string === ""){
    return "";
  }
  return string.replace(/([A-Z])/g, ' $1');
}

const myString = "camelCasing";
const myOtherString = "myOtherString";

console.log(solution(myString), "camel Casing");

console.log(solution(myOtherString), "my Other String");

function solution(string) {
  if(string === ""){
    return "";
  }
  return string.replace(/([A-Z])/g, ' $1');
}

function reverseWords(str) {
  return str.split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");

}

const thisString = "This is an example!";
console.log(reverseWords(thisString), "sihT si na !elpmaxe");


function makeNegative(num) {
  return num < 0 ? num : num * -1;
}

const thisNum = -5;
const otherNum = 10;

console.log(makeNegative(thisNum), "-5");
console.log(makeNegative(otherNum), "-10");


var uniqueInOrder=function(iterable){
  if(typeof iterable === "string"){
    const newIterable = iterable.split("");
  }
    const newIterable = iterable;
    if(newIterable.length === 0){
      return [];
    }

  let result = [newIterable[0]];

  for(let i = 1; i < newIterable.length; i++){
    if(newIterable[i] !== newIterable[(i-1)]){
      result.push(newIterable[i]);
    }
  }
  return result;
}

const thisIterable = [1,2,2,3,3];
console.log(uniqueInOrder(thisIterable), "[1,2,3]" );

function getGrade (s1, s2, s3) {
  const grade = ((s1 + s2 + s3) / 3.0);
  if(grade >= 90){
    return 'A';
  } else if(grade >=80){
    return 'B';
  } else if(grade >=70){
    return 'C';
  } else if(grade >=60){
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(90, 90, 93), "A");

function updateLight(current) {
  return (current === "green" ? "yellow" : current === "yellow" ? "red" : "green");
}

console.log(updateLight("green"), "yellow");

function longest(s1, s2) {
  let newString = (s1 + s2).split("").sort();
  let finalString = [];

  for(let char of newString){
    if(!finalString.includes(char)){
      finalString.push(char);
    }
  }
    return finalString.join("");
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"), "abcdefklmopqwxy");

function doubleChar(str) {
  let longString = [];
  str.split("").forEach(char => {
    longString.push(char + char);
  });

  return longString.join("");
}

console.log(doubleChar("String"), "SSttrriinngg");

function simpleMultiplication(number) {
  return number % 2 === 0 ? number * 8 : number * 9;
}

console.log(simpleMultiplication(8), "64");

function enough(cap, on, wait) {
  return cap - on - wait < 0 ? (cap - on - wait) * -1 : 0;
}

console.log(enough(100,60, 50), "10");

function switchItUp(number){
  const values = {0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four", 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"};
  return values[number];
  }

console.log(switchItUp(9), "nine");

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(25), "true");

function checkForFactor (base, factor) {
  return base % factor === 0 ? true : false;
}

console.log(checkForFactor(10, 2), "true");

function setAlarm(employed, vacation){
  return vacation || !(employed) ? false : true;
}

console.log(setAlarm(true, false), "true");

function century(year) {

  return (year % 100 === 0 ? year / 100 : Math.ceil(year / 100));
}

console.log(century(1705), "18");