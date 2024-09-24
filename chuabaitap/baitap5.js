/* 
       Viết chương trình khai báo mảng gồm nhiều phần tử bất kỳ,
       đảo ngược thứ tự của các phần tử trong mảng đã khai báo
       in ra màn hình console.
 */
// B1: tạo 1 mảng chứa nhiều phần tử

let numbers = [1, 2, 3, 4, 5];
// B2: dùng reverse
let result = numbers.reverse();
console.log("mảng sau khi đã đảo ngược", result);
let numberReverse=[]; //[5,4,3,2,1]
/* 
    C2: tạo 1 mảng rỗng, sau đó đi duyệt từng phần tử trong mảng ban đầu
    push vào mảng rỗng
 */
for (let i = 4; i >=0; i--) {
    console.log(numbers[i]);//5,4,3
    numberReverse.push(numbers[i])
}




