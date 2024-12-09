/**Viết hàm calcBMI(weight, height) tính chỉ số BMI của một người dựa trên cân nặng và chiều cao nhập từ bàn phím
 */
 

const calcBMI = function(weight,height) {
     weight = parseFloat(prompt("Nhập cân nặng (kg)"));
     height = parseFloat(prompt("Nhập chiều cao (m)"));
    const BMI = weight / (height * height);
    if (BMI >= 25) {
        alert("Béo phì");
    } else if (BMI > 23) {
        alert("Thừa cân");
    } else if (BMI >= 18.5) {
        alert("Thiếu cân");
    } else if (BMI < 18.5) {
        alert("Thiếu cân");
    } else alert("Dữ liệu không hợp lệ");
}

