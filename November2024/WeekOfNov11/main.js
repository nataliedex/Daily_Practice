function descendingOrder(n){
    return Number(n.toString().split("").sort((a,b) => b - a).join(""));
  }

const num = 123456789;
console.log(descendingOrder(num));

function maps(x){
  return x.map((el) => el * 2);
}

const myArray = [2, 2, 2, 2, 2, 2];
console.log(maps(myArray));