function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    return str.split("").filter((el) => !vowels.includes(el)).join("");    
  }

  const myString = "help they are taking away my vowels!"
  console.log(disemvowel(myString));

function greet(name){
  //your code here "Hello, <name> how are you doing today?".
  return `Hello, ${name} how are you doing today?`;
} 

const myName = "Natalie";
console.log(greet(myName));

function persistence(num) {
  let tries = 0;

  while (num.toString().length > 1){
    num = num
    .toString()
    .split("")
    .reduce((acc, cur) => acc * cur, 1);
    tries++;
  }
  return tries;
}

const myNum = 49;
console.log(persistence(myNum));

function abbrevName(name){
  return `${name.split(" ")[0][0].toUpperCase()}.${name.split(" ")[1][0].toUpperCase()}`;
}

const myFullName = "Natalie Blumen";
console.log(abbrevName(myFullName));

function areYouPlayingBanjo(name) {
  if(name.split("")[0].toLowerCase() === "r"){
    return `${name} plays banjo`;
  } else {
    return `${name} does not play banjo`;
  }
}
const otherName = "Ringo"
console.log(areYouPlayingBanjo(otherName));

function findNeedle(haystack) {
  const location = haystack.findIndex((str) => str === "needle");
  return `found the needle at position ${location}`;
}

const needlestickArray = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];
console.log(findNeedle(needlestickArray));

function fakeBin(x){
  return x
    .split("")
    .map(el => (el < 5 ? "0" : "1"))
    .join("");
}
const binString = "23453297056948574729";
console.log(fakeBin(binString));

function invert(array) {
  return array.map(el => el * -1);
}
const strNumbers = [1, 2, 3, 4, 5];
console.log(invert(strNumbers)); 

function solution(str, ending){
  if(ending === ""){
    return true;
  } else {
    if((str.split("").splice(-ending.length).join("")) === ending.split("").join("")){
      return true;
    } else {
      return false;
    }
  }
}

const solStr = "abc";
const solEnding = "bc";
console.log(solution(solStr, solEnding));

async function getACuteDogPhoto(){
  try {
    const res = await fetch("https://dog.ceo/api/breeds/image/random");
    const data = await res.json();
    console.log(data);
    document.querySelector("img").src = data.message;
  } catch (err) {
    console.log(err);
  }
  
}

getACuteDogPhoto()