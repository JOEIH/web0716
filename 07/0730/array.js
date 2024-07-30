// const me = [1, 2, 3, 4, 5]
// console.log(me);

//새로운 배열 생성
let carSales = [300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450];
// console.log(carSales);

// let carSales2 = new Array(300, 350, 400, 450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450);
// console.log(carSales2)

// //기존 배열 복사해서 새로운 배열 만들기
// //복사는 기존 배열에 영향을 미치지 않음(얕은 복사)
// let copy = Array.from(carSales);
// console.log(copy);

//확산연산자 사용해 새로운 배열 만들기
// let concat = [0, carSales, 300, 500];
// console.log(concat);

// //확산연산자 + ""
// let numbers = [..."0123456789"]
// console.log(numbers);

// let may = carSales[4];
// console.log(may); //500
// let june = carSales["5"];
// console.log(june); //600

// carSales[12] = -50;
// console.log(carSales);

// let a = [1, 2, 3, 4, 5];
// let len = a.length;
// console.log(len);  //5
// a.length = 0;
// console.log(a)  //[]  빈 배열 반환

// let jan, fab, mar, rest;
// [jan, fab, mar, ...rest] = carSales;
// console.log(jan, fab, mar);  // 300 350 400
// console.log(rest);  // [450, 500, 600, 650, 620, 580, 620, 580, 620, 500, 450]


// let sum = 0;
// //let 빼면 sale 전역 접근 가능
// for(let sale of carSales) 
//     sum += sale;
// let average = sum / carSales.length;
// let roundedAverage = average.toFixed(2) //소수점 2번째자리까지 자르기
// console.log(average);  //515.7142857142857
// console.log(roundedAverage); //515.71

// let sum = 0;
// for (let [index, sale] of carSales.entries()){
//     if(index % 2 === 0)
//         sum += sale;
// } 
// let average = sum / (carSales.length / 2)
// console.log(average); //501.42857142857144

// let list = [4, 5, 6];
// for(let i in list) {
//     console.log(i);
// }
// for(let i of list) {
//     console.log(i)
// }

// //일반 객체는 이터러블(순환)이 아님 -> of는 에러나고 in은 잘 나오는 거 맞음
// const car = {
//     maker : "BMW",
//     color : "red",
//     year : "2012"
// }
// for(let prop in car) {
//     console.log(prop); //maker color year
// }

// let sum  = 0;
// carSales.forEach(sale => {sum += sale});
// let average = sum / carSales.length;
// console.log(average); //515.7142857142857

// carSales.forEach((sale, index, array)=>{array[index] = sale + 50});
// console.log(carSales);

// let newCarSales = carSales.map(sale => sale + 50);
// console.log(newCarSales);
// console.log(carSales);

// let highSales = carSales.filter(sale => sale > 500);
// console.log(highSales); //[600, 650, 620, 580, 620, 580, 620]

// let evenSales = carSales.filter((sale, index) => index%2 === 1) //0부터 시작해서 0이 1월이기 때문에
// console.log(evenSales)

// let firstSaleSix = carSales.find(sale => sale > 600); //조건에 맞는 요소를 찾고, 그 중 첫번째 내보냄
// console.log(firstSaleSix); //650

// let firstSaleSixIndex = carSales.findIndex(sale => sale>600); 
// console.log(firstSaleSixIndex); //6

// let allSaleSix = carSales.every(sale => sale > 600);
// console.log(allSaleSix); //false

// //하나라도 있으면 true 반환
// let anySalesSix = carSales.some(sale => sale > 600);
// console.log(anySalesSix); //true

// //더 이상 배열요소가 없을 때까지 계속 반복
// let sum = carSales.reduce((t1, t2) => t1 + t2, 0);
// console.log(sum); //7220
// let average = sum/carSales.length;
// console.log(average); //515.7142857142857

// //가장 큰 숫자
// let highest = carSales.reduce((t1, t2) => (t1 > t2 ? t1 : t2));
// console.log(highest);

// let flat = [1, [2, 3]].flat();
// console.log(flat); //[1,2,3]

