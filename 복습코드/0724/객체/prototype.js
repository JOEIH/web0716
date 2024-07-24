//prototype객체에 속성, 메소드 추가하면 모든 객체(+기본 자료형)에서 해당 속성과 메소드 사용 가능
Number.prototype.power = function(n=2) {
    //**은 지수
    return this.valueOf() ** n
}

const a = 12
//Number객체의 power메소드 사용
//n=2 기본값
//12**2
console.log('a.power(): ', a.power())
//12**3
console.log('a.power(3): ', a.power(3))
//12**4
console.log('a.power(4): ', a.power(4))

const j = '안녕하세요';
console.log(j.indexOf('안녕'))   //0   문자열 내에 있는 문자열이면 시작 인덱스 출력
console.log(j.indexOf('집'))     //-1  문자열 내에 없는 문자열은 -1 출력
console.log(j.indexOf('하세요')) //2   문자열 내에 있는 문자열이면 시작 인덱스 출력

//String객체의 contain() 메소드
String.prototype.contain = function(data) {
    return this.indexOf(data) >= 0
}

//Array객체의 contain() 메소드
Array.prototype.contain = function(data) {
    return this.indexOf(data) >= 0
}

const b = '안녕하세요'
console.log(b.contain('안녕')) //true
console.log(b.contain('없음')) //false

const c = [1, 2, 3, 4, 5]
console.log(c.contain(1))      //true - c 안에 1이 있음
console.log(c.contain(0))      //false