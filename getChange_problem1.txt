const getChange = (x, y) => {

    const paiseCoins = [0.01, 0.05, 0.10, 0.25, 0.50, 1];
    let change = parseFloat((x - y).toFixed(2));
    return paiseCoins.reverse().map((paise) => {
        if (change >= paise) {
            let coins = Math.floor(change / paise)
            change = Number((change - paise * coins).toFixed(2));
            return coins;
        } else {
            return 0;
        }
    }).reverse();
}

console.log(getChange(5, 0.99));
console.log(getChange(3.14, 1.99));
console.log(getChange(4, 3.14));
console.log(getChange(0.45, 0.34));