/* 
    Sắp xếp 
    Viết chương trình khai báo mảng số nguyên gồm nhiều phần tử bất kỳ
    tiến hành di chuyển các phần tử âm lên đầu mảng,
    phần tử dương về cuối mảng và in kết quả ra màn hình console.
    sort();
 */

let numbers = [1, 4, 7, 2, 3, 15, 11, 23, 31, 5];
let result = numbers.sort();
console.log("kết quả sau khi sort", result);
/* 
    thuật toán sắp xếp trong js
    selection sort, bubble sort, quick sort....
   
*/
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
        if (numbers[j] > numbers[j + 1]) {
            let temp;
            temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
}
console.log("2222222222", numbers);





