function disemvowel(str) {
    const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    return str.split("").filter((el) => !vowels.includes(el)).join("");
        


    
  }

  const myString = "help they are taking away my vowels!"
  console.log(disemvowel(myString));