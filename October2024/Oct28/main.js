const scoreButton = document.getElementById("score-button");
if(!localStorage.getItem("botScore")){
    localStorage.setItem("botScore",0);
}
scoreButton.addEventListener("click", addAnothaOne);

function addAnothaOne(){
    let botScoreVal = Number(localStorage.getItem("botScore"));
    botScoreVal += 1;

    localStorage.setItem("botScore", botScoreVal);
    document.getElementById("score").textContent = botScoreVal;
}

const cardButton = document.getElementById("get-cards");
cardButton.addEventListener("click", getCards);

function getCards(){
    fetch("https://www.deckofcardsapi.com/api/deck/kv56njuw8z26/draw/?count=2")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.log(`error: ${err}`);
    })
}