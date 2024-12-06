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