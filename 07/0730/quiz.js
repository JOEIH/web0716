//문제 1
// const numbers = [20, 37, -21, 32, -2];
// let filter = numbers.filter(value => value > 30);
// document.write(filter);
// /* 강사님 풀이
// document.write(numbers[1] + ",");
// document.write(numbers[3])
// */

// //문제 2
// const scores = [67, 82, 97, 100, 92];
// for(let i = 0; i<scores.length; i++) {
//     console.log(scores[i]);
//     //document.write(scores[i] + "<br>");
// }
// //for...of
// for(let i of scores) {
//     console.log(i);
//     //document.write(i + "<br>");
// }

//문제 3
// const tel = ["010", "1234", "5678"];
// let b = tel.join("-");
// console.log(b);

//문제 4
// const colors = ["빨강", "노랑", "파랑", "주황"];
// // 내 풀이 -> 굳이 어렵게 품 문제 잘 읽기
// // colors.splice(0, 4, "노랑, 파랑, 주황/빨강")
// // console.log(colors.join());
// //강사님 풀이
// let arr = colors.shift();
// console.log(colors + "/" + arr);


//문제 5
// let arr = Array.from(new Array(3), () => new Array(3))
// let sum, average;

// text = '';

// for(let i = 0; i < 3; i++) {
//     sum = 0;
//     for (let j = 0; j < 4; j++) {
//         sum += arr[i][j];
//     }
//     average = sum/4;
//     text += i + '번째 학생의 합계: ' + sum + ', 평균: ' + average;
// }
// document.write(text)


//문제 6
// const mathScores = [90, 85, 70, 86, 97];
// let sum = 0; //sum = 0으로 설정 안 했더니 숫자를 NaN으로 반환함. 알아보기
// let average;
// // 내 풀이
// // for(let i = 0; i < mathScores.length; i++){
// //     sum += mathScores[i]
// // }
// // average = sum/5
// // document.write(average)

// for(let mathScore of mathScores) {
//     sum += mathScore;
// }
// average = sum/mathScores.length;
// let text = ""
// text += "합계: " + sum + "<br>";
// text += "평균: " + average + "<br>";
// document.write(text);

//문제 7
// let tempNumbers = [7, -24, -8, 10, 17, -18];
// tempFind = tempNumbers.find(number => number < 0); // -24
// document.write(tempFind);

//문제 8
// let a = [12, 0, 2, 5, 4];
// let b = [0, 2, 3, 12, 8];
// let arr = [];

// for (let i of a) {
//     if (b.includes(i)) {
//         arr.push(i)
//     }
// }
// document.write(arr);

//문제 9
// //강사님 풀이
// b.forEach(element => {
//     if(a.includes(element)) {
//         arr.push(element);
//     }
// });
// document.write(arr);

//문제 10
// const numbers2 = [1,3,5];
// 강사님 풀이
// let newArr = numbers2.map(num => num*10);
// document.write(newArr);

// // for (let i of numbers2) {
// //     i *= 10
// //     newArr.push(i)
// // }

// //Set
// //문제 1
// const set = new Set("I am a student"); 
// document.write(set.size); //10 요소 개수
// //set.forEach((set) => console.log(`요소: ${set}`));


//Map
// //문제 1
// //let scores = new Map();
// //scores.set('국어', 85).set('영어', 90).set('수학', 95);
// const scores = new Map([['국어', 85], ['영어', 90], ['수학', 95]])

// let sum = 0;
// let average;

// //내 풀이
// scores.forEach((value) => {
//     sum += value;
// })
// average = sum/3

// // //강사님 풀이
// // scores.forEach(function(value){
// //     sum += value;
// // })
// // average = sum/scores.size

// console.log(scores);
// console.log('합계: ' + sum + ', ' + '평균: ' + average);



// const book = new Map([['title', '유럽 책방 문화 탐구'], ['author', '한미화'], ['price', 23000]])

// //내 풀이
// book.forEach((value, key) => {
//     console.log(`${key} : ${value}`)
// })

// //강사님 풀이
// let text = ""
// book.forEach(function(value, key) {
//     text += key +":" + value + "<br>";
// })
// document.write(text);


// //내 풀이
// let numbers = new Set([3,7,12,3,12,3])

// numbers.delete(3)
// numbers.delete(12);
// console.log(numbers);  //Set(1) {7} - 틀린 답 중복되는 요소 제외한 set 만들면 됨

//강사님 풀이
let numbers = [3,7,12,3,12,3]
const numbersSet = new Set(numbers);
console.log(numbersSet);   //Set(3) { 3, 7, 12 }