function solution(num_list) {
    var answer = 0;
    let sumNum = 0;
    let crossNum = 1;
    for(let i of num_list) {
        sumNum += i;
        crossNum *= i;
    }
    answer = crossNum > (sumNum **2) ? 0: 1;
    return answer;
}