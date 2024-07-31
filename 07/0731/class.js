// function Point(x, y){
//     this.x = x;
//     this.y = y;
// }
// Point.prototype = {
//     toString: function() {
//         return `(${this.x}, ${this.y})`;
//     }
// }
// let pt1 = new Point(10, 20);
// let pt2 = new Point(100, 200);
// console.log(pt1.toString());
// console.log(pt2.toString());
// console.log(pt1 instanceof Point);


// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function() {
//         return Math.PI*this.radius ** 2;
//     }
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea)  //false

// //다시^^
// function Circle(radius) {
//     this.radius = radius;
//     this.getArea = function() {
//         return Math.PI*this.radius ** 2;
//     }
// }
// Circle.prototype.getArea = function() {
//     return Math.PI*this.radius ** 2;
// }
// const circle1 = new Circle(1);
// const circle2 = new Circle(2);
// console.log(circle1.getArea === circle2.getArea)  //false


// class Person {
//     constructor (name) {
//         this.name = name;
//     }
//     sayHi() {
//         console.log(`Hi ${this.name}`)
//     }
//     static sayHello() {
//         console.log('Hello')
//     }
// }
// const me = new Person('Lee');
// me.sayHi();
// Person.sayHello();


// const Person = (function() {
//     function Person(name) {
//         this.name = name;
//     }  
//     Person.prototype.sayHi = function() {
//         console.log('Hi' + this.name);
//     }
//     Person.sayHello = function() {
//         console.log('Hello');
//     }   
//     return Person;
// }());
// const me = new Person('Lee');
// console.log(me.name);
// me.sayHi();
// Person.sayHello();

// class Square {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
//     static areas(width, height) {
//         return width*height;
//     }
// }
// const square = new Square(10, 10);
// console.log(square.area());         //100
// console.log(Square.areas(20, 10));  //200

// const Person = {
//     firstName: 'ABC',
//     lastName: 'DEF',
    
//     get fullName() {
//         return `${this.firstName} ${this.lastName}`
//     }, 
//     set fullName(name) {
//         [this.firstName, this.lastName] = name.split('')
//     }
// }
// console.log(Person.fullName);


// class Person{
//     #name = '';
//     constructor(name) {
//         this.#name = name;
//     }
//     get name() {
//         return this.#name.trim();
//     }
// }
// const me = new Person('Lee');
// //console.log(me.#name);
// //#name 속성은 프라이빗 식별자 포함하므로 'Person'클래스 외부에서 액세스 불가
// // -> 접근자 프로퍼티 사용하기
// console.log(me.name);


// class Vehicle {
//     constructor(name, wheel) {
//         this.name = name;
//         this.wheel = wheel;
//     }
// }
// const myVehicle = new Vehicle('자전거', 2)
// console.log(myVehicle);  //Vehicle { name: '자전거', wheel: 2 }


// //extends
// class Bicycle extends Vehicle {
//     constructor(name, wheel) {
//         super(name, wheel)
//     }
// }
// const myBicycle = new Bicycle('따릉이', 2)
// console.log(myBicycle);  //Bicycle { name: '따릉이', wheel: 2 }

// class Car extends Vehicle {
//     constructor(name, wheel, license) {
//         //기존 클래스 지칭
//         super(name, wheel);
//         //기존 클래스에 있는 인자 아니므로 this 사용
//         this.license = license;
//     }
// }
// const myCar = new Car('벤츠', 4, true)
// console.log(myCar);   //Car { name: '벤츠', wheel: 4, license: true }


class Base {
    constructor(name) {
        this.name = name;
    }
    sayHi() {
        return `Hi ${this.name}. 잘 지냈니?`;
    }
}

class Derived extends Base {
    sayHi() {
        //Base 클래스의 sayHi()
        return `${super.sayHi()}`
    }
}
const derived = new Derived('Lee');
console.log(derived.sayHi());    //Hi Lee. 잘 지냈니?