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