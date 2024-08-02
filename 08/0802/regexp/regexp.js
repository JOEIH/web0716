// let str1 = "A cat gets haircut c3t c_t"
// let pattern = /c.t/g;
// let result = str1.match(pattern);
// document.getElementById("show").innerHTML = result;

// let str1 = "Discount rate: 30%"
// let pattern = /\w/g;
// let result = str1.match(pattern);
// document.getElementById("show").innerHTML = result;

// let str1 = "Phone number: 010-1234-5678"
// let pattern = /\d/g;
// let result = str1.match(pattern);
// document.getElementById("show").innerHTML = result;

// let str1 = "Phone number: 010-1234-5678"
// let pattern = /\D/g;
// let result = str1.match(pattern);
// document.getElementById("show").innerHTML = result;

// let str1 = "Hello world ! ! "
// let pattern = /\s/g;
// let result = str1.match(pattern);
// document.getElementById("show").innerHTML = result;

// let str1 = "Hello world ! ! "
// let pattern = /\S/g;
// let result = str1.match(pattern);
// document.getElementById("show").innerHTML = result;

// let str1 = "You are a student. Your name is nice"
// let pattern = /\Bou/g;
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2 = str1.replace(pattern2, "_");

// let text = "";
// text += result + "<br>" 
// text += result2 + "<br>"
// document.getElementById("show").innerHTML = text;

// let str1 = "Woops! Woooops! Woooooops!"
// let pattern = /o+/g;
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2 = str1.replace(pattern2, "_");

// let text = "";
// text += result + "<br>" 
// text += result2 + "<br>"
// document.getElementById("show").innerHTML = text;

// let str1 = "Email: Kim@gmail.com"
// let pattern = /\w+/g
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2 = str1.replace(pattern2, "_");

// let text = "";
// text += result + "<br>" 
// text += result2 + "<br>"
// document.getElementById("show").innerHTML = text;

// let str1 = "I am a boy. You are a girl."
// let pattern = /[am|are]/g
// let pattern2 = /e\B/g;
// let result = str1.match(pattern);
// let result2 = str1.replace(pattern2, "_");

// let text = "";
// text += result + "<br>" 
// text += result2 + "<br>"
// document.getElementById("show").innerHTML = text;



//문제 ---- 



//문제 1 apple 단어 포함 여부 확인
// let str = "I love Apple pie and apple juice.";
// let pattern = /apple/ig;
// let result = str.match(pattern)

// let text = ""
// text += result
// document.getElementById("show").innerHTML = text;



//문제 2 모든 대문자 찾기 "Hello World! This is a Test String"   /[A-Z]
// let str = "Hello World! This is a Test String";
// let pattern = /[A-Z]/g;
// let result = str.match(pattern)

// let text = ""
// text += result
// document.getElementById("show").innerHTML = text;

//문제 3 "1 10 100 2000 30000" 결과 100, 200, 300이 나오도록 작성
// let str = "1 10 100 2000 30000";
// let pattern = /\d{3}/g;
// let result = str.match(pattern)

// let text = ""
// text += result
// document.getElementById("show").innerHTML = text;


//문제 4 How do you do의 결과가 o, d, o, o, d, o 나오게 정규식 작성
// let str = "How do you do";
// let pattern = /[o|d]/g   //[do]도 됨
// let result = str.match(pattern);   //o,d,o,o,d,o

// document.getElementById("show").innerHTML = result;


//문제 5 89139012349 -> 9,9,0,9가 실행되도록 정규식 작성
// let str = "89139012349";
// let pattern = /[0,9]/g          // /[^1-8]/g
// let result = str.match(pattern); 

// document.getElementById("show").innerHTML = result;   //9,9,0,9


//문제 6 A AA B BB Aa Bb AAA -> A가 최소 1번 최대 2번 반복되는 문자열 검색
// let str = "A AA B BB Aa Bb AAA";
// let pattern = /A{2,}/g;
// let result = str.match(pattern)

// let text = ""
// text += result
// document.getElementById("show").innerHTML = text;


//문제 7 AA BB 12 345 0~9가 한 번 이상 반복되는 문자열 검색
let str = "AA BB 12 345";
let pattern = /[0-9]+/g;
let result = str.match(pattern)

let text = ""
text += result
document.getElementById("show").innerHTML = text;