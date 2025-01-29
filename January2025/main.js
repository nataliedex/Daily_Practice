const rps = (p1, p2) => {
    if(p1.toLowerCase() === "rock"){
        if(p2.toLowerCase() === "paper"){
            return "Player 2 won!";
        } else if(p2.toLowerCase() === "scissors"){
            return "Player 1 won!";
        } else {
            return "Draw!"
        }
    } else if(p1.toLowerCase() === "paper"){
        if(p2.toLowerCase() === "scissors"){
            return "Player 2 won!";
        } else if(p2.toLowerCase() === "rock"){
            return "Player 1 won!";
        } else {
            return "Draw!"
        }
    } else if(p1.toLowerCase() === "scissors"){
        if(p2.toLowerCase() === "rock"){
            return "Player 2 won!";
        } else if(p2.toLowerCase() === "paper"){
            return "Player 1 won!";
        } else {
            return "Draw!"
        }
    }
};

console.log(rps("rock", "Scissors"), "Player 1 won!");
console.log(rps("rock", "paper"), "Player 2 won!");
console.log(rps("rock", "rock"), "Draw!");
console.log(rps("paper", "Scissors"), "Player 2 won!");
console.log(rps("paper", "paper"), "Draw");
console.log(rps("paper", "rock"), "Player 2 won!");
console.log(rps("scissors", "Scissors"), "Draw!");
console.log(rps("scissors", "paper"), "Player 2 won!");
console.log(rps("scissors", "rock"), "Player 1 won!");

const rockpaperscissors= (p1, p2) => {
    const winning = {rock: "scissors", paper: "rock", scissors: "paper"};
    if(p1.toLowerCase() === p2.toLowerCase()) return 'Draw!';
    if (p2 === winning[p1]){
        return 'Player 1 won!';
    } else {
        return 'Player 2 won!';
    }
}

console.log(rockpaperscissors("paper", "paper"), "game 2: Draw");
console.log(rockpaperscissors("paper", "rock"), "Player 2 won!");
console.log(rockpaperscissors("scissors", "Scissors"), "Draw!");
console.log(rockpaperscissors("scissors", "paper"), "Player 2 won!");
console.log(rockpaperscissors("scissors", "rock"), "Player 1 won!");