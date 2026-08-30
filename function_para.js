function calTotal(price,tax){
    const total = price+tax;
    return total;
}
const finalPrice = calTotal(100,17);
console.log(finalPrice);