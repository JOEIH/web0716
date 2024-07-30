// let arr = [1, 2, 3, 4, 5];
// let iterator = arr[Symbol.iterator]();
// console.log(iterator); //Object [Array Iterator] {}

// let result = iterator.next();
// console.log(result); //{ value: 1, done: false }

// while(!result.done) {
//     console.log(result.value); 
//     result = iterator.next(); //1 2 3 4 5
// }

// let copy = [...iterator]
// console.log(copy);  //[] 객체 초기화

class Sequence {
    constructor(from = 0, to = Infinity, interval = 1) {
        this.from = from;
        this.to = to;
        this.interval = interval;
    }
    [Symbol.iterator] () {
        let next = this.from;
        return {
            next: () => {
                if (next <= this.to) {
                    let result = {value: next, done : false};
                    next += this.interval;
                    return result;
                }
                return{value: undefined, done: true};
            }
        }
    }
}

let evenNumbers = new Sequence(2, 10, 2);
let iterator = evenNumbers[Symbol.iterator]();
let result = iterator.next();
console.log(result);  //{ value: 2, done: false }

while(!result.done) {
    console.log(result.value);
    result = iterator.next(); //2 4 6 8 10
}

for(let num of evenNumbers) {
    console.log(num);  // 2 4 6 8 10
}


for(let num of evenNumbers) {
    if(num>7) break;
    console.log(num); // 2 4 6
}