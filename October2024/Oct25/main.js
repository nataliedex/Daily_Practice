const selectorButton = document.getElementById("selector");
const answerButton = document.getElementById("answer");
const jokeSetup = document.getElementById("joke");
const jokePunchline = document.getElementById("punchline");

selectorButton.addEventListener("click", getJoke);

function getJoke(){
    jokePunchline.textContent = "";
    fetch("https://official-joke-api.appspot.com/random_joke")
    .then(res => res.json())
    .then(data => {
        const joke = data.setup;
        const punchline = data.punchline;

        jokeSetup.textContent = joke;

        answerButton.addEventListener("click", () => {
            jokePunchline.textContent = punchline;
        });
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })
}
const catFact = document.getElementById("cat-facts");
const catFactButton = document.getElementById("cat-fact-button");

catFactButton.addEventListener("click", getCatFact);


function getCatFact() {
    fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        catFact.textContent = data.fact;
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })
}

const dogButton = document.getElementById("dog-button");
const dogBreed = document.getElementById("dog-breed");

dogButton.addEventListener("click", getDogImage);

function getDogImage(){
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
        const image = data.message;
        const breed = image.split("/")[4];
        document.querySelector("img").src = image;
        dogBreed.textContent = breed;
        console.log(data);
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })
}

// CODE WARS
// vowel counts


function getCount(str){
    const vowels = ["a", "e", "i", "o", "u"];
    let vowelCount = 0;
    str.split("").forEach(char => {
        if(vowels.includes(char)){
            vowelCount += 1;
        }
    });
    console.log(vowelCount);
    return vowelCount;
    
}

const myString = "hello my name is natalie";
getCount(myString);

// 100 Dev projects


class NetFlixShows {
    constructor(genre, title, rating, episodes){
        this.genre = genre;
        this.title = title;
        this.rating = rating;
        this.episodes = episodes;
    }
    play(){
        console.log("playing...");
    }
    stop(){
        console.log("Stopping");
    }
    saveToList(){
        console.log("Saving...");
    }
}

const lost = new NetFlixShows("drama", "Lost", "85%", 50);







