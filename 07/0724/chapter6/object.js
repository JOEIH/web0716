/*
const pet = {
    name: '구름',
    eat: function(food) {
        console.log(this.name + '은/는 ' + food + '을/를 먹습니다.')
    }
}

pet.eat('밥')
*/

const student = {}

student.name ='현진'
student.age = 24
student.future = '개발자'

console.log(JSON.stringify(student, null, 2))

/* 위 코드의 결과가 JSON 타입
{
    "name": "현진",
    "age": 24,
    "future": "개발자"
}
*/