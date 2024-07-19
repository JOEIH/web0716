const textLine = document.getElementById('textBox');
const button = document.getElementsByClassName('btn');
const container = document.getElementById('containerBox');
const selectedImg = document.getElementById('imgBox');
const imgSelectBtn = document.getElementById('selectFile');

function input() {
    container.innerText = textLine.value;
}

function alarm() {
    container.innerText = ""
    if (!textLine.value) {
        alert('값을 입력하세요');
    } else {
        input()
    }
}

function imgInput() {
    selectedImg.innerText = imgSelectBtn.value
}
