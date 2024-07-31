// function callback() {
//     console.log('콜백함수 호출됨');
// }
// setTimeout(callback, 1000) //1초 뒤 아래
// console.log('작업을 수행')

//다시
// function getUsers(callback) {
//     setTimeout(() => {
//        callback([
//             {name: 'Kim', email:'hyun@gmail.com'},
//             {name: 'Lee', email: 'hyun@gmail.com'},
//             {name: 'Park', email: 'hyun@gmail.com'}
//         ]);
//     }, 4000)
// }

// function findUser(name, callback){
//     getUsers(users => {
//         const user =  users.find(user => user.name=== name);
//         callback(user.email);
//     })
// }
// let user = findUser('Kim', user => {
//     console.log(user);
// });


// let greeting = document.querySelector('#greeting');
// greeting.addEventListener('click', sayHello);
// function sayHello() {
//     alert('안녕하세요')
// }

// //promise
// let success = true;
// function getUser() {
//     return new Promise((resolve, reject) => {
//         if (success) {
//             setTimeout(() => {
//                 resolve(
//                     [
//                         //TypeError: Cannot read properties of undefined (reading 'email') <- 없는 name 찾아서
//                         {name: 'Kim', email:"hyun@gmail.com"},
//                         {name: 'Lee', email: 'hyun@gmail.com'},
//                         {name: 'Park', email: 'hyun@gmail.com'}
//                     ]
//                 )
//             }, 1000);
//         } else {
//             reject('실패');
//         }
//     })
// }
// let promise = getUser();
// //호출 후 then 메서드로 객체가 반환하는 값 구함
// promise
//     .then(users => users.find(user => user.name === 'Kim'))
//     .then(user => console.log(user.email))
//     .catch(error => console.log(error))
//     .finally(() => console.log('작업완료'))

// const p1 = new Promise((resolve, reject) => setTimeout(() => resolve(10), 2000));
// const p2 = new Promise((resolve, reject) => setTimeout(() => reject('실패함'), 1000)); //하나라도 실패하면 아래 promise.all 오류
// const p3 = new Promise((resolve, reject) => setTimeout(() => resolve(30), 3000));
// let promises = [p1, p2, p3]

// Promise.allSettled(promises)
// .then(results => {
//     const fulfilledResults = results.filter(result => result.status === "fulfilled")  
//     .map(result => result.value);
//     const total = fulfilledResults.reduce((sum, value) => sum+value ,0
//     );
//     console.log(`결과: ${fulfilledResults}`);
//     console.log(`결과: ${total}`)
// })

// function getUser (){
//     return new Promise((resolve, reject) => {
//                     setTimeout(() => {
//                         resolve(
//                             [
//                                 //TypeError: Cannot read properties of undefined (reading 'email')
//                                 {name: 'Kim', email:"hyun@gmail.com"},
//                                 {name: 'Lee', email: 'hyun@gmail.com'},
//                                 {name: 'Park', email: 'hyun@gmail.com'}
//                             ]
//                         )
//                     }, 1000);
//                 });
//             }
// function findUser(users) {
//     return new Promise((resolve, reject) => {
//         console.log(users)
//         setTimeout(() => {
//             resolve(users.find((user) => user.name ==='Kim'))
//         }, 1000);
//     })
// }
// function getEmail(user) {
//     return new Promise((resolve, reject) => {
//         console.log(user)
//         setTimeout(() => {
//             resolve(user.email)
//         }, 3000);
//     })
// }
// getUser()
// .then(findUser)
// .then(getEmail)
// .then(console.log)


// async function sayHello() {
//     return "안녕";
// }
// sayHello()
// .then(console.log);  //안녕
// //위와 같은 결과 출력(함수 표현식)
// //let sayHello = async function() {...}
// //같은 결과(화살표함수) - 괄호, return 없앨 수 있음
// //let sayHello = async () => '안녕'


// class Greeter {
//     async sayHello() {
//         return '안녕'
//     }
// }
// const greeter = new Greeter();
// greeter.sayHello()
// .then(console.log);   // 안녕


// async function sayHello() {
//     return Promise. resolve('안녕')
// }
// sayHello()
// .then(console.log)   //안녕


// async function sayHello() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => resolve('안녕'));
//     })
// }
// sayHello()
// .then(console.log) //안녕



// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>resolve("안녕"), 3000)
//     })
// }
// async function display() {    //결과값 보여주려고 만드는 함수
//     let result = await sayHello();
//     console.log(result);
// }
// display();



// async function sayHello() {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>reject("거부"), 3000)
//     })
// }
// async function display() { //결과값 보여주려고 만드는 함수
//     try {
//         let result = await sayHello();
//         console.log(result);
//     } catch(e) {
//         console.log(e);
//     }
// }
// display();


function getUser() {
    return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(
                    [
                        //TypeError: Cannot read properties of undefined (reading 'email') <- 없는 name 찾아서
                        {name: 'Kim', email:"hyun@gmail.com"},
                        {name: 'Lee', email: 'hyun@gmail.com'},
                        {name: 'Park', email: 'hyun@gmail.com'}
                    ]
                )
            }, 2000);
    })
}
function findUser(users, name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(users.find(user=>user.name === name))
        }, 1000)
    })
}
function getEmail(user) {
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(user.email);
        }, 3000)
    })
}
async function getUserEmail(name) {
    let users = await getUser();
    let user = await findUser(users, name);
    let email = await getEmail(user);
    return email;
}
async function displayUserEmail() {
    let email = await getUserEmail('Kim');
    console.log(email);
}
displayUserEmail();