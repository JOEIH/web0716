function printLang(code) {
    //printLang._lang[code]는 객체 printLang._lang의 value값에 접근
    return printLang._lang[code]
}

printLang._lang = {
    ko: '한국어',
    en: '영어',
    ja: '일본어',
    fr: '프랑스어',
    es: '스페인어'
}

console.log('printLang("ko"): ', printLang('ko'))  //printLang("ko"):  한국어
console.log('printLang("en"): ', printLang('en'))  //printLang("en"):  영어