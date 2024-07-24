//화살표 함수는 this 사용 못하기 때문에 메서드가 아니라 함수에만 사용해야 함
'use strict'

const object = {
    i: 10,
    b: () => console.log(this.i, this),
    c() {
        console.log(this.i, this)
    },
}

object.b()    //undefined {}
object.c()    //10 { i: 10, b: [Function: b], c: [Function: c] }