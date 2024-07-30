// const map1 = new Map([['key1','value1'], ['key2', 'value2']]) ;
// console.log(map1); //Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// const map2 = new Map([[1,2]]);
// console.log(map2); // Map(1) { 1 => 2 }

// const map = new Map([['key1','value1'], ['key1', 'value2']]);
// console.log(map); //Map(1) { 'key1' => 'value2' } 중복된 키를 갖고 있으면 뒤 값으로 덮어씀

// //프로퍼티라 이렇게 들어감
// const {size} = new Map([['key1','value1'], ['key2', 'value2']]);
// console.log(size); //2

// const map = new Map(); 
// console.log(map); //Map(0) {}
// map.set('key1', 'value1');
// console.log(map); //Map(1) { 'key1' => 'value1' }

// map.set('key1', 'value1').set('key2', 'value2');
// console.log(map); //Map(2) { 'key1' => 'value1', 'key2' => 'value2' }

// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'kim'};
// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map);
// /* 
// Map(2) {
//     { name: 'Lee' } => 'developer',
//     { name: 'kim' } => 'designer'
// }
// */

//delete
// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'kim'};

// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map.delete(kim)); //true 삭제 성공
// console.log(map); //Map(1) { { name: 'Lee' } => 'developer' } kim은 삭제돼서 안 보임
// console.log(map.has(kim));  //false - kim 가지고 있지 않음

//clear
// const map = new Map();
// const lee = {name: 'Lee'};
// const kim = {name: 'kim'};

// map.set(lee, 'developer').set(kim, 'designer');
// console.log(map.clear());  //undefined
// console.log(map);   //Map(0) {}


let map = new Map();
map.set(0, 'zero');   //키, 값 넣어줌
map.set(1, 'one');
map.forEach((value, key) => console.log(key, value));
//0 zero
//1 one
