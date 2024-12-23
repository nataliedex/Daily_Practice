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

// getACuteDogPhoto();

function timeCorrect(timestring) {
  if (!timestring) return null;
  const validFormat = /^\d{2}:\d{2}:\d{2}$/;
  if(!validFormat.test(timestring)) return null;
 
  let [timeHour, timeMinute, timeSecond] =  timestring.split(":").map(Number);

  if (timeHour === 0 && timeMinute === 0 && timeSecond === 0) {
    return "23:59:59";
  }

  timeMinute += Math.floor(timeSecond/60);
  timeSecond %= 60;

  timeHour += Math.floor(timeMinute/60);
  timeMinute %= 60;

  timeHour %= 24;

  return [
    timeHour.toString().padStart(2, "0"),
    timeMinute.toString().padStart(2, "0"),
    timeSecond.toString().padStart(2, "0")
  ].join(":");
}

const myTimeString = "0a:1c:22";
;
console.log(timeCorrect(myTimeString));

// function word is a palindrome

// work => string, no empty strings, no special characters, 1 word, 
// return true || false


// 

function isPalindome(word){
  return(word === word.split("").reverse().join(""))
}
const myWord = "racecar";
console.log(isPalindome(myWord));

function combineArray(nums1, nums2, m, n){
  return nums1
    .slice(0, m)
    .concat(nums2
    .slice(0, n))
    .sort((a, b) => a-b);
}

const firstArr = [1,2,3,0,0,0];
const secondArr = [2, 5, 6];
const num1 = 3;
const num2 = 3;
console.log(combineArray(firstArr, secondArr, num1, num2));

var removeElement = function(nums, val) {
  let k = 0;
  for (let i = 0; i < nums.length; i++){
      if(nums[i] !== val){
        nums[k] = nums[i];  
        k++;
      } 
  }
  return k;
};

const myNums = [3,2,2,3];
const myVal = 3;
console.log(removeElement(myNums, myVal));

// remove duplicates
// given an array - numbers only, whole numbers only, sorted from smallest to largest
// return a value with the number of unique elements in the nums array
function removeDups(arr){
  if(arr.length === 0) return 0;

  let k = 0;
  for(let i = 1; i < arr.length; i++){
    if(arr[i] !== arr[k]){
      k++;
      arr[k] = arr[i];
    }
  }
  return k + 1;
}

const myArray = [1,1,2,3,4,5,5,6,6,6,6,6];
const yourArray = [1,1,1,1,1,1];
const ourArray = [4,6,7,7,7,7,7];
console.log(removeDups(myArray), "6");
console.log(removeDups(yourArray), "1");
console.log(removeDups(ourArray), "3");

//given an array of whole numbers, array will be provided sorted from lowest to highest, 
// there can be dups.  
//evaluate the array by return the number of items in the array, k.  a number can appear at most 2 times in the array.

function removeDupsPartTwo(nums){
  let i = 0;
  for(num of nums){
    if(i < 2 || num !== nums[i-2]){
      nums[i] = num;
      i++;
    }
  }
  return i;
}

console.log(removeDups(myArray), "9");
console.log(removeDups(yourArray), "2");
console.log(removeDups(ourArray), "3");

// given an array.  the array will include whole numbers. never empty, 
// majority number means that it appears more than half the length of the given array
function majorityElement(nums){
  let count = 0;
  let candidate;
  for(let i = 0; i < nums.length; i++){
    if(count === 0){
      candidate = nums[i];
      count++;
    } else if(candidate === nums[i]){
      count++;
    } else {
      count--;
    }
  }
  return candidate;
}

const array1 = [1,1,1,1,1,2,3,4,5];
console.log(majorityElement(array1), "1");
const array2 = [2,2,1,1,1,1, 1, 1,2,2];
console.log(majorityElement(array2), "2");
const array3 = [3, 2, 3];
console.log(majorityElement(array3), "3");

//given an array of whole numbers.  never empty.  rotate by x numbers.  
//will the array always be greater than the rotation number
// return a new array

function rotateArray(nums, k){
  const rotations = k % nums.length;
  nums = nums.slice(-rotations).concat(nums.slice(0, -rotations));

  return nums;
}



const rArray1 = [1,4,5,6,9,3,6];
const k = 4;
console.log(rotateArray(rArray1, k), "[6,9,3,6,1,4,5]");
console.log(rotateArray([-1,-100,3,99], 2), "[3, 99, -1, -100]");

function maxProfit(prices){
  // let maxValue = 0;
  // for(let i = 0; i < prices.length; i++){
  //   for(let j = 0; j < prices.length; j++){
  //     if(i !== j && i < j){

  //       if(prices[j] - prices[i] > maxValue){
  //         maxValue = prices[j] - prices[i];
  //       }
  //     }
  //   }
  // }
  // return maxValue;
  let minPrice = Infinity;
  let maxProfit = 0;

  for(let i = 0; i < prices.length; i++){
    if(prices[i] < minPrice){
      minPrice = prices[i];
    }
    const profit = prices[i] - minPrice;
    if(profit > maxProfit){
      maxProfit = profit;
    }
  }
  return maxProfit;
}

const maxArray = [3,6,5,1,7,9,3,5,4];
console.log(maxProfit(maxArray));