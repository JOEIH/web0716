let person = {
    name: 'hyun',
    age: 24,
    state: 'student'
}

//대괄호로 접근할 때는 '' 안에 key 넣어주기
console.log(person['age'])
//온점으로 접근할 때는 key값 그대로
console.log(person.state)


const animal = {
    name: 'dog',
    eat: function(food) {
        //this를 쓰면 함수 밖(이면서 선언된 객체 안에 있는) 속성에도 접근 가능
        console.log(this.name + '은/는 ' + `${food}을/를 먹었다.`)
    }
}

animal.eat('감자') //dog은/는 감자을/를 먹었다.

//객체에 속성 추가하기
animal.age = 3
console.log(JSON.stringify(animal, null, 2))
/*
{
  "name": "dog",
  "age": 3
}
//함수 프로퍼티 eat은 JSON.stringify 호출 시 무시되기 때문에 출력되지 않음
*/

delete person.age
console.log(JSON.stringify(person, null, 2))
/*
{
  "name": "hyun",
  "state": "student"
}
age가 삭제됨
*/