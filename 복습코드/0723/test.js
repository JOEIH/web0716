const grade = Number(prompt('성적 입력', '성적'))

if (grade > 4.0) {
    console.log('잘했음')
}else if(grade <= 4.0 && grade > 3.5) {
    console.log('평균')
}else {
    console.log('분발해')
}



