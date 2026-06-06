function solution(arr) {
    let answer = [];

    for (let number of arr) {
        if (number >= 50 && number % 2 === 0) {
            answer.push(number / 2);
        } else if (number < 50 && number % 2 === 1) {
            answer.push(number * 2);
        } else {
            answer.push(number);
        }
    }

    return answer;
}