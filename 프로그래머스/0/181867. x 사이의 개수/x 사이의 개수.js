function solution(myString) {
    let answer = myString.split('x');
    let answer2 = [];
    for (let length of answer) {
        answer2.push(length.length);
    }
    return answer2;
}