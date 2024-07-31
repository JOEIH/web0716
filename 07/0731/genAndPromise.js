// const myPromise = () => new Promise((resolve) => {
//     resolve("value is ");
// });

// function* gen() {
//     let result = "";
//     yield myPromise().then(data => result = data);
//     yield result + '1';
// }

// const asyncFunc = gen();
// const val1 = asyncFunc.next();
// console.log(val1)

// val1.value.then(() => {
//     console.log(asyncFunc.next())
// })

async function* asyncSequence(from = 0, to = Infinity, interval = 1, timeout) {
    let next = from;
    while(next <= to) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => resolve(next), timeout);
            //next += interval; <- 4부터 출력됨
        })
        next += interval; //밖으로 빼면 2부터 출력 가능
    }
}
(async() => {
    let seq = asyncSequence(2, 10, 2);
    for await(let value of seq)
    console.log(value);
})();