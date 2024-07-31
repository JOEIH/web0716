// //문제 1 promise
// //내 풀이
// const a = new Promise((resolve,reject) => setTimeout(()=>resolve('A'), 1000));
// const b = new Promise((resolve,reject) => setTimeout(()=>resolve('B'), 2000));
// let promises = [a,b]

// Promise.all(promises)
// .then((result) => {
//     console.log(`반환된 값: ${result}`);    //반환된 값: A,B
//     console.log('완료!', result);           //완료! [ 'A', 'B' ]
// })


// //문제 2 promise
// //어려워 다시...
// let success = true;
// const first = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if(success) {
//             resolve(5);
//         }else {
//             reject('에러!');
//         }
//     }, 1000);
// })

// first.then(
//     num => {
//         return new Promise((resolve,reject) => {
//             setTimeout(()=>{
//                 resolve(num*10);
//             },1500)
//         })
//     })
//     .then(result => {
//         console.log(result);
//     })
//     .catch(error=>{
//         console.log(error);
//     })


// 예제 4
//이게맞나...
// async function* gen(from = 0, to=Infinity, interval=1) {
//     let next = from;
//     while(next <= to) {
//         yield new Promise((resolve, reject) => {
//             setTimeout(() => resolve(next), 2000);
//         })
//         next+=interval;
//     }
// }
// (async () => {
//     let seq = gen(1, 5, 1)   // interval이 2로 설정되었기 때문에 2씩 증가
//     for await(let value of seq)
//     console.log(`${value}완료`)
// })()


// //강사님 풀이
// //여러 개의 비동기 작업을 2초 간격으로 완료하고 출력해야 하므로 프로미스 여러 개 필요...
// function* taskGenerator() {
//    yield new Promise((resolve) => setTimeout(()=>resolve("1완료"), 2000));
//    yield new Promise((resolve) => setTimeout(()=>resolve("2완료"), 2000));
//    yield new Promise((resolve) => setTimeout(()=>resolve("3완료"), 2000));
// }
// const tasksDisplay = async () => {
//     const tasks = taskGenerator()
//     for(let task of tasks) {
//         const result = await task;
//         console.log(result);
//     }
// }
// tasksDisplay();



//예제 1
/* 망한풀이
function* userInfo(users) {
    yield new Promise((resolve) => setTimeout(()=>resolve(users), 3000))
}
(async (users) => {
    let userList = userInfo(users);
    for (let info in userList) {
        const result = await info;
        console.log(result);
    }
})();
*/

// //맞는 풀이
// function userData(userId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const users = {
//                 1: {name: 'kim', age: 25},
//                 2: {name: 'Lee', age: 30},
//                 3: {name: 'Jun', age: 35}
//             }
//             const user = users[userId];
//             if (user){
//                 resolve(user);
//             }else {
//                 reject("사용자를 찾을 수 없습니다.");
//             }
//         }, 1000)
//     })
// }

// async function getUser(userId) {
//     try {
//         const userDataGet = await userData(userId);
//         console.log(`${userDataGet.name}, ${userDataGet.age}`);
//     } catch(error) {
//         console.error(error)
//     }
// }
// getUser(4);


//예제1
function Book(title, author, price) {
    this.title = title;
    this.author = author;
    this.price = price;
}
//새로운 프로퍼티 추가
Book.prototype.year = "1999"

