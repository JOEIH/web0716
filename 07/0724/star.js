//삼각형 세 개 안에 삼각형 모양의 공백이 있는 큰 삼각형 출력
//위쪽 별 가진 삼각형
let star = ''
for (let i = 0; i < 5; i++) {
    //큰 삼각형의 공백 생각하기
    for (let k = 9; k > i; k--){
        star += ' '
    }
    //위쪽 별
    for (let j = 0; j < 2*i+1; j++) {
        star += '*'
    }
    star += '\n'
}
//아래 5줄
//왼쪽 공백, 중간 삼각형 공백 생각
for (let a = 0; a < 5; a++){
    //왼쪽 공백 먼저
    for (let b = 4; b > a; b--) {
        star += ' '
    }
    //왼쪽 별
    for (let c = 0; c < 2*a+1; c++) {
        star += '*'
    }
    //중간 공백
    for (let d = 10; d > 2*a+1; d--){
        star += ' '
    }
    //오른쪽 별
    for (let e = 0; e < 2*a+1; e++){
        star += '*'
    }
    star += '\n'
}

console.log(star)