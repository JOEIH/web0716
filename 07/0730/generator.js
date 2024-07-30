// function* generate() {
//     console.log("제너레이터 실행")
//     console.log("1 생성")
//     yield 1;
//     console.log("2 생성")
//     yield 2;
//     console.log("3 생성")
//     yield 3;
// }
// let gen = generate(); 
// let result = gen.next();
// result = gen.next();
// result = gen.next();

// console.log(gen);  //Generator


function* generate() {
    console.log("제너레이터 실행")
    console.log("1 생성")
    yield 1;
    console.log("2 생성")
    yield 2;
    console.log("3 생성")
    yield 3;
}
let gen = generate(); 
let result = gen.next();

// while(!result.done) {
//     console.log(result.value);
//     result = gen.next();
// }
// for (let ge of gen) {
//     console.log(gen);
// }


// let iterator = gen[Symbol.iterator];
// console.log(iterator);

function* sequence(from = 0, to = Infinity, interval = 1) {
    let next = from;
    while(next <= to) {
        yield next;
        next += interval
    }
}

let evenSeq = sequence(2, 10, 2);
for (let seq of evenSeq)
    console.log(seq);    //짝수


let evenSeq2 = sequence(1, 10, 2);
for (let seq of evenSeq2)
    console.log(seq);   //홀수