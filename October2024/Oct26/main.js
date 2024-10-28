//Example fetch using pokemonapi.co
const pokemonImage = document.getElementById("pokemon-image");
let cryAudio;

document.querySelector('button').addEventListener('click', getFetch)
pokemonImage.addEventListener("click", getSound);

function getFetch(){;
    const choice = document.querySelector('input').value
    const url = 'https://pokeapi.co/api/v2/pokemon/'+choice

    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        pokemonImage.src = data.sprites.other["official-artwork"].front_default;
        cryAudio = new Audio(data.cries.latest);
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
function getSound(){
    pokemonImage.addEventListener("click", () => {
        cryAudio.currentTime = 0;
        cryAudio.play();
    });
}

const nasaAPIKey = "VIoGeBwW88QfLjL1WrUJT3GKRQLiGq9Qrs8owN6u";
const nasaButton = document.getElementById("nasa-button");
const nasaData = document.getElementById("nasa-data");
const nasaImage = document.getElementById("nasa-image");
const nasaVideo = document.getElementById("nasa-video");
const nasaDate = document.getElementById("nasa-date");
const dateChoice = document.getElementById("date-choice")
let nasaUrl = `https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}&date=${dateChoice.value}`;

nasaButton.addEventListener("click", getData);

function getData(){
    console.log(dateChoice.value);
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${nasaAPIKey}&date=${dateChoice.value}`)
    .then(res => res.json())
    .then(data => {
        if(data.media_type === "image"){
            nasaVideo.src = "";
            nasaImage.src = data.hdurl;
        } else if(data.media_type === "video"){
            nasaImage.src = "";
            nasaVideo.src = data.url;
        } else {
            console.log("no image or video");
        }
        nasaDate.textContent = data.date;
        nasaData.textContent = data.explanation;
        
        nasaImage.alt = data.copyright;
        console.log(data);
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })
}


