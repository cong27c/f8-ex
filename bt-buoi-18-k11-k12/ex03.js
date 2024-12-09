/**Bài tập: Viết hàm kiểm tra 3 giá trị a, b, c
có phải là 3 cạnh của một tam giác không. a,b,c
nhập tử bàn phím. */

const checker = function(a,b,c) {
    a = parseFloat(prompt("Nhập cạnh a"));
    b = parseFloat(prompt("Nhập cạnh b"));
    c = parseFloat(prompt("Nhập cạnh c"));
    if(a + b > c && a + c > b && b + c > a)  {
        alert( `${a},${b},${c} Là ba canh của một tam giác`);
    } else if (a + b < c || a + c < b || b + c < a) {
        alert(`${a},${b},${c} Không phải là ba cạnh của một tam giác`);
    } else {
        alert( `${a},${b},${c} Không họp lệ`);
    }
 }
 checker()


//  else (a && b && c !== Number) {
//     alert( `${a},${b},${c} Không họp lệ`);
// }