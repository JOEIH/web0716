// function foo(...rest) {
//     console.log(rest);
// }
// foo(...[1,2,3]);   //[1, 2, 3]

// let arr3 = [1, 4];
// let arr4 = [2, 3];
// // arr3.splice(1, 0, arr4);
// // console.log(arr3);  //[ 1, [ 2, 3 ], 4 ]

// arr3.splice(1, 0, ...arr4);
// console.log(arr3);  //[ 1, 2, 3, 4 ]

// const origin = [1,2];
// const copy = origin.slice();
// console.log(copy);  //[ 1, 2 ]
// console.log(copy === origin);  //false 

// const origin = [1,2];
// const copy = [...origin];
// console.log(copy);  //[ 1, 2 ]
// console.log(copy === origin);  //false 


// const obj = {x: 1, y: 2};
// const copy = {...obj};
// console.log(copy);  //{ x: 1, y: 2 }
// console.log(copy === obj);  //false

// const merged = {x: 1, y: 2, ...{a: 3, b: 4}};
// console.log(merged);  //{ x: 1, y: 2, a: 3, b: 4 }


// const merged = Object.assign({}, {x: 1, y: 2}, {y: 3, x: 3});
// console.log(merged); //{ x: 3, y: 3 }


// const merged = {...{x: 1, y: 2}, ...{y: 3, x: 3}};
// console.log(merged); //{ x: 3, y: 3 }


//디스트럭처링 할당
// const arr = [1, 2, 3];
// const [one, two, three] = arr;
// console.log(one, two, three);  //1 2 3


// const [a, b] = [1, 2];
// console.log(a, b);  //1 2

// const [c, d] = [1];
// console.log(c, d);  //1 undefined

// const user = {firstName: "Kim", lastName: "Lee"};
// const {lastName, firstName} = user;
// console.log(lastName, firstName); //Lee Kim



// function printTodo({content, complete}) {
//     console.log(`할 일 ${content}는 ${complete ? '완료' : '미완료'}상태입니다.`) 
// }
// printTodo({id: 1, content: "HTML", complete: true});  //할 일 HTML는 완료상태입니다.


// const user = {
//     name: 'Lee',
//     address: {
//         zipCode: '030212',
//         city: 'Seoul'
//     }
// }
// const {address: {city}} = user;
// console.log(city);  //Seoul


//문제
//객체 person 만들고 name, age를 구조분해할당하여 변수 userName, userAge에 각각 저장한 후, 두 변수를 활용해 아래와 같은 형식의 문자열을 출력
//console.log(`이름: ${userName}, 나이: ${userAge}`);

const person = {
    name: 'Lee',
    age: 23
}

const {name: userName, age: userAge} = person;
console.log(`이름: ${userName}, 나이: ${userAge}`)  //이름: Lee, 나이: 23