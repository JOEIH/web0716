//[Symbol.iterator]()메서드를 제너레이터 메서드로 구현하여 제너레이터 객체 반환
// class Sequence {
//     constructor(from = 0, to = Infinity, interval = 1) {
//         this.from = from;
//         this.to = to;
//         this.interval = interval;
//     }
//     *[Symbol.iterator]() {
//         let num = this.from;
//         while(num <= this.to) {
//             yield num;
//             num += this.interval;
//         }
//     }
// }
// let evenNumbers = new Sequence(2, 10, 2); //짝수만 반환
// for(const num of evenNumbers) {
//     console.log(num);
// }

// function* generatorIterables(...iterables) {
//     for(let iterable of iterables) 
//         for(let item of iterable)
//             yield item;
// }
function* generateIterable(...iterable){
    for(let iterable of iterables)
        yield* iterable;
}
// let evenNumbers = new Sequence(2, 10, 2);
let generator = generatorIterables('abc', [1,2,3]);
let arr = [...generator]
console.log(arr);   //[ 'a', 'b', 'c', 1, 2, 3 ]