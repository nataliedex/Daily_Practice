const button = document.querySelector("button");
const bookList = document.getElementById("book-list");
const storedBooks = localStorage.getItem("books");

if(storedBooks) {
    const bookArray = storedBooks.split(":");
    bookArray.forEach(book => {
        const li = document.createElement("li");
        li.textContent = book;
        bookList.appendChild(li);
    })
}

button.addEventListener("click", getFetch);


function getFetch(){
    const choice = document.querySelector("input").value;
    const url = `http://openlibrary.org/isbn/${choice}.json`;

    fetch(url)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        let books = localStorage.getItem("books") || "";
        books = books ? books + ":" + data.title: data.title;
        localStorage.setItem("books", books);

        const li = document.createElement("li");
        li.textContent = data.title;
        bookList.appendChild(li);
        })
        
    .catch(err => {
        console.log(`error: ${err}`);
    })
}

// TODO: define the Dog class here
class Dog {
    constructor(name, species, size){
        this.name = name;
        this.species = species;
        this.size = size;
    }
    bark(){
        if(this.size > 60){
            return "Grr! Grr!";
        } else {
            return "Woof! Woof!";
        }
    }
    
}
const fang = new Dog("Fang", "boarhound", 75);
console.log(`${fang.name} is a ${fang.species} dog measuring ${fang.size}`);
console.log(`Look, a cat! ${fang.name} barks: ${fang.bark()}`);

const snowy = new Dog("Snowy", "terrier", 22);
console.log(`${snowy.name} is a ${snowy.species} dog measuring ${snowy.size}`);
console.log(`Look, a cat! ${snowy.name} barks: ${snowy.bark()}`);







let x = {value :10};
let y = x;

x.value = 20;
console.log(x);
console.log(y);

function alphabetPosition(text) {
    let numArr = [];
    const newText = text.toUpperCase().split("");
    console.log(newText);
    newText.forEach(letter => {
        if(letter !== " " && (letter.charCodeAt()-64) > 0 && (letter.charCodeAt()-64) < 27){
            numArr.push(letter.charCodeAt()-64);
        }  
    });
    text = numArr.join(" ").toString();
    return text;
  }

const mySentence = "Hell o ";
alphabetPosition(mySentence);

decodeMorse = function(morseCode){
    const ref = {
        '.-': 'A', '-...': 'B', '-.-.': 'C', '-..': 'D', '.': 'E',
        '..-.': 'F', '--.': 'G', '....': 'H', '..': 'I', '.---': 'J',
        '-.-': 'K', '.-..': 'L', '--': 'M', '-.': 'N', '---': 'O',
        '.--.': 'P', '--.-': 'Q', '.-.': 'R', '...': 'S', '-': 'T',
        '..-': 'U', '...-': 'V', '.--': 'W', '-..-': 'X', '-.--': 'Y',
        '--..': 'Z',
        '-----': '0', '.----': '1', '..---': '2', '...--': '3', '....-': '4',
        '.....': '5', '-....': '6', '--...': '7', '---..': '8', '----.': '9',
        '/': ' ',
      };
      return morseCode
      .trim()
      .split(" ")
      .map(word => 
        word
            .split(" ")
            .map(symbol => ref[symbol])
            .join("")
      )
      .join(" ");
    }
      

  console.log(decodeMorse(".... . -.--   .--- ..- -.. ."));
