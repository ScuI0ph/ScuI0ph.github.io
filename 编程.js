let n = 4;
for (let i = 0; i < n; i++) {
    let line = '';
    for (let j = 0; j < n - 1 - i; j++) {
        line += '-';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        line += '*';
    }
    console.log(line);
}
for (let i = n - 2; i >= 0; i--) {
    let line = '';
    for (let j = 0; j < n - 1 - i; j++) {
        line += '-';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        line += '*';
    }
    console.log(line);
}
for (let i = 1; i <= 9; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += `${j} * ${i} = ${j * i}    `;
    }
    console.log(row.trim());
}
let str = "Rome was not built in a day";
let words = str.split(/\s+/);
console.log("单词数量：" + words.length);
console.log("单词列表：" + words.join("、"));
let s = "Hello Lvye!";
let result1 = s.replace(/e/g, '');
let result2 = s.split('e').join('');

console.log("replace方法：" + result1);
console.log("split+join方法：" + result2);
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log("abcde 反转后：" + reverseString("abcde"));
console.log("JavaScript 编程很有趣 反转后：" + reverseString("JavaScript 编程很有趣"));
console.log("Rome was not built in a day 反转后：" + reverseString("Rome was not built in a day"));