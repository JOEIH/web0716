// const set = new Set();
// console.log(set); //Set(0) {}

// const set1 = new Set([1, 2, 3, 3]);
// console.log(set1); //Set(3) { 1, 2, 3 } 중복된 값 덮어씀

// const uniq = array => [...new Set(array)]
// console.log(uniq([2,1,2,3,4,5,4])) //[ 2, 1, 3, 4, 5 ]

// const {size} = new Set([1,2,3,3]);
// console.log(size) //3

// const set = new Set();
// // set.add(1);
// // console.log(set);  //Set(1) { 1 } 1이 들어간 객체

// set.add(1).add(2); //메소드 체이닝
// console.log(set);  //Set(2) { 1, 2 }

// const set = new Set([1,2,3]);
// console.log(set.has(2));  //true
// console.log(set.has(5));  //false
// set.delete(2);  
// console.log(set);   //Set(2) { 1, 3 }
// set.delete(2).delete(1); //연속호출 불가능해서 에러 발생
// console.log(set); 
// set.clear()
// console.log(set)  //Set(0) {} 일괄삭제

// let odds = new Set([1, 3, 5, 7, 9]);
// let sum = 0;
// for(let o of odds)
//     sum += o;
// console.log(sum); //25

// let product = 1;
// odds.forEach(o => product *= o);
// console.log(product); //945

// const userIDs = [101, 102, 101, 103, 102];
// const uniqueUserIDs = new Set(userIDs);
// uniqueUserIDs.forEach(userID => {
//     console.log(`ID: ${userID}`)
// })
// //ID: 101
// //ID: 102
// //ID: 103

// const tags = ['js', 'css', 'html', 'html']
// const uniqueTags = new Set(tags);
// uniqueTags.forEach(tag => {
//     console.log(`tag: ${tag}`);
// })
// //tag: js
// //tag: css
// //tag: html

// const set = new Set([1, 2, 3]);
// console.log([...set]); //[ 1, 2, 3 ]
// const [a, ...rest] = set;
// console.log(a, rest) //1 [ 2, 3 ]

//다시
let set1 = new Set([1, 2, 3]);
let set2 = new Set([4, 2, 3]);
let union = new Set([...set1, ...set2]);
let intersection = new Set([...set1].filter(x => set2.has(x)));
console.log(intersection);   //Set(2) { 2, 3 } 교집합
let difference = new Set([...set1].filter(x => !set2.has(x)));
console.log(difference);     //Set(1) { 1 }

