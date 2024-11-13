function descendingOrder(n){
    return Number(n.toString().split("").sort((a,b) => b - a).join(""));
  }

const num = 123456789;
console.log(descendingOrder(num));
