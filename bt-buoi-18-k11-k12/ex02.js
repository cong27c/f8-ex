// BÀI 2 : Tính tiền điện
const electricBill = function(number) {
    if (number > 400)
        return (number - 400) * 2.927  + (2.834 + 2.536 + 2.014) * 100 + (1.734 + 1.678) * 50;
    if (number > 300) 
        return (number - 300) * 2.834 + (2.536 + 2.014) * 100 + (1.734 + 1.678) * 50;
    if (number > 200)
        return (number - 200) * 2.536 + (100 * 2.014) + (1.734 + 1.678) * 50;
    if (number > 100)
        return (number - 100) * 2.014 + (1.734 + 1.678) * 50;
    if (number > 50) 
        return (number - 50) * 1.734 + (50 * 1.678);
    if (number >= 0) 
        return (number * 1.678);
    if (number < 0) 
        return "KHÔNG THỂ TÍNH TOÁN" 
} 
console.log(electricBill(450));
console.log(electricBill(350));
console.log(electricBill(272));
console.log(electricBill(160));
console.log(electricBill(78));
console.log(electricBill(34));
console.log(electricBill(-5));