const personalIncome = function(income) {
    if (income > 80) return income - income * 0.3 + " triệu "; 
    if (income > 50) return income - income * 0.2 + " triệu ";
    if (income > 25) return income - income * 0.1 + " triệu ";
    if (income > 11) return income - income * 0.05 + " triệu ";
    if (income >= 0) return income + " triệu";
    if (income < 0) return "KHÔNG THỂ TÍNH TOÁN"
}
console.log(personalIncome(92));
console.log(personalIncome(60));
console.log(personalIncome(34));
console.log(personalIncome(20));
console.log(personalIncome(5));
console.log(personalIncome(0));
console.log(personalIncome(-5));