// let message = ["오늘은", "비가 옵니다."];
// let words = message.flatMap(msg => msg.split(""));
// console.log(words); //한 단어 한 단어 쪼개서 배열로 만듦

//기존 배열 변경 없이 새 배열 반환

// const array1 = ['a', 'b', 'c'];
// const array2 = ['d', 'e', 'f'];
// const array3 = array1.concat(array2);
// console.log(array3); //[ 'a', 'b', 'c', 'd', 'e', 'f' ]

// let original = [1, 2, 3];
// let newArray;
// newArray = original.concat(4,5);
// newArray = original.concat([4, 5], [6, 7]);
// console.log(newArray); //[1, 2, 3, 4, 5, 6, 7]

let stack = [];
// stack.push(1);
// stack.push(2, 3) //[ 1, 2, 3 ]
// stack.pop();
// stack.push(4);
// console.log(stack); // [ 1, 2, 4 ]
// stack.unshift(1);
// stack.unshift(2, 3);
// console.log(stack); //[ 2, 3, 1 ]

// stack.unshift(1);
// stack.unshift(2, 3);
// stack.shift();
// console.log(stack); //[ 3, 1 ]


// let a = [1,2,3,4,5];
// // a.splice(0, 2);
// // console.log(a); //[ 3, 4, 5 ]
// // a.splice(2);
// // console.log(a); //[1, 2]
// a.splice(0, 2, 10, 20);
// console.log(a); //[ 10, 20, 3, 4, 5 ]

// let b = a.slice(0,2);
// let c = a.slice(1, -1);
// console.log(b); //[ 1, 2 ]
// console.log(c); //[ 2, 3, 4 ]
// //a에는 아무런 변화 없음
// console.log(a); //[ 1, 2, 3, 4, 5 ]

// let a = new Array(5);
// a.fill(0); //[ 0, 0, 0, 0, 0 ]
// // a.fill(1,1); //[ 0, 1, 1, 1, 1 ]
// a.fill(1, 1, -1)
// console.log(a); //[ 0, 1, 1, 1, 0 ]

// let a = [0, 1, 2, 3, 2, 1, 0];
// let b = a.indexOf(2);
// let c = a.lastIndexOf(2);
// let d = a.indexOf(5)
// console.log(b); //2 - 일치하는 맨 처음 요소의 index값 반환
// console.log(c); //4 - 뒤에서부터 시작
// console.log(d)  // -1

// let a = [0, true, 2, false, NaN];
// let b = a.includes(true);
// console.log(b); //true
// let c = a.includes(2);
// console.log(c); //true
// let d = a.includes(NaN);
// console.log(d); //true


// let a = ["apple", "cherry", "banana"];
// let b = a.sort();
// console.log(b); //[ 'apple', 'banana', 'cherry' ]
// let c = [22, 333, 121];
// let d = c.sort();
// console.log(d); //[ 121, 22, 333 ] 앞 숫자만 맞췄음(함수를 통한 지정 필요)

// let e = c.sort((a, b) => a - b) //함수 쓰고
// console.log(e); //[ 22, 121, 333 ] 잘 정렬됨

// let a = [1, 2, 3];
// let b = a.join(); 
// console.log(b); //1,2,3 
// let c = a.join("")
// console.log(c); //123

// let arr = new Array(2);
// for (let i = 0; i < arr.length; ++i) {
//     arr[i] = new Array(3);
// }
// console.log(arr);
// //[ [ <3 empty items> ], [ <3 empty items> ] ]
// // 2개의 배열 안에 3개의 빈 아이템

let arr = Array.from(new Array(2), () => new Array(3)) 
// console.log(arr); //[ [ <3 empty items> ], [ <3 empty items> ] ]

// arr[0][0] = 1;
// arr[0][1] = 2;
// arr[0][2] = 3;
// arr[1][0] = 4;
// arr[1][1] = 5;
// arr[1][2] = 6;
// console.table(arr);

for(let i = 0; i < arr.length; ++i) {
    for(let j = 0; j < arr[i].length; ++j){
        console.log(arr[i][j]);
    }
}



