/* 
numbers=[1,2,6,2,4,2];

*/
// let items = +prompt("mời nhập số lượng phần tử trong mảng");

// let numbers = [];
// for (let i = 0; i < items; i++) {
//     let number = +prompt(`phần tử thứ ${i + 1}`);
//     numbers.push(number)
// }
// console.log("mảng sau khi push", numbers);
// let numbers = [1, 2, 6, 2, 4, 2];

// let numberInput = +prompt("mời nhập số tìm kiếm");
/* 
    có: in ra
        + in 1.
        + in nhiều.
    không: in ra không có
 */
// let check = false;
// for (let i = 0; i < numbers.length; i++) {
//     if (numberInput == numbers[i]) {
//         console.log("giá trị ", numberInput, "+ vị trí thứ", i);
//         check = true;
//     }
// }
// if (!check) {
//     console.log("không có vị trí thỏa mãn!");
// }
// muốn: 

let numbers = [1, 2, 6, 2, 4, 2];
let numberInput = +prompt("mời bạn nhập phần tử cần tìm kiếm!");
// indexOf : dùng với mảng để tìm kiếm
/* 
    nếu có trả về vị trí đầu tiên tìm thấy
    nếu không có trả về -1
 */
let result = numbers.indexOf(numberInput);
if (result == -1) {
    console.log("không có phần tử nào trong mảng ");
} else {
    console.log("phần tử ở vị trí thứ :", result);
}